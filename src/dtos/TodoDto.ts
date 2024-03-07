import { AutoMap } from '@automapper/classes'

export class TodoDto {
  @AutoMap()
  id!: number

  @AutoMap()
  description!: string

  @AutoMap()
  completed!: boolean
}
