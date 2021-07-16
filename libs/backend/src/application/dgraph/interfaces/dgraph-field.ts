import { DgraphEntityType } from '../dgraph-entity-type'
import { DgraphType } from './types/dgraph-type'

export interface DgraphField extends DgraphType<DgraphEntityType.Field> {
  type: DgraphType<any>
  key: string
  name: string
  description?: string
}
