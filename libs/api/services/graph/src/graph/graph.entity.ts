import { ObjectType } from '@nestjs/graphql'
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { EdgeEntity } from '../edge'
import { VertexEntity } from '../vertex'
import { IGraph } from './IGraph'
import { UserEntity } from '@codelab/api/services/user'

@Entity('graph')
@ObjectType({
  implements: [IGraph],
})
export class GraphEntity {
  @PrimaryGeneratedColumn()
  declare id: number

  @OneToMany('VertexEntity', 'graph')
  declare vertices: Array<VertexEntity>

  @OneToMany('EdgeEntity', 'graph')
  declare edges: Array<EdgeEntity>

  @ManyToOne('UserEntity', 'graphs')
  declare user: UserEntity
}
