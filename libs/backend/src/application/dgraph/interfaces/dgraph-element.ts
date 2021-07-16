import { DgraphEntityType } from '../dgraph-entity-type'
import { DgraphNode } from './core'
import { DgraphAtom } from './dgraph-atom'
import { DgraphComponent } from './dgraph-component'
import { DgraphFieldData } from './dgraph-field-data'

export interface DgraphElement
  extends DgraphNode<DgraphEntityType.Element, DgraphElement> {
  component?: DgraphComponent
  atom?: DgraphAtom
  props?: Array<DgraphFieldData>
  css?: string
}
