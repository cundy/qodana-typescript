import { DeleteResult } from 'typeorm'

import { TodoDto } from '../dtos/TodoDto'

export interface ITodoService {
  getTodo: (id: number) => Promise<TodoDto>

  getTodos: () => Promise<TodoDto[]>

  getTodosDone: () => Promise<TodoDto[]>

  getTodosStarted: () => Promise<TodoDto[]>

  createTodo: (title: string, completed: boolean) => Promise<TodoDto>

  updateTodo: (id: number, title: string, completed: boolean) => Promise<TodoDto>

  deleteTodo: (id: number) => Promise<DeleteResult>
}
