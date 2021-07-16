import { DgraphEntityType } from '../dgraph-entity-type'
import { DgraphField } from './dgraph-field'
import { DgraphType } from './types'
import { DgraphValue } from './values'

export interface DgraphFieldData
  extends DgraphType<DgraphEntityType.FieldData> {
  field: DgraphField
  value: DgraphValue
}
