import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphType } from '../types'

export interface DgraphIntValue extends DgraphType<DgraphEntityType.IntValue> {
  intValue: number
}
