import { DgraphEntity } from '../interfaces'

export type MutationJsonValue<TValue> = TValue extends any | undefined
  ? TValue | null | undefined
  : TValue

export type UidRef = Pick<DgraphEntity<any>, 'uid'>

/** Makes all uids optional and allows references to other entities and single items for array values */
export type DgraphCreateMutationJson<TEntity extends DgraphEntity<any>> = Omit<
  {
    [key in keyof TEntity]: key extends 'dgraph.type'
      ? TEntity[key]
      : TEntity[key] extends DgraphEntity<any>
      ?
          | UidRef
          | DgraphCreateMutationJson<TEntity[key]>
          | DgraphUpdateMutationJson<TEntity[key]>
      : TEntity[key] extends DgraphEntity<any> | null | undefined
      ? TEntity[key] extends infer TValue | null | undefined
        ? TValue extends DgraphEntity<any>
          ?
              | UidRef
              | DgraphCreateMutationJson<TValue>
              | DgraphUpdateMutationJson<TValue>
              | undefined
              | null
          : TValue extends Array<infer TItem>
          ? TItem extends DgraphEntity<any>
            ?
                | Array<DgraphCreateMutationJson<TItem>>
                | Pick<TItem, 'uid'>
                | DgraphCreateMutationJson<TItem>
                | undefined
                | null
            : MutationJsonValue<TEntity[key]>
          : MutationJsonValue<TEntity[key]>
        : never
      : TEntity[key] extends Array<infer TItem>
      ? TItem extends DgraphEntity<any>
        ?
            | Array<DgraphCreateMutationJson<TItem>>
            | Pick<TItem, 'uid'>
            | DgraphCreateMutationJson<TItem>
        : TEntity[key]
      : TEntity[key]
  },
  'uid'
> &
  Partial<Pick<DgraphEntity<any>, 'uid'>>

/** Makes all fields optional, except uid and allows setting array values as single references to uid */
export type DgraphUpdateMutationJson<TEntity extends DgraphEntity<any>> =
  Partial<DgraphCreateMutationJson<TEntity>> & Pick<DgraphEntity<any>, 'uid'>
