import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphType } from '../types'
import { DgraphValue } from './dgraph-value'

export interface DgraphArrayValue
  extends DgraphType<DgraphEntityType.ArrayValue> {
  values?: Array<DgraphValue>
}
