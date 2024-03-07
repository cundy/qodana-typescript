import { HttpRequest, HttpResponseInit } from '@azure/functions'

import TodoService from '../services/TodoService'
import { HttpMethods } from '../utils/http'
import { deleteTodoController } from './deleteTodoController'
import { getTodoController } from './getTodoController'
import { postTodoController } from './postTodoController'
import { putTodoController } from './putTodoController'

export const todoController = async (request: HttpRequest, todoService: TodoService): Promise<HttpResponseInit> => {
  const { method } = request

  // TODO: refactor to a router style
  switch (method) {
    case HttpMethods.GET:
      return getTodoController(request, todoService)

    case HttpMethods.POST:
      return postTodoController(request, todoService)

    case HttpMethods.PUT:
      return putTodoController(request, todoService)

    case HttpMethods.DELETE:
      return deleteTodoController(request, todoService)

    default:
      return { status: 404 }
  }
}
