import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphType } from '../types'

export interface DgraphFloatValue
  extends DgraphType<DgraphEntityType.FloatValue> {
  floatValue: number
}
