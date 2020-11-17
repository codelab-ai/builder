import { ObjectType } from '@nestjs/graphql'
import * as bcrypt from 'bcrypt'
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { GraphEntity } from '../graph/graph.entity'
import { IUser } from './IUser'

@Entity('user')
@ObjectType({
  implements: [IUser],
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  declare id: string

  @Column({
    type: 'text',
    unique: true,
  })
  declare email: string

  @Column({
    type: 'text',
    select: false,
    nullable: true,
  })
  declare password: string

  @Column({
    type: 'text',
    nullable: true,
  })
  declare googleProviderId: string

  /**
   * Won't trigger if we use `repository.save()`
   */
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return bcrypt.compare(attempt, this.password)
  }

  @OneToMany((type) => GraphEntity, (graph) => graph.user)
  declare graphs: Array<GraphEntity>
}
