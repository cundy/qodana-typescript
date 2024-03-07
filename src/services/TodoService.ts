import { TodoEntity } from '../entities/TodoEntity'
import { toTodoDto, toTodoDtos } from '../mappers/todoMapper'
import { ITodoRepository } from '../repositories/ITodoRepository'
import { ITodoService } from './ITodoService'

export default class TodoService implements ITodoService {
  private _todoRepository: ITodoRepository

  constructor(todoRepository: ITodoRepository) {
    this._todoRepository = todoRepository
  }
  // getTodosFromStoredProcs: (completed: boolean) => Promise<TodoDto[]>

  async getTodo(id: number) {
    const todo = await this._todoRepository.getTodo(id)
    return toTodoDto(todo)
  }

  async getTodos() {
    const todos = await this._todoRepository.getTodos()
    return toTodoDtos(todos)
  }

  async getTodosStarted() {
    const todos = await this._todoRepository.getTodosFromStoredProc()
    return toTodoDtos(todos)
  }

  async getTodosDone() {
    const todos = await this._todoRepository.getTodosFromStoredProc(true)
    return toTodoDtos(todos)
  }

  async createTodo(title: string, completed: boolean) {
    const newTodo = new TodoEntity()
    newTodo.title = title
    newTodo.completed = completed

    const todo = await this._todoRepository.upsertTodo(newTodo)
    return toTodoDto(todo)
  }

  async updateTodo(id: number, title: string, completed: boolean) {
    const todo = await this._todoRepository.upsertTodo({
      ...new TodoEntity(),
      id,
      completed,
      title,
    })
    return toTodoDto(todo)
  }

  deleteTodo = async (id: number) => this._todoRepository.deleteTodo(id)
}
