import { DgraphEntityType } from '../../dgraph-entity-type'
import { DgraphFieldData } from '../dgraph-field-data'
import { DgraphType } from '../types'

export interface DgraphInterfaceValue
  extends DgraphType<DgraphEntityType.InterfaceValue> {
  fieldData?: Array<DgraphFieldData>
}
