import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphType } from '../types'

export interface DgraphStringValue
  extends DgraphType<DgraphEntityType.StringValue> {
  stringValue: string
}
