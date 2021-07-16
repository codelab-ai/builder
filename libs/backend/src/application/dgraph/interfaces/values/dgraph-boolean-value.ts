import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphType } from '../types'

export interface DgraphBooleanValue
  extends DgraphType<DgraphEntityType.BooleanValue> {
  booleanValue: boolean
}
