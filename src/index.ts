import 'dotenv/config'
import 'reflect-metadata'

import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions'

import { todoController } from './controllers/todoController'
import { getDbClient } from './db/dbClient'
import { TodoRepository } from './repositories/TodoRepository'
import TodoService from './services/TodoService'
import { HttpMethods } from './utils/http'

// TODO: unit tests

async function todoHandler(request: HttpRequest, _: InvocationContext): Promise<HttpResponseInit> {
  // TODO: setup dependency injection
  // https://github.com/inversify/InversifyJS
  const dbClient = await getDbClient()
  const todoRepository = new TodoRepository(dbClient)
  const todoService = new TodoService(todoRepository)

  return await todoController(request, todoService)
}

app.http('todos', {
  authLevel: 'function',
  methods: [HttpMethods.GET, HttpMethods.POST, HttpMethods.PUT, HttpMethods.DELETE],
  route: 'todos/{id?}',
  handler: todoHandler,
})
