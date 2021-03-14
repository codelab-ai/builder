import { JSONSchema7TypeName } from 'json-schema'

interface IRjsfArray {
  format?: any
  minLength?: number
  uniqueItems?: boolean
  type: JSONSchema7TypeName
  default?: any
  enum?: Array<string>
}

export const RjsfArray = (props: IRjsfArray) => (
  target: {} | any,
  name?: PropertyKey,
): any => {
  //
}
