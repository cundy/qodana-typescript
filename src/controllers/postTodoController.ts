import { HttpRequest, HttpResponseInit } from '@azure/functions'

import TodoService from '../services/TodoService'
import { createTodoValidation } from '../validations/createTodoValidation'

// TODO: refactor to a router style
export const postTodoController = async (request: HttpRequest, todoService: TodoService): Promise<HttpResponseInit> => {
  try {
    const json = await request.json()
    const { title, completed } = createTodoValidation.parse(json)
    const jsonBody = await todoService.createTodo(title, completed)

    return { jsonBody }
  } catch (error) {
    return { status: 500, body: (error as Error).stack }
  }
}
