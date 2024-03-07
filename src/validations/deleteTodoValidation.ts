import { z } from 'zod'

export const deleteTodoValidation = z.object({
  id: z.preprocess(val => Number(val), z.number()),
})
