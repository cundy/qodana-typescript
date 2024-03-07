import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { UserEntity } from './UserEntity'

@Entity('Todo')
export class TodoEntity {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id!: number

  @AutoMap()
  @Column()
  title!: string

  @AutoMap()
  @Column()
  completed!: boolean

  @ManyToOne(() => UserEntity, user => user.todos, {
    /**
     * If set to true, the relation will always be loaded with the main entity when using find* methods or QueryBuilder on this entity
     * source: https://typeorm.io/relations#relation-options
     */
    lazy: true,
    /**
     * Set this relation to be eager.
     * Eager relations are always loaded automatically when relation's owner entity is loaded using find* methods.
     * Only using QueryBuilder prevents loading eager relations.
     * Eager flag cannot be set from both sides of relation - you can eager load only one side of the relationship.
     * source: https://typeorm.io/eager-and-lazy-relations
     */
    eager: true,
  })
  user!: Promise<UserEntity>
}
