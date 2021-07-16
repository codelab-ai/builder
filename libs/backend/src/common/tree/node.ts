import { Entity } from '../entity/entity'

export interface Node<TData> extends Entity {
  children: Array<Node<TData>>
  data: TData
}
