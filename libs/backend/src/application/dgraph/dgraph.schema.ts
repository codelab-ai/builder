/**
 * !
 * If you change the schema - change the interfaces in ./interfaces too
 * If you add new types, add them to ./dgraph-entity-type
 */
export const dgraphSchema = `

    type Tree {
       name
       root
    }

    type Node {
       name
       children
    }

    type App {
       ownerId
       name
       pages
    }

    type Page {}

    type Component {}

    type Library {
      ownerId
      name
      atoms
      components
    }

    type Element {
      component
      atom
      props
      css
    }

    type Atom {
      name
      atomType
      api
    }


   type Type {
      name
   }

   type PrimitiveType {
      primitiveKind
   }

   type ArrayType {
      itemType
   }

   type EnumTypeValue {
      name
      stringValue
   }

   type EnumType {
      allowedValues
   }

   type InterfaceType {
      fields
   }

   type Field {
      type
      key
      name
      description
   }

   type StringValue {
      stringValue
   }

   type IntValue {
      intValue
   }

   type FloatValue {
      floatValue
   }

   type BooleanValue {
      booleanValue
   }

   type ArrayValue {
      values
   }

   type InterfaceValue {
      fieldData
   }

   type FieldData {
      field
      value
   }

   name: string @index(term) .
   description: string .

   children: [uid] @reverse .

   ownerId: string .
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
