import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphEntity } from './dgraph-entity'

export interface DgraphNode<
  TType extends DgraphEntityType,
  TNodeType extends DgraphNode<TType, TNodeType>,
> extends DgraphEntity<[DgraphEntityType.Node, TType]> {
  name: string
  children: Array<TNodeType & { 'children|order': number }>
}
