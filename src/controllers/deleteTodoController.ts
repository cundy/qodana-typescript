import { HttpRequest, HttpResponseInit } from '@azure/functions'

import TodoService from '../services/TodoService'
import { deleteTodoValidation } from '../validations/deleteTodoValidation'

// TODO: refactor to a router style
export const deleteTodoController = async (
  request: HttpRequest,
  todoService: TodoService,
): Promise<HttpResponseInit> => {
  try {
    const { params } = request
    const { id } = deleteTodoValidation.parse(params)
    await todoService.deleteTodo(id)

    return { status: 204 }
  } catch (error) {
    return { status: 500, body: (error as Error).stack }
  }
}
