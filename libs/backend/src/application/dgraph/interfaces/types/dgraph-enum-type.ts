import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphType } from './dgraph-type'

export interface DgraphEnumType extends DgraphType<DgraphEntityType.EnumType> {
  allowedValues: string
}
