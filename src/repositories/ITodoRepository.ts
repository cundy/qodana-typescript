import { DeleteResult } from 'typeorm'

import { TodoEntity } from '../entities/TodoEntity'

export interface ITodoRepository {
  getTodo: (id: number) => Promise<TodoEntity | null>

  getTodos: () => Promise<TodoEntity[]>

  getTodosFromStoredProc: (completed?: boolean) => Promise<TodoEntity[]>

  upsertTodo: (todo: TodoEntity) => Promise<TodoEntity>

  deleteTodo: (id: number) => Promise<DeleteResult>
}
