import { z } from 'zod'

export const updateTodoValidation = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})
