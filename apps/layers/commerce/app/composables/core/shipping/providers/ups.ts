import { BaseShippingProvider, ShippingRate, ShippingAddress, ShippingPackage, BookingRequest, BookingResponse, TrackingInfo } from './base'

export class UPSProvider extends BaseShippingProvider {
  name = 'UPS'
  private apiKey: string
  private apiUrl = 'https://onlinetools.ups.com/api'

  constructor(apiKey: string) {
    super()
    this.apiKey = apiKey
  }

  async getRates(from: ShippingAddress, to: ShippingAddress, packages: ShippingPackage[]): Promise<ShippingRate[]> {
    const response = await $fetch(`${this.apiUrl}/rating/v1/rate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: {
        RateRequest: {
          Shipment: {
            Shipper: { Address: this.formatAddress(from) },
            ShipTo: { Address: this.formatAddress(to) },
            Package: packages.map(pkg => ({
              PackagingType: { Code: '02' },
              Dimensions: pkg.dimensions,
              PackageWeight: { Weight: pkg.weight.toString() }
            }))
          }
        }
      }
    })

    return response.RateResponse?.RatedShipment?.map((rate: any) => ({
      service: this.getServiceName(rate.Service.Code),
      serviceCode: rate.Service.Code,
      cost: parseFloat(rate.TotalCharges.MonetaryValue),
      deliveryDays: this.getDeliveryDays(rate.Service.Code),
      carrier: 'UPS',
      transitTime: rate.GuaranteedDelivery?.BusinessDaysInTransit
    })) || []
  }

  async bookShipment(request: BookingRequest): Promise<BookingResponse> {
    const response = await $fetch(`${this.apiUrl}/ship/v1/shipments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: {
        ShipmentRequest: {
          Shipment: {
            Shipper: {
              Name: request.from.name || request.from.company,
              Address: this.formatAddress(request.from)
            },
            ShipTo: {
              Name: request.to.name || request.to.company,
              Address: this.formatAddress(request.to)
            },
            Service: { Code: this.getServiceCode(request.service) },
            Package: request.packages.map(pkg => ({
              PackagingType: { Code: '02' },
              Dimensions: pkg.dimensions,
              PackageWeight: { Weight: pkg.weight.toString() },
              PackageServiceOptions: request.insurance ? {
                DeclaredValue: {
                  CurrencyCode: 'USD',
                  MonetaryValue: request.insurance.toString()
                }
              } : undefined
            }))
          },
          LabelSpecification: {
            LabelImageFormat: { Code: 'PDF' }
          }
        }
      }
    })

    const shipment = response.ShipmentResponse.ShipmentResults
    return {
      trackingNumber: shipment.PackageResults[0].TrackingNumber,
      labelUrl: shipment.PackageResults[0].ShippingLabel.GraphicImage,
      cost: parseFloat(shipment.ShipmentCharges.TotalCharges.MonetaryValue),
      service: request.service
    }
  }

  async trackShipment(trackingNumber: string): Promise<TrackingInfo> {
    const response = await $fetch(`${this.apiUrl}/track/v1/details/${trackingNumber}`, {
      headers: { 'Authorization': `Bearer ${this.apiKey}` }
    })

    const shipment = response.trackResponse.shipment[0]
    return {
      trackingNumber,
      status: shipment.package[0].currentStatus.description,
      events: shipment.package[0].activity?.map((event: any) => ({
        timestamp: new Date(event.date + 'T' + event.time),
        status: event.status.description,
        location: event.location?.address?.city,
        description: event.status.description
      })) || [],
      estimatedDelivery: shipment.deliveryDate ? new Date(shipment.deliveryDate.date) : undefined
    }
  }

  async cancelShipment(trackingNumber: string): Promise<boolean> {
    try {
      await $fetch(`${this.apiUrl}/ship/v1/shipments/cancel/${trackingNumber}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${this.apiKey}` }
      })
      return true
    } catch {
      return false
    }
  }

  async validateAddress(address: ShippingAddress): Promise<ShippingAddress> {
    const response = await $fetch(`${this.apiUrl}/addressvalidation/v1/1`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: {
        AddressValidationRequest: {
          Address: this.formatAddress(address)
        }
      }
    })

    const validAddress = response.AddressValidationResponse?.Result?.Address
    return validAddress ? {
      ...address,
      street: validAddress.AddressLine?.[0] || address.street,
      city: validAddress.PoliticalDivision2 || address.city,
      state: validAddress.PoliticalDivision1 || address.state,
      zip: validAddress.PostcodePrimaryLow || address.zip
    } : address
  }

  private formatAddress(address: ShippingAddress) {
    return {
      AddressLine: [address.street],
      City: address.city,
      StateProvinceCode: address.state,
      PostalCode: address.zip,
      CountryCode: address.country
    }
  }

  private getServiceName(code: string): string {
    const services: Record<string, string> = {
      '01': 'Next Day Air',
      '02': '2nd Day Air',
      '03': 'Ground',
      '12': '3 Day Select',
      '13': 'Next Day Air Saver',
      '14': 'Next Day Air Early AM',
      '59': '2nd Day Air AM',
      '65': 'Express Saver'
    }
    return services[code] || 'Standard'
  }

  private getServiceCode(serviceName: string): string {
    const codes: Record<string, string> = {
      'Next Day Air': '01',
      '2nd Day Air': '02',
      'Ground': '03',
      '3 Day Select': '12',
      'Next Day Air Saver': '13',
      'Next Day Air Early AM': '14',
      '2nd Day Air AM': '59',
      'Express Saver': '65'
    }
    return codes[serviceName] || '03'
  }

  private getDeliveryDays(serviceCode: string): number {
    const serviceDays: Record<string, number> = {
      '01': 1, '02': 2, '03': 5, '12': 3,
      '13': 1, '14': 1, '59': 2, '65': 1
    }
    return serviceDays[serviceCode] || 5
  }
}