import { HttpRequest, HttpResponseInit } from '@azure/functions'

import { ITodoService } from '../services/ITodoService'
import { getTodoValidation } from '../validations/getTodoValidation'

// TODO: refactor to a router style
export const getTodoController = async (request: HttpRequest, todoService: ITodoService): Promise<HttpResponseInit> => {
  try {
    const { params } = request
    const id = params?.id

    if (!id) {
      const jsonBody = await todoService.getTodos()
      return { jsonBody }
    }

    if (id === 'done') {
      const jsonBody = await todoService.getTodosDone()
      return { jsonBody }
    }

    if (id === 'started') {
      const jsonBody = await todoService.getTodosStarted()
      return { jsonBody }
    }

    const { id: idNumber } = getTodoValidation.parse(params)
    const todo = await todoService.getTodo(idNumber)

    if (!todo) {
      return { status: 404 }
    }

    return { jsonBody: todo }
  } catch (error) {
    return { status: 500, body: (error as Error).stack }
  }
}
