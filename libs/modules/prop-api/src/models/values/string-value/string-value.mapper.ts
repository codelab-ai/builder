import { BaseDgraphFields, DeepPartial, IDgraphMapper } from '@codelab/backend'
import { Injectable } from '@nestjs/common'
import {
  DgraphStringValue,
  DgraphStringValueFields,
} from './dgraph-string-value.model'
import { StringValue } from './string-value.model'

@Injectable()
export class StringValueMapper
  implements IDgraphMapper<DgraphStringValue, StringValue>
{
  map(input: DeepPartial<DgraphStringValue>) {
    const dgraphValue = DgraphStringValue.Schema.parse(input)

    const value = new StringValue(
      dgraphValue[BaseDgraphFields.uid],
      dgraphValue[DgraphStringValueFields.value],
    )

    StringValue.Schema.parse(value)

    return value
  }
}
