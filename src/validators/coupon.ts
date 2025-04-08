import { z } from 'zod'

export const couponSchema = z.object({
  code: z.string().min(3),
  type: z.enum(['PERCENTAGE', 'FIXED']),
  value: z.number().min(1),
  description: z.string().optional(),
  expiryDate: z.string().optional()
})
