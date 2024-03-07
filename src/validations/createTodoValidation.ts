import { z } from 'zod'

export const createTodoValidation = z.object({
  title: z.string(),
  completed: z.boolean(),
})
