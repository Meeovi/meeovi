import { z } from 'zod'

export const useValidation = () => {
  // Schema definitions for data validation
  const schemas = {
    coupon: z.object({
      code: z.string().min(3).max(50).regex(/^[A-Z0-9_-]+$/),
      discount_value: z.number().positive().max(100),
      minimum_amount: z.number().nonnegative().optional(),
      usage_limit: z.number().positive().optional(),
      valid_from: z.string().datetime().optional(),
      valid_until: z.string().datetime().optional()
    }),

    order: z.object({
      customer_id: z.string().uuid(),
      total_amount: z.number().positive(),
      currency: z.string().length(3),
      shipping_address: z.object({
        street: z.string().min(1),
        city: z.string().min(1),
        postal_code: z.string().min(3),
        country: z.string().length(2)
      })
    }),

    product: z.object({
      name: z.string().min(1).max(255),
      sku: z.string().min(1).max(100),
      price: z.number().positive(),
      weight: z.number().nonnegative().optional(),
      dimensions: z.object({
        length: z.number().positive(),
        width: z.number().positive(),
        height: z.number().positive()
      }).optional()
    })
  }

  const validate = <T>(schema: z.ZodSchema<T>, data: unknown): { success: boolean; data?: T; errors?: string[] } => {
    try {
      const result = schema.parse(data)
      return { success: true, data: result }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { 
          success: false, 
          errors: error.errors.map(e => `${e.path.join('.')}: ${e.message}`)
        }
      }
      return { success: false, errors: ['Validation failed'] }
    }
  }

  const sanitizeInput = (input: string): string => {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/[<>]/g, '')
      .trim()
  }

  return {
    schemas,
    validate,
    sanitizeInput
  }
}