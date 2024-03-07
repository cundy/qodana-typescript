import { z } from 'zod'

export const getTodoValidation = z.object({
  id: z.preprocess(val => Number(val), z.number()),
})
