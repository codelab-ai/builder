/**
 * !
 * If you change the schema - change the interfaces in ./interfaces too
 * If you add new types, add them to ./dgraph-entity-type
 */
import { DgraphEntityType } from './dgraph-entity-type'

export const dgraphSchema = `

    type ${DgraphEntityType.Tree} {
       name
       root
    }

    type ${DgraphEntityType.Node} {
       name
       children
    }

    type ${DgraphEntityType.App} {
       ownerId
       name
       pages
    }

    type ${DgraphEntityType.Page} {}

    type ${DgraphEntityType.Component} {}

    type ${DgraphEntityType.Library} {
      ownerId
      name
      atoms
      components
    }

    type ${DgraphEntityType.Element} {
      component
      atom
      props
      css
    }

    type ${DgraphEntityType.Atom} {
      name
      atomType
      api
    }


   type ${DgraphEntityType.Type} {
      name
   }

   type ${DgraphEntityType.PrimitiveType} {
      primitiveKind
   }

   type ${DgraphEntityType.ArrayType} {
      itemType
   }

   type ${DgraphEntityType.EnumTypeValue} {
      name
      stringValue
   }

   type ${DgraphEntityType.EnumType} {
      allowedValues
   }

   type ${DgraphEntityType.InterfaceType} {
      fields
   }

   type ${DgraphEntityType.Field} {
      type
      key
      name
      description
   }

   type ${DgraphEntityType.StringValue} {
      stringValue
   }

   type ${DgraphEntityType.IntValue} {
      intValue
   }

   type ${DgraphEntityType.FloatValue} {
      floatValue
   }

   type ${DgraphEntityType.BooleanValue} {
      booleanValue
   }

   type ${DgraphEntityType.ArrayValue} {
      values
   }

   type ${DgraphEntityType.InterfaceValue} {
      fieldData
   }

   type ${DgraphEntityType.FieldData} {
      field
      value
   }

   name: string @index(term) .
   description: string .

   children: [uid] @reverse .

   ownerId: string @index(hash) .
   pages: [uid] @reverse .

   component: uid @reverse .
   atom: uid @reverse .
   props: [uid] @reverse .
   css: string .

   root: uid @reverse .

   atoms: [uid] @reverse .
   components: [uid] @reverse .

   atomType: string @index(term) .
   api: uid @reverse .

   primitiveKind: string .
   itemType: uid .

   stringValue: string .
   intValue: int .
   floatValue: float .
   booleanValue: bool .

   values: [uid] .
   fieldData: [uid] .

   allowedValues: [uid] @reverse .

   fields: [uid] @reverse .

   type: uid @reverse .
   key: string @index(term) .

   field: uid @reverse .
   value: uid @reverse .
`
