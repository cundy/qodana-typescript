import { HttpRequest, HttpResponseInit } from '@azure/functions'

import TodoService from '../services/TodoService'
import { updateTodoValidation } from '../validations/updateTodoValidation'

// TODO: refactor to a router style
export const putTodoController = async (request: HttpRequest, todoService: TodoService): Promise<HttpResponseInit> => {
  try {
    const json = await request.json()
    const { id, title, completed } = updateTodoValidation.parse(json)
    const jsonBody = await todoService.updateTodo(id, title, completed)

    return { jsonBody }
  } catch (error) {
    return { status: 500, body: (error as Error).stack }
  }
}
