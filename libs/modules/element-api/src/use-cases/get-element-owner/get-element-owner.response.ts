export type GetElementOwnerResponse =
  | {
      found: false
      ownerId?: never
      treeId?: never
    }
  | {
      found: true
      ownerId?: string
      treeId?: string
    }
