import {
  __FieldCollectionFragment,
  __InterfaceFragment,
  __TypeFragment,
  PrimitiveType,
} from '@codelab/codegen/graphql'
import { JSONSchemaType } from 'ajv'
import { PropertiesSchema } from 'ajv/lib/types/json-schema'
import _ from 'lodash'

// Maybe we can create a custom bridge to uniforms instead?
export class InterfaceJsonSchemaAdaptor {
  static getJsonTypeFromPrimitiveType(primitiveType: PrimitiveType) {
    switch (primitiveType) {
      case PrimitiveType.String:
        return 'string'
      case PrimitiveType.Integer:
        return 'integer'
      case PrimitiveType.Float:
        return 'number'
      case PrimitiveType.Boolean:
        return 'boolean'
      default:
        throw new Error('Primitive type not recognized ' + primitiveType)
    }
  }

  static toJsonProperty(
    type: __TypeFragment,
    getType: (typeId: string) => __TypeFragment,
  ): Record<string, any> {
    switch (type.__typename) {
      case 'SimpleType':
        return {
          type: InterfaceJsonSchemaAdaptor.getJsonTypeFromPrimitiveType(
            type.primitiveType,
          ),
          // nullable: true,
        }
      case 'ArrayType':
        return {
          type: 'array',
          // nullable: true,
          // This is a bit confusing, because the variable names are alike
          // but it means basically: get the array item type from the root types array
          // and map it to a json property
          items: InterfaceJsonSchemaAdaptor.toJsonProperty(
            getType(type.typeId),
            getType,
          ),
        }
      case 'EnumType':
        return {
          type: 'string',
          // nullable: true,
          enum: type.allowedValues.map((v) => v.name),
        }
      case 'Interface':
        return {
          type: 'object',
          // nullable: true,
          properties: InterfaceJsonSchemaAdaptor.toJsonProperties(
            {
              fields: type.fieldCollection.fields,
              types: type.fieldCollection.types.map((t) => {
                // The Interface and Array types are only referenced by ID, need to get them from
                // the root types array
                if (
                  t.__typename === 'ArrayType' ||
                  t.__typename === 'Interface'
                ) {
                  return getType(t.id)
                }

                return t
              }),
            },
            getType,
          ),
        }
      default:
        throw new Error('Type not recognized ' + (type as any).__typename)
    }
  }

  static toJsonProperties(
    fieldCollection: __FieldCollectionFragment,
    getType: (typeId: string) => __TypeFragment,
  ) {
    const properties: PropertiesSchema<any> = {}

    for (const field of fieldCollection.fields) {
      const type = getType(field.typeId)
      properties[field.key] = {
        ...(InterfaceJsonSchemaAdaptor.toJsonProperty(type, getType) as any),
        label: field.name,
      }
    }

    return properties
  }

  static toJsonSchema<TData>(
    int: __InterfaceFragment,
    getType?: (typeId: string) => __TypeFragment,
  ): JSONSchemaType<TData> {
    if (!getType) {
      const typesByIdMap = _.keyBy(int.fieldCollection.types, (i) => i.id)
      getType = (typeId) => typesByIdMap[typeId]
    }

    return {
      type: 'object',
      properties: InterfaceJsonSchemaAdaptor.toJsonProperties(
        int.fieldCollection,
        getType,
      ),
    } as any // cast is needed, because we can't verify at compile time that the interface matches TData
  }
}
