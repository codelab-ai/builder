import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphEntity } from '../core'

export interface DgraphType<TType extends DgraphEntityType>
  extends DgraphEntity<[DgraphEntityType.Type, TType]> {
  name: string
}
