import { DgraphArrayValue } from './dgraph-array-value'
import { DgraphBooleanValue } from './dgraph-boolean-value'
import { DgraphFloatValue } from './dgraph-float-value'
import { DgraphIntValue } from './dgraph-int-value'
import { DgraphInterfaceValue } from './dgraph-interface-value'
import { DgraphStringValue } from './dgraph-string-value'

export type DgraphValue =
  | DgraphStringValue
  | DgraphIntValue
  | DgraphFloatValue
  | DgraphBooleanValue
  | DgraphArrayValue
  | DgraphInterfaceValue
