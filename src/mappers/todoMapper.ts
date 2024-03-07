import { createMap, forMember, mapFrom } from '@automapper/core'

import { TodoDto } from '../dtos/TodoDto'
import { TodoEntity } from '../entities/TodoEntity'
import { mapper } from '.'

createMap(
  mapper,
  TodoEntity,
  TodoDto,
  forMember(
    dto => dto.description,
    mapFrom(entity => entity.title),
  ),
)

export const toTodoDto = (todo: TodoEntity | null) => mapper.map(todo, TodoEntity, TodoDto)

export const toTodoDtos = (todos: TodoEntity[]) => mapper.mapArray(todos, TodoEntity, TodoDto)
