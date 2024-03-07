import { DataSource, Repository } from 'typeorm'

import { TodoEntity } from '../entities/TodoEntity'
import { ITodoRepository } from './ITodoRepository'

export class TodoRepository implements ITodoRepository {
  private _repository: Repository<TodoEntity>
  private _dataSource: DataSource

  constructor(dataSource: DataSource) {
    this._dataSource = dataSource
    this._repository = dataSource.getRepository(TodoEntity)
  }

  getTodo = async (id: number) => await this._repository.findOneBy({ id })

  getTodos = async () =>
    await this._repository.find({
      /**
       * Indicates if eager relations should be loaded or not.
       * By default, they are loaded when find methods are used.
       */
      loadEagerRelations: true,
    })

  async getTodosFromStoredProc(completed = false) {
    const isCompleted = completed ? 1 : 0
    // https://typeorm.io/select-query-builder#using-parameters-to-escape-data
    return await this._dataSource.query<TodoEntity[]>('EXECUTE [dbo].[StoredProcedureName] @completed = @0', [
      isCompleted,
    ])
  }

  upsertTodo = async (todo: TodoEntity) => await this._repository.save(todo)

  deleteTodo = async (id: number) => await this._repository.delete(id)
}
