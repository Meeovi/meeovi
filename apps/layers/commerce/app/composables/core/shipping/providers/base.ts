export interface ShippingRate {
  service: string
  cost: number
  deliveryDays: number
  carrier: string
  serviceCode: string
  transitTime?: string
}

export interface ShippingAddress {
  name?: string
  company?: string
  street: string
  street2?: string
  city: string
  state: string
  zip: string
  country: string
  phone?: string
  email?: string
}

export interface ShippingPackage {
  weight: number
  dimensions: { length: number; width: number; height: number }
  value: number
  description?: string
}

export interface BookingRequest {
  from: ShippingAddress
  to: ShippingAddress
  packages: ShippingPackage[]
  service: string
  reference?: string
  insurance?: number
}

export interface BookingResponse {
  trackingNumber: string
  labelUrl?: string
  cost: number
  service: string
  estimatedDelivery?: Date
}

export interface TrackingEvent {
  timestamp: Date
  status: string
  location?: string
  description: string
}

export interface TrackingInfo {
  trackingNumber: string
  status: string
  events: TrackingEvent[]
  estimatedDelivery?: Date
  actualDelivery?: Date
}

export abstract class BaseShippingProvider {
  abstract name: string
  abstract getRates(from: ShippingAddress, to: ShippingAddress, packages: ShippingPackage[]): Promise<ShippingRate[]>
  abstract bookShipment(request: BookingRequest): Promise<BookingResponse>
  abstract trackShipment(trackingNumber: string): Promise<TrackingInfo>
  abstract cancelShipment?(trackingNumber: string): Promise<boolean>
  abstract validateAddress?(address: ShippingAddress): Promise<ShippingAddress>
}