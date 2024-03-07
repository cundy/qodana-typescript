import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { TodoEntity } from './TodoEntity'

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  age!: number

  @OneToMany(() => TodoEntity, todo => todo.user)
  todos!: TodoEntity[]
}
