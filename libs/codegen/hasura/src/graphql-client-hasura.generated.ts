import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  json: Record<string, any>
  jsonb: Record<string, any>
  uuid: string
}
//

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

export type LambdaInput = {
  body?: Maybe<Scalars['String']>
  id: Scalars['String']
  library_id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type LambdaOutput = {
  payload: Scalars['String']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "app" */
export type App = {
  id: Scalars['uuid']
  name: Scalars['String']
  /** An array relationship */
  pages: Array<Page>
  /** An aggregate relationship */
  pages_aggregate: Page_Aggregate
  /** An object relationship */
  user: User
  user_id: Scalars['String']
}

/** columns and relationships of "app" */
export type AppPagesArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Order_By>>
  where?: Maybe<Page_Bool_Exp>
}

/** columns and relationships of "app" */
export type AppPages_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Order_By>>
  where?: Maybe<Page_Bool_Exp>
}

/** aggregated selection of "app" */
export type App_Aggregate = {
  aggregate?: Maybe<App_Aggregate_Fields>
  nodes: Array<App>
}

/** aggregate fields of "app" */
export type App_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<App_Max_Fields>
  min?: Maybe<App_Min_Fields>
}

/** aggregate fields of "app" */
export type App_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<App_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "app" */
export type App_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<App_Max_Order_By>
  min?: Maybe<App_Min_Order_By>
}

/** input type for inserting array relation for remote table "app" */
export type App_Arr_Rel_Insert_Input = {
  data: Array<App_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<App_On_Conflict>
}

/** Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'. */
export type App_Bool_Exp = {
  _and?: Maybe<Array<App_Bool_Exp>>
  _not?: Maybe<App_Bool_Exp>
  _or?: Maybe<Array<App_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  pages?: Maybe<Page_Bool_Exp>
  user?: Maybe<User_Bool_Exp>
  user_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "app" */
export enum App_Constraint {
  /** unique or primary key constraint */
  AppsPkey = 'apps_pkey',
}

/** input type for inserting data into table "app" */
export type App_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  pages?: Maybe<Page_Arr_Rel_Insert_Input>
  user?: Maybe<User_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type App_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "app" */
export type App_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type App_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "app" */
export type App_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "app" */
export type App_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<App>
}

/** input type for inserting object relation for remote table "app" */
export type App_Obj_Rel_Insert_Input = {
  data: App_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<App_On_Conflict>
}

/** on conflict condition type for table "app" */
export type App_On_Conflict = {
  constraint: App_Constraint
  update_columns: Array<App_Update_Column>
  where?: Maybe<App_Bool_Exp>
}

/** Ordering options when selecting data from "app". */
export type App_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  pages_aggregate?: Maybe<Page_Aggregate_Order_By>
  user?: Maybe<User_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: app */
export type App_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "app" */
export enum App_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "app" */
export type App_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

/** update columns of table "app" */
export enum App_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
}

/** columns and relationships of "atom" */
export type Atom = {
  atom_type_id: Scalars['uuid']
  id: Scalars['uuid']
  library_id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
  /** An object relationship */
  props?: Maybe<Prop_Type_C>
  /** An array relationship */
  styles: Array<Style_Atom>
  /** An aggregate relationship */
  styles_aggregate: Style_Atom_Aggregate
  /** An array relationship */
  tags: Array<Tag_Atom>
  /** An aggregate relationship */
  tags_aggregate: Tag_Atom_Aggregate
  /** An object relationship */
  type: Atom_Type
}

/** columns and relationships of "atom" */
export type AtomStylesArgs = {
  distinct_on?: Maybe<Array<Style_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Atom_Order_By>>
  where?: Maybe<Style_Atom_Bool_Exp>
}

/** columns and relationships of "atom" */
export type AtomStyles_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Atom_Order_By>>
  where?: Maybe<Style_Atom_Bool_Exp>
}

/** columns and relationships of "atom" */
export type AtomTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

/** columns and relationships of "atom" */
export type AtomTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

/** aggregated selection of "atom" */
export type Atom_Aggregate = {
  aggregate?: Maybe<Atom_Aggregate_Fields>
  nodes: Array<Atom>
}

/** aggregate fields of "atom" */
export type Atom_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Atom_Max_Fields>
  min?: Maybe<Atom_Min_Fields>
}

/** aggregate fields of "atom" */
export type Atom_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Atom_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "atom" */
export type Atom_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Atom_Max_Order_By>
  min?: Maybe<Atom_Min_Order_By>
}

/** input type for inserting array relation for remote table "atom" */
export type Atom_Arr_Rel_Insert_Input = {
  data: Array<Atom_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Atom_On_Conflict>
}

/** Boolean expression to filter rows from the table "atom". All fields are combined with a logical 'AND'. */
export type Atom_Bool_Exp = {
  _and?: Maybe<Array<Atom_Bool_Exp>>
  _not?: Maybe<Atom_Bool_Exp>
  _or?: Maybe<Array<Atom_Bool_Exp>>
  atom_type_id?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  owner_id?: Maybe<String_Comparison_Exp>
  prop_type_c_id?: Maybe<Uuid_Comparison_Exp>
  props?: Maybe<Prop_Type_C_Bool_Exp>
  styles?: Maybe<Style_Atom_Bool_Exp>
  tags?: Maybe<Tag_Atom_Bool_Exp>
  type?: Maybe<Atom_Type_Bool_Exp>
}

/** unique or primary key constraints on table "atom" */
export enum Atom_Constraint {
  /** unique or primary key constraint */
  VerticesPkey = 'vertices_pkey',
}

/** input type for inserting data into table "atom" */
export type Atom_Insert_Input = {
  atom_type_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
  props?: Maybe<Prop_Type_C_Obj_Rel_Insert_Input>
  styles?: Maybe<Style_Atom_Arr_Rel_Insert_Input>
  tags?: Maybe<Tag_Atom_Arr_Rel_Insert_Input>
  type?: Maybe<Atom_Type_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Atom_Max_Fields = {
  atom_type_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "atom" */
export type Atom_Max_Order_By = {
  atom_type_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  prop_type_c_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Atom_Min_Fields = {
  atom_type_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "atom" */
export type Atom_Min_Order_By = {
  atom_type_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  prop_type_c_id?: Maybe<Order_By>
}

/** response of any mutation on the table "atom" */
export type Atom_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Atom>
}

/** input type for inserting object relation for remote table "atom" */
export type Atom_Obj_Rel_Insert_Input = {
  data: Atom_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Atom_On_Conflict>
}

/** on conflict condition type for table "atom" */
export type Atom_On_Conflict = {
  constraint: Atom_Constraint
  update_columns: Array<Atom_Update_Column>
  where?: Maybe<Atom_Bool_Exp>
}

/** Ordering options when selecting data from "atom". */
export type Atom_Order_By = {
  atom_type_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  owner_id?: Maybe<Order_By>
  prop_type_c_id?: Maybe<Order_By>
  props?: Maybe<Prop_Type_C_Order_By>
  styles_aggregate?: Maybe<Style_Atom_Aggregate_Order_By>
  tags_aggregate?: Maybe<Tag_Atom_Aggregate_Order_By>
  type?: Maybe<Atom_Type_Order_By>
}

/** primary key columns input for table: atom */
export type Atom_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "atom" */
export enum Atom_Select_Column {
  /** column name */
  AtomTypeId = 'atom_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  PropTypeCId = 'prop_type_c_id',
}

/** input type for updating data in table "atom" */
export type Atom_Set_Input = {
  atom_type_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  owner_id?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
}

/** columns and relationships of "atom_type" */
export type Atom_Type = {
  /** An array relationship */
  atoms: Array<Atom>
  /** An aggregate relationship */
  atoms_aggregate: Atom_Aggregate
  id: Scalars['uuid']
  label: Scalars['String']
}

/** columns and relationships of "atom_type" */
export type Atom_TypeAtomsArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

/** columns and relationships of "atom_type" */
export type Atom_TypeAtoms_AggregateArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

/** aggregated selection of "atom_type" */
export type Atom_Type_Aggregate = {
  aggregate?: Maybe<Atom_Type_Aggregate_Fields>
  nodes: Array<Atom_Type>
}

/** aggregate fields of "atom_type" */
export type Atom_Type_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Atom_Type_Max_Fields>
  min?: Maybe<Atom_Type_Min_Fields>
}

/** aggregate fields of "atom_type" */
export type Atom_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Atom_Type_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "atom_type". All fields are combined with a logical 'AND'. */
export type Atom_Type_Bool_Exp = {
  _and?: Maybe<Array<Atom_Type_Bool_Exp>>
  _not?: Maybe<Atom_Type_Bool_Exp>
  _or?: Maybe<Array<Atom_Type_Bool_Exp>>
  atoms?: Maybe<Atom_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "atom_type" */
export enum Atom_Type_Constraint {
  /** unique or primary key constraint */
  AtomTypeIdKey = 'atom_type_id_key',
  /** unique or primary key constraint */
  AtomTypePkey = 'atom_type_pkey',
}

/** input type for inserting data into table "atom_type" */
export type Atom_Type_Insert_Input = {
  atoms?: Maybe<Atom_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Atom_Type_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Atom_Type_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "atom_type" */
export type Atom_Type_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Atom_Type>
}

/** input type for inserting object relation for remote table "atom_type" */
export type Atom_Type_Obj_Rel_Insert_Input = {
  data: Atom_Type_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Atom_Type_On_Conflict>
}

/** on conflict condition type for table "atom_type" */
export type Atom_Type_On_Conflict = {
  constraint: Atom_Type_Constraint
  update_columns: Array<Atom_Type_Update_Column>
  where?: Maybe<Atom_Type_Bool_Exp>
}

/** Ordering options when selecting data from "atom_type". */
export type Atom_Type_Order_By = {
  atoms_aggregate?: Maybe<Atom_Aggregate_Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
}

/** primary key columns input for table: atom_type */
export type Atom_Type_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "atom_type" */
export enum Atom_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
}

/** input type for updating data in table "atom_type" */
export type Atom_Type_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** update columns of table "atom_type" */
export enum Atom_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
}

/** update columns of table "atom" */
export enum Atom_Update_Column {
  /** column name */
  AtomTypeId = 'atom_type_id',
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  PropTypeCId = 'prop_type_c_id',
}

/** columns and relationships of "category" */
export type Category = {
  /** An array relationship */
  componentLinks: Array<Component_Link>
  /** An aggregate relationship */
  componentLinks_aggregate: Component_Link_Aggregate
  id: Scalars['uuid']
  /** An object relationship */
  library: Library
  library_id: Scalars['uuid']
  name?: Maybe<Scalars['String']>
  /** An array relationship */
  tags: Array<Tag>
  /** An aggregate relationship */
  tags_aggregate: Tag_Aggregate
}

/** columns and relationships of "category" */
export type CategoryComponentLinksArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

/** columns and relationships of "category" */
export type CategoryComponentLinks_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

/** columns and relationships of "category" */
export type CategoryTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

/** columns and relationships of "category" */
export type CategoryTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

/** aggregated selection of "category" */
export type Category_Aggregate = {
  aggregate?: Maybe<Category_Aggregate_Fields>
  nodes: Array<Category>
}

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Category_Max_Fields>
  min?: Maybe<Category_Min_Fields>
}

/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "category" */
export type Category_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Category_Max_Order_By>
  min?: Maybe<Category_Min_Order_By>
}

/** input type for inserting array relation for remote table "category" */
export type Category_Arr_Rel_Insert_Input = {
  data: Array<Category_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Category_On_Conflict>
}

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: Maybe<Array<Category_Bool_Exp>>
  _not?: Maybe<Category_Bool_Exp>
  _or?: Maybe<Array<Category_Bool_Exp>>
  componentLinks?: Maybe<Component_Link_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  tags?: Maybe<Tag_Bool_Exp>
}

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey',
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  componentLinks?: Maybe<Component_Link_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  tags?: Maybe<Tag_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Category_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "category" */
export type Category_Max_Order_By = {
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Category_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "category" */
export type Category_Min_Order_By = {
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Category>
}

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Category_On_Conflict>
}

/** on conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint
  update_columns: Array<Category_Update_Column>
  where?: Maybe<Category_Bool_Exp>
}

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  componentLinks_aggregate?: Maybe<Component_Link_Aggregate_Order_By>
  id?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  library_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  tags_aggregate?: Maybe<Tag_Aggregate_Order_By>
}

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
  /** column name */
  Name = 'name',
}

/** columns and relationships of "component" */
export type Component = {
  /** An array relationship */
  elements: Array<Component_Element>
  /** An aggregate relationship */
  elements_aggregate: Component_Element_Aggregate
  id: Scalars['uuid']
  label: Scalars['String']
  /** An object relationship */
  library: Library
  library_id: Scalars['uuid']
  /** An array relationship */
  links: Array<Component_Link>
  /** An aggregate relationship */
  links_aggregate: Component_Link_Aggregate
  /** An array relationship */
  tags: Array<Tag_Component>
  /** An aggregate relationship */
  tags_aggregate: Tag_Component_Aggregate
}

/** columns and relationships of "component" */
export type ComponentElementsArgs = {
  distinct_on?: Maybe<Array<Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Element_Order_By>>
  where?: Maybe<Component_Element_Bool_Exp>
}

/** columns and relationships of "component" */
export type ComponentElements_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Element_Order_By>>
  where?: Maybe<Component_Element_Bool_Exp>
}

/** columns and relationships of "component" */
export type ComponentLinksArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

/** columns and relationships of "component" */
export type ComponentLinks_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

/** columns and relationships of "component" */
export type ComponentTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

/** columns and relationships of "component" */
export type ComponentTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

/** aggregated selection of "component" */
export type Component_Aggregate = {
  aggregate?: Maybe<Component_Aggregate_Fields>
  nodes: Array<Component>
}

/** aggregate fields of "component" */
export type Component_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Component_Max_Fields>
  min?: Maybe<Component_Min_Fields>
}

/** aggregate fields of "component" */
export type Component_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Component_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "component" */
export type Component_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Component_Max_Order_By>
  min?: Maybe<Component_Min_Order_By>
}

/** input type for inserting array relation for remote table "component" */
export type Component_Arr_Rel_Insert_Input = {
  data: Array<Component_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Component_On_Conflict>
}

/** Boolean expression to filter rows from the table "component". All fields are combined with a logical 'AND'. */
export type Component_Bool_Exp = {
  _and?: Maybe<Array<Component_Bool_Exp>>
  _not?: Maybe<Component_Bool_Exp>
  _or?: Maybe<Array<Component_Bool_Exp>>
  elements?: Maybe<Component_Element_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  links?: Maybe<Component_Link_Bool_Exp>
  tags?: Maybe<Tag_Component_Bool_Exp>
}

/** unique or primary key constraints on table "component" */
export enum Component_Constraint {
  /** unique or primary key constraint */
  ComponentsPkey = 'components_pkey',
}

/** columns and relationships of "component_element" */
export type Component_Element = {
  /** An object relationship */
  atom: Atom
  atom_id: Scalars['uuid']
  /** An object relationship */
  component: Component
  component_id: Scalars['uuid']
  /** An array relationship */
  hocs: Array<Hoc_Component_Element>
  /** An aggregate relationship */
  hocs_aggregate: Hoc_Component_Element_Aggregate
  id: Scalars['uuid']
  label?: Maybe<Scalars['String']>
  /** An object relationship */
  props?: Maybe<Prop_C>
  props_c_id?: Maybe<Scalars['uuid']>
  /** An array relationship */
  styles: Array<Style_Component_Element>
  /** An aggregate relationship */
  styles_aggregate: Style_Component_Element_Aggregate
}

/** columns and relationships of "component_element" */
export type Component_ElementHocsArgs = {
  distinct_on?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Component_Element_Order_By>>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

/** columns and relationships of "component_element" */
export type Component_ElementHocs_AggregateArgs = {
  distinct_on?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Component_Element_Order_By>>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

/** columns and relationships of "component_element" */
export type Component_ElementStylesArgs = {
  distinct_on?: Maybe<Array<Style_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Component_Element_Order_By>>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

/** columns and relationships of "component_element" */
export type Component_ElementStyles_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Component_Element_Order_By>>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

/** aggregated selection of "component_element" */
export type Component_Element_Aggregate = {
  aggregate?: Maybe<Component_Element_Aggregate_Fields>
  nodes: Array<Component_Element>
}

/** aggregate fields of "component_element" */
export type Component_Element_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Component_Element_Max_Fields>
  min?: Maybe<Component_Element_Min_Fields>
}

/** aggregate fields of "component_element" */
export type Component_Element_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Component_Element_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "component_element" */
export type Component_Element_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Component_Element_Max_Order_By>
  min?: Maybe<Component_Element_Min_Order_By>
}

/** input type for inserting array relation for remote table "component_element" */
export type Component_Element_Arr_Rel_Insert_Input = {
  data: Array<Component_Element_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Component_Element_On_Conflict>
}

/** Boolean expression to filter rows from the table "component_element". All fields are combined with a logical 'AND'. */
export type Component_Element_Bool_Exp = {
  _and?: Maybe<Array<Component_Element_Bool_Exp>>
  _not?: Maybe<Component_Element_Bool_Exp>
  _or?: Maybe<Array<Component_Element_Bool_Exp>>
  atom?: Maybe<Atom_Bool_Exp>
  atom_id?: Maybe<Uuid_Comparison_Exp>
  component?: Maybe<Component_Bool_Exp>
  component_id?: Maybe<Uuid_Comparison_Exp>
  hocs?: Maybe<Hoc_Component_Element_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  props?: Maybe<Prop_C_Bool_Exp>
  props_c_id?: Maybe<Uuid_Comparison_Exp>
  styles?: Maybe<Style_Component_Element_Bool_Exp>
}

/** unique or primary key constraints on table "component_element" */
export enum Component_Element_Constraint {
  /** unique or primary key constraint */
  ComponentElementsPkey = 'component_elements_pkey',
}

/** input type for inserting data into table "component_element" */
export type Component_Element_Insert_Input = {
  atom?: Maybe<Atom_Obj_Rel_Insert_Input>
  atom_id?: Maybe<Scalars['uuid']>
  component?: Maybe<Component_Obj_Rel_Insert_Input>
  component_id?: Maybe<Scalars['uuid']>
  hocs?: Maybe<Hoc_Component_Element_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  props?: Maybe<Prop_C_Obj_Rel_Insert_Input>
  props_c_id?: Maybe<Scalars['uuid']>
  styles?: Maybe<Style_Component_Element_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Component_Element_Max_Fields = {
  atom_id?: Maybe<Scalars['uuid']>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  props_c_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "component_element" */
export type Component_Element_Max_Order_By = {
  atom_id?: Maybe<Order_By>
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  props_c_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Component_Element_Min_Fields = {
  atom_id?: Maybe<Scalars['uuid']>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  props_c_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "component_element" */
export type Component_Element_Min_Order_By = {
  atom_id?: Maybe<Order_By>
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  props_c_id?: Maybe<Order_By>
}

/** response of any mutation on the table "component_element" */
export type Component_Element_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Component_Element>
}

/** input type for inserting object relation for remote table "component_element" */
export type Component_Element_Obj_Rel_Insert_Input = {
  data: Component_Element_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Component_Element_On_Conflict>
}

/** on conflict condition type for table "component_element" */
export type Component_Element_On_Conflict = {
  constraint: Component_Element_Constraint
  update_columns: Array<Component_Element_Update_Column>
  where?: Maybe<Component_Element_Bool_Exp>
}

/** Ordering options when selecting data from "component_element". */
export type Component_Element_Order_By = {
  atom?: Maybe<Atom_Order_By>
  atom_id?: Maybe<Order_By>
  component?: Maybe<Component_Order_By>
  component_id?: Maybe<Order_By>
  hocs_aggregate?: Maybe<Hoc_Component_Element_Aggregate_Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  props?: Maybe<Prop_C_Order_By>
  props_c_id?: Maybe<Order_By>
  styles_aggregate?: Maybe<Style_Component_Element_Aggregate_Order_By>
}

/** primary key columns input for table: component_element */
export type Component_Element_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "component_element" */
export enum Component_Element_Select_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  PropsCId = 'props_c_id',
}

/** input type for updating data in table "component_element" */
export type Component_Element_Set_Input = {
  atom_id?: Maybe<Scalars['uuid']>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  props_c_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "component_element" */
export enum Component_Element_Update_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  PropsCId = 'props_c_id',
}

/** input type for inserting data into table "component" */
export type Component_Insert_Input = {
  elements?: Maybe<Component_Element_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  library_id?: Maybe<Scalars['uuid']>
  links?: Maybe<Component_Link_Arr_Rel_Insert_Input>
  tags?: Maybe<Tag_Component_Arr_Rel_Insert_Input>
}

/** columns and relationships of "component_link" */
export type Component_Link = {
  /** An object relationship */
  category?: Maybe<Category>
  category_id?: Maybe<Scalars['uuid']>
  /** An object relationship */
  component: Component
  component_id: Scalars['uuid']
  id: Scalars['uuid']
  order?: Maybe<Scalars['Int']>
  props?: Maybe<Scalars['jsonb']>
  /** An object relationship */
  sourceElement: Component_Element
  source_component_element_id: Scalars['uuid']
  /** An object relationship */
  targetElement: Component_Element
  target_component_element_id: Scalars['uuid']
}

/** columns and relationships of "component_link" */
export type Component_LinkPropsArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "component_link" */
export type Component_Link_Aggregate = {
  aggregate?: Maybe<Component_Link_Aggregate_Fields>
  nodes: Array<Component_Link>
}

/** aggregate fields of "component_link" */
export type Component_Link_Aggregate_Fields = {
  avg?: Maybe<Component_Link_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Component_Link_Max_Fields>
  min?: Maybe<Component_Link_Min_Fields>
  stddev?: Maybe<Component_Link_Stddev_Fields>
  stddev_pop?: Maybe<Component_Link_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Component_Link_Stddev_Samp_Fields>
  sum?: Maybe<Component_Link_Sum_Fields>
  var_pop?: Maybe<Component_Link_Var_Pop_Fields>
  var_samp?: Maybe<Component_Link_Var_Samp_Fields>
  variance?: Maybe<Component_Link_Variance_Fields>
}

/** aggregate fields of "component_link" */
export type Component_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Component_Link_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "component_link" */
export type Component_Link_Aggregate_Order_By = {
  avg?: Maybe<Component_Link_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Component_Link_Max_Order_By>
  min?: Maybe<Component_Link_Min_Order_By>
  stddev?: Maybe<Component_Link_Stddev_Order_By>
  stddev_pop?: Maybe<Component_Link_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Component_Link_Stddev_Samp_Order_By>
  sum?: Maybe<Component_Link_Sum_Order_By>
  var_pop?: Maybe<Component_Link_Var_Pop_Order_By>
  var_samp?: Maybe<Component_Link_Var_Samp_Order_By>
  variance?: Maybe<Component_Link_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Component_Link_Append_Input = {
  props?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "component_link" */
export type Component_Link_Arr_Rel_Insert_Input = {
  data: Array<Component_Link_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Component_Link_On_Conflict>
}

/** aggregate avg on columns */
export type Component_Link_Avg_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "component_link" */
export type Component_Link_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "component_link". All fields are combined with a logical 'AND'. */
export type Component_Link_Bool_Exp = {
  _and?: Maybe<Array<Component_Link_Bool_Exp>>
  _not?: Maybe<Component_Link_Bool_Exp>
  _or?: Maybe<Array<Component_Link_Bool_Exp>>
  category?: Maybe<Category_Bool_Exp>
  category_id?: Maybe<Uuid_Comparison_Exp>
  component?: Maybe<Component_Bool_Exp>
  component_id?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
  props?: Maybe<Jsonb_Comparison_Exp>
  sourceElement?: Maybe<Component_Element_Bool_Exp>
  source_component_element_id?: Maybe<Uuid_Comparison_Exp>
  targetElement?: Maybe<Component_Element_Bool_Exp>
  target_component_element_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "component_link" */
export enum Component_Link_Constraint {
  /** unique or primary key constraint */
  VertexEdgeTypePkey = 'vertex_edge_type_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Component_Link_Delete_At_Path_Input = {
  props?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Component_Link_Delete_Elem_Input = {
  props?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Component_Link_Delete_Key_Input = {
  props?: Maybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "component_link" */
export type Component_Link_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "component_link" */
export type Component_Link_Insert_Input = {
  category?: Maybe<Category_Obj_Rel_Insert_Input>
  category_id?: Maybe<Scalars['uuid']>
  component?: Maybe<Component_Obj_Rel_Insert_Input>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  props?: Maybe<Scalars['jsonb']>
  sourceElement?: Maybe<Component_Element_Obj_Rel_Insert_Input>
  source_component_element_id?: Maybe<Scalars['uuid']>
  targetElement?: Maybe<Component_Element_Obj_Rel_Insert_Input>
  target_component_element_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Component_Link_Max_Fields = {
  category_id?: Maybe<Scalars['uuid']>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  source_component_element_id?: Maybe<Scalars['uuid']>
  target_component_element_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "component_link" */
export type Component_Link_Max_Order_By = {
  category_id?: Maybe<Order_By>
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  source_component_element_id?: Maybe<Order_By>
  target_component_element_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Component_Link_Min_Fields = {
  category_id?: Maybe<Scalars['uuid']>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  source_component_element_id?: Maybe<Scalars['uuid']>
  target_component_element_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "component_link" */
export type Component_Link_Min_Order_By = {
  category_id?: Maybe<Order_By>
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  source_component_element_id?: Maybe<Order_By>
  target_component_element_id?: Maybe<Order_By>
}

/** response of any mutation on the table "component_link" */
export type Component_Link_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Component_Link>
}

/** on conflict condition type for table "component_link" */
export type Component_Link_On_Conflict = {
  constraint: Component_Link_Constraint
  update_columns: Array<Component_Link_Update_Column>
  where?: Maybe<Component_Link_Bool_Exp>
}

/** Ordering options when selecting data from "component_link". */
export type Component_Link_Order_By = {
  category?: Maybe<Category_Order_By>
  category_id?: Maybe<Order_By>
  component?: Maybe<Component_Order_By>
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  props?: Maybe<Order_By>
  sourceElement?: Maybe<Component_Element_Order_By>
  source_component_element_id?: Maybe<Order_By>
  targetElement?: Maybe<Component_Element_Order_By>
  target_component_element_id?: Maybe<Order_By>
}

/** primary key columns input for table: component_link */
export type Component_Link_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Component_Link_Prepend_Input = {
  props?: Maybe<Scalars['jsonb']>
}

/** select columns of table "component_link" */
export enum Component_Link_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Props = 'props',
  /** column name */
  SourceComponentElementId = 'source_component_element_id',
  /** column name */
  TargetComponentElementId = 'target_component_element_id',
}

/** input type for updating data in table "component_link" */
export type Component_Link_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  props?: Maybe<Scalars['jsonb']>
  source_component_element_id?: Maybe<Scalars['uuid']>
  target_component_element_id?: Maybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Component_Link_Stddev_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "component_link" */
export type Component_Link_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Component_Link_Stddev_Pop_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "component_link" */
export type Component_Link_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Component_Link_Stddev_Samp_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "component_link" */
export type Component_Link_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Component_Link_Sum_Fields = {
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "component_link" */
export type Component_Link_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "component_link" */
export enum Component_Link_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Props = 'props',
  /** column name */
  SourceComponentElementId = 'source_component_element_id',
  /** column name */
  TargetComponentElementId = 'target_component_element_id',
}

/** aggregate var_pop on columns */
export type Component_Link_Var_Pop_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "component_link" */
export type Component_Link_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Component_Link_Var_Samp_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "component_link" */
export type Component_Link_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Component_Link_Variance_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "component_link" */
export type Component_Link_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate max on columns */
export type Component_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "component" */
export type Component_Max_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Component_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "component" */
export type Component_Min_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
}

/** response of any mutation on the table "component" */
export type Component_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Component>
}

/** input type for inserting object relation for remote table "component" */
export type Component_Obj_Rel_Insert_Input = {
  data: Component_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Component_On_Conflict>
}

/** on conflict condition type for table "component" */
export type Component_On_Conflict = {
  constraint: Component_Constraint
  update_columns: Array<Component_Update_Column>
  where?: Maybe<Component_Bool_Exp>
}

/** Ordering options when selecting data from "component". */
export type Component_Order_By = {
  elements_aggregate?: Maybe<Component_Element_Aggregate_Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  library_id?: Maybe<Order_By>
  links_aggregate?: Maybe<Component_Link_Aggregate_Order_By>
  tags_aggregate?: Maybe<Tag_Component_Aggregate_Order_By>
}

/** primary key columns input for table: component */
export type Component_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "component" */
export enum Component_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibraryId = 'library_id',
}

/** input type for updating data in table "component" */
export type Component_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "component" */
export enum Component_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibraryId = 'library_id',
}

export type Get_Current_User_Args = {
  hasura_session?: Maybe<Scalars['json']>
}

/** columns and relationships of "hoc" */
export type Hoc = {
  id: Scalars['uuid']
  /** An object relationship */
  library: Library
  library_id: Scalars['uuid']
  /** An array relationship */
  tags: Array<Tag_Hoc>
  /** An aggregate relationship */
  tags_aggregate: Tag_Hoc_Aggregate
}

/** columns and relationships of "hoc" */
export type HocTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

/** columns and relationships of "hoc" */
export type HocTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

/** aggregated selection of "hoc" */
export type Hoc_Aggregate = {
  aggregate?: Maybe<Hoc_Aggregate_Fields>
  nodes: Array<Hoc>
}

/** aggregate fields of "hoc" */
export type Hoc_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Hoc_Max_Fields>
  min?: Maybe<Hoc_Min_Fields>
}

/** aggregate fields of "hoc" */
export type Hoc_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hoc_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "hoc". All fields are combined with a logical 'AND'. */
export type Hoc_Bool_Exp = {
  _and?: Maybe<Array<Hoc_Bool_Exp>>
  _not?: Maybe<Hoc_Bool_Exp>
  _or?: Maybe<Array<Hoc_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  tags?: Maybe<Tag_Hoc_Bool_Exp>
}

/** columns and relationships of "hoc_component_element" */
export type Hoc_Component_Element = {
  /** An object relationship */
  componentElement: Component_Element
  component_element_id: Scalars['uuid']
  /** An object relationship */
  hoc: Hoc
  hoc_id: Scalars['uuid']
}

/** aggregated selection of "hoc_component_element" */
export type Hoc_Component_Element_Aggregate = {
  aggregate?: Maybe<Hoc_Component_Element_Aggregate_Fields>
  nodes: Array<Hoc_Component_Element>
}

/** aggregate fields of "hoc_component_element" */
export type Hoc_Component_Element_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Hoc_Component_Element_Max_Fields>
  min?: Maybe<Hoc_Component_Element_Min_Fields>
}

/** aggregate fields of "hoc_component_element" */
export type Hoc_Component_Element_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "hoc_component_element" */
export type Hoc_Component_Element_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Hoc_Component_Element_Max_Order_By>
  min?: Maybe<Hoc_Component_Element_Min_Order_By>
}

/** input type for inserting array relation for remote table "hoc_component_element" */
export type Hoc_Component_Element_Arr_Rel_Insert_Input = {
  data: Array<Hoc_Component_Element_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Hoc_Component_Element_On_Conflict>
}

/** Boolean expression to filter rows from the table "hoc_component_element". All fields are combined with a logical 'AND'. */
export type Hoc_Component_Element_Bool_Exp = {
  _and?: Maybe<Array<Hoc_Component_Element_Bool_Exp>>
  _not?: Maybe<Hoc_Component_Element_Bool_Exp>
  _or?: Maybe<Array<Hoc_Component_Element_Bool_Exp>>
  componentElement?: Maybe<Component_Element_Bool_Exp>
  component_element_id?: Maybe<Uuid_Comparison_Exp>
  hoc?: Maybe<Hoc_Bool_Exp>
  hoc_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "hoc_component_element" */
export enum Hoc_Component_Element_Constraint {
  /** unique or primary key constraint */
  HocComponentElementPkey = 'hoc_component_element_pkey',
}

/** input type for inserting data into table "hoc_component_element" */
export type Hoc_Component_Element_Insert_Input = {
  componentElement?: Maybe<Component_Element_Obj_Rel_Insert_Input>
  component_element_id?: Maybe<Scalars['uuid']>
  hoc?: Maybe<Hoc_Obj_Rel_Insert_Input>
  hoc_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Hoc_Component_Element_Max_Fields = {
  component_element_id?: Maybe<Scalars['uuid']>
  hoc_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "hoc_component_element" */
export type Hoc_Component_Element_Max_Order_By = {
  component_element_id?: Maybe<Order_By>
  hoc_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Hoc_Component_Element_Min_Fields = {
  component_element_id?: Maybe<Scalars['uuid']>
  hoc_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "hoc_component_element" */
export type Hoc_Component_Element_Min_Order_By = {
  component_element_id?: Maybe<Order_By>
  hoc_id?: Maybe<Order_By>
}

/** response of any mutation on the table "hoc_component_element" */
export type Hoc_Component_Element_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Hoc_Component_Element>
}

/** on conflict condition type for table "hoc_component_element" */
export type Hoc_Component_Element_On_Conflict = {
  constraint: Hoc_Component_Element_Constraint
  update_columns: Array<Hoc_Component_Element_Update_Column>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

/** Ordering options when selecting data from "hoc_component_element". */
export type Hoc_Component_Element_Order_By = {
  componentElement?: Maybe<Component_Element_Order_By>
  component_element_id?: Maybe<Order_By>
  hoc?: Maybe<Hoc_Order_By>
  hoc_id?: Maybe<Order_By>
}

/** primary key columns input for table: hoc_component_element */
export type Hoc_Component_Element_Pk_Columns_Input = {
  component_element_id: Scalars['uuid']
  hoc_id: Scalars['uuid']
}

/** select columns of table "hoc_component_element" */
export enum Hoc_Component_Element_Select_Column {
  /** column name */
  ComponentElementId = 'component_element_id',
  /** column name */
  HocId = 'hoc_id',
}

/** input type for updating data in table "hoc_component_element" */
export type Hoc_Component_Element_Set_Input = {
  component_element_id?: Maybe<Scalars['uuid']>
  hoc_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "hoc_component_element" */
export enum Hoc_Component_Element_Update_Column {
  /** column name */
  ComponentElementId = 'component_element_id',
  /** column name */
  HocId = 'hoc_id',
}

/** unique or primary key constraints on table "hoc" */
export enum Hoc_Constraint {
  /** unique or primary key constraint */
  HocPkey = 'hoc_pkey',
}

/** input type for inserting data into table "hoc" */
export type Hoc_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  library_id?: Maybe<Scalars['uuid']>
  tags?: Maybe<Tag_Hoc_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Hoc_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Hoc_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "hoc" */
export type Hoc_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Hoc>
}

/** input type for inserting object relation for remote table "hoc" */
export type Hoc_Obj_Rel_Insert_Input = {
  data: Hoc_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Hoc_On_Conflict>
}

/** on conflict condition type for table "hoc" */
export type Hoc_On_Conflict = {
  constraint: Hoc_Constraint
  update_columns: Array<Hoc_Update_Column>
  where?: Maybe<Hoc_Bool_Exp>
}

/** Ordering options when selecting data from "hoc". */
export type Hoc_Order_By = {
  id?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  library_id?: Maybe<Order_By>
  tags_aggregate?: Maybe<Tag_Hoc_Aggregate_Order_By>
}

/** primary key columns input for table: hoc */
export type Hoc_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "hoc" */
export enum Hoc_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
}

/** input type for updating data in table "hoc" */
export type Hoc_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "hoc" */
export enum Hoc_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "lambda" */
export type Lambda = {
  body: Scalars['String']
  id: Scalars['uuid']
  /** An object relationship */
  library: Library
  libraryId: Scalars['uuid']
  name: Scalars['String']
}

/** aggregated selection of "lambda" */
export type Lambda_Aggregate = {
  aggregate?: Maybe<Lambda_Aggregate_Fields>
  nodes: Array<Lambda>
}

/** aggregate fields of "lambda" */
export type Lambda_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Lambda_Max_Fields>
  min?: Maybe<Lambda_Min_Fields>
}

/** aggregate fields of "lambda" */
export type Lambda_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lambda_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "lambda" */
export type Lambda_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Lambda_Max_Order_By>
  min?: Maybe<Lambda_Min_Order_By>
}

/** input type for inserting array relation for remote table "lambda" */
export type Lambda_Arr_Rel_Insert_Input = {
  data: Array<Lambda_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Lambda_On_Conflict>
}

/** Boolean expression to filter rows from the table "lambda". All fields are combined with a logical 'AND'. */
export type Lambda_Bool_Exp = {
  _and?: Maybe<Array<Lambda_Bool_Exp>>
  _not?: Maybe<Lambda_Bool_Exp>
  _or?: Maybe<Array<Lambda_Bool_Exp>>
  body?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  libraryId?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "lambda" */
export enum Lambda_Constraint {
  /** unique or primary key constraint */
  LambdasPkey = 'lambdas_pkey',
}

/** input type for inserting data into table "lambda" */
export type Lambda_Insert_Input = {
  body?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  libraryId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Lambda_Max_Fields = {
  body?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  libraryId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "lambda" */
export type Lambda_Max_Order_By = {
  body?: Maybe<Order_By>
  id?: Maybe<Order_By>
  libraryId?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Lambda_Min_Fields = {
  body?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  libraryId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "lambda" */
export type Lambda_Min_Order_By = {
  body?: Maybe<Order_By>
  id?: Maybe<Order_By>
  libraryId?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "lambda" */
export type Lambda_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Lambda>
}

/** on conflict condition type for table "lambda" */
export type Lambda_On_Conflict = {
  constraint: Lambda_Constraint
  update_columns: Array<Lambda_Update_Column>
  where?: Maybe<Lambda_Bool_Exp>
}

/** Ordering options when selecting data from "lambda". */
export type Lambda_Order_By = {
  body?: Maybe<Order_By>
  id?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  libraryId?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** primary key columns input for table: lambda */
export type Lambda_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "lambda" */
export enum Lambda_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'libraryId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "lambda" */
export type Lambda_Set_Input = {
  body?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  libraryId?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "lambda" */
export enum Lambda_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'libraryId',
  /** column name */
  Name = 'name',
}

/** columns and relationships of "library" */
export type Library = {
  /** An array relationship */
  atoms: Array<Atom>
  /** An aggregate relationship */
  atoms_aggregate: Atom_Aggregate
  /** An array relationship */
  categories: Array<Category>
  /** An aggregate relationship */
  categories_aggregate: Category_Aggregate
  /** An array relationship */
  components: Array<Component>
  /** An aggregate relationship */
  components_aggregate: Component_Aggregate
  id: Scalars['uuid']
  /** An array relationship */
  lambdas: Array<Lambda>
  /** An aggregate relationship */
  lambdas_aggregate: Lambda_Aggregate
  name?: Maybe<Scalars['String']>
  /** An array relationship */
  propTypes: Array<Prop_Type_C>
  /** An aggregate relationship */
  propTypes_aggregate: Prop_Type_C_Aggregate
  /** An array relationship */
  props: Array<Prop_C>
  /** An aggregate relationship */
  props_aggregate: Prop_C_Aggregate
  /** An array relationship */
  styles: Array<Style>
  /** An aggregate relationship */
  styles_aggregate: Style_Aggregate
  /** An array relationship */
  tags: Array<Tag>
  /** An aggregate relationship */
  tags_aggregate: Tag_Aggregate
  /** An object relationship */
  user: User
  user_id: Scalars['String']
}

/** columns and relationships of "library" */
export type LibraryAtomsArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryAtoms_AggregateArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryCategoriesArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_Order_By>>
  where?: Maybe<Category_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_Order_By>>
  where?: Maybe<Category_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryComponentsArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Order_By>>
  where?: Maybe<Component_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryComponents_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Order_By>>
  where?: Maybe<Component_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryLambdasArgs = {
  distinct_on?: Maybe<Array<Lambda_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lambda_Order_By>>
  where?: Maybe<Lambda_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryLambdas_AggregateArgs = {
  distinct_on?: Maybe<Array<Lambda_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lambda_Order_By>>
  where?: Maybe<Lambda_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryPropTypesArgs = {
  distinct_on?: Maybe<Array<Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_C_Order_By>>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryPropTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_C_Order_By>>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryPropsArgs = {
  distinct_on?: Maybe<Array<Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_C_Order_By>>
  where?: Maybe<Prop_C_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryProps_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_C_Order_By>>
  where?: Maybe<Prop_C_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryStylesArgs = {
  distinct_on?: Maybe<Array<Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Order_By>>
  where?: Maybe<Style_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryStyles_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Order_By>>
  where?: Maybe<Style_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

/** columns and relationships of "library" */
export type LibraryTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

/** aggregated selection of "library" */
export type Library_Aggregate = {
  aggregate?: Maybe<Library_Aggregate_Fields>
  nodes: Array<Library>
}

/** aggregate fields of "library" */
export type Library_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Library_Max_Fields>
  min?: Maybe<Library_Min_Fields>
}

/** aggregate fields of "library" */
export type Library_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Library_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "library" */
export type Library_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Library_Max_Order_By>
  min?: Maybe<Library_Min_Order_By>
}

/** input type for inserting array relation for remote table "library" */
export type Library_Arr_Rel_Insert_Input = {
  data: Array<Library_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Library_On_Conflict>
}

/** Boolean expression to filter rows from the table "library". All fields are combined with a logical 'AND'. */
export type Library_Bool_Exp = {
  _and?: Maybe<Array<Library_Bool_Exp>>
  _not?: Maybe<Library_Bool_Exp>
  _or?: Maybe<Array<Library_Bool_Exp>>
  atoms?: Maybe<Atom_Bool_Exp>
  categories?: Maybe<Category_Bool_Exp>
  components?: Maybe<Component_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  lambdas?: Maybe<Lambda_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  propTypes?: Maybe<Prop_Type_C_Bool_Exp>
  props?: Maybe<Prop_C_Bool_Exp>
  styles?: Maybe<Style_Bool_Exp>
  tags?: Maybe<Tag_Bool_Exp>
  user?: Maybe<User_Bool_Exp>
  user_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "library" */
export enum Library_Constraint {
  /** unique or primary key constraint */
  LibrariesPkey = 'libraries_pkey',
}

/** input type for inserting data into table "library" */
export type Library_Insert_Input = {
  atoms?: Maybe<Atom_Arr_Rel_Insert_Input>
  categories?: Maybe<Category_Arr_Rel_Insert_Input>
  components?: Maybe<Component_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  lambdas?: Maybe<Lambda_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
  propTypes?: Maybe<Prop_Type_C_Arr_Rel_Insert_Input>
  props?: Maybe<Prop_C_Arr_Rel_Insert_Input>
  styles?: Maybe<Style_Arr_Rel_Insert_Input>
  tags?: Maybe<Tag_Arr_Rel_Insert_Input>
  user?: Maybe<User_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Library_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "library" */
export type Library_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Library_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "library" */
export type Library_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "library" */
export type Library_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Library>
}

/** input type for inserting object relation for remote table "library" */
export type Library_Obj_Rel_Insert_Input = {
  data: Library_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Library_On_Conflict>
}

/** on conflict condition type for table "library" */
export type Library_On_Conflict = {
  constraint: Library_Constraint
  update_columns: Array<Library_Update_Column>
  where?: Maybe<Library_Bool_Exp>
}

/** Ordering options when selecting data from "library". */
export type Library_Order_By = {
  atoms_aggregate?: Maybe<Atom_Aggregate_Order_By>
  categories_aggregate?: Maybe<Category_Aggregate_Order_By>
  components_aggregate?: Maybe<Component_Aggregate_Order_By>
  id?: Maybe<Order_By>
  lambdas_aggregate?: Maybe<Lambda_Aggregate_Order_By>
  name?: Maybe<Order_By>
  propTypes_aggregate?: Maybe<Prop_Type_C_Aggregate_Order_By>
  props_aggregate?: Maybe<Prop_C_Aggregate_Order_By>
  styles_aggregate?: Maybe<Style_Aggregate_Order_By>
  tags_aggregate?: Maybe<Tag_Aggregate_Order_By>
  user?: Maybe<User_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: library */
export type Library_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "library" */
export enum Library_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "library" */
export type Library_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['String']>
}

/** update columns of table "library" */
export enum Library_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
}

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "app" */
  delete_app?: Maybe<App_Mutation_Response>
  /** delete single row from the table: "app" */
  delete_app_by_pk?: Maybe<App>
  /** delete data from the table: "atom" */
  delete_atom?: Maybe<Atom_Mutation_Response>
  /** delete single row from the table: "atom" */
  delete_atom_by_pk?: Maybe<Atom>
  /** delete data from the table: "atom_type" */
  delete_atom_type?: Maybe<Atom_Type_Mutation_Response>
  /** delete single row from the table: "atom_type" */
  delete_atom_type_by_pk?: Maybe<Atom_Type>
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>
  /** delete data from the table: "component" */
  delete_component?: Maybe<Component_Mutation_Response>
  /** delete single row from the table: "component" */
  delete_component_by_pk?: Maybe<Component>
  /** delete data from the table: "component_element" */
  delete_component_element?: Maybe<Component_Element_Mutation_Response>
  /** delete single row from the table: "component_element" */
  delete_component_element_by_pk?: Maybe<Component_Element>
  /** delete data from the table: "component_link" */
  delete_component_link?: Maybe<Component_Link_Mutation_Response>
  /** delete single row from the table: "component_link" */
  delete_component_link_by_pk?: Maybe<Component_Link>
  /** delete data from the table: "hoc" */
  delete_hoc?: Maybe<Hoc_Mutation_Response>
  /** delete single row from the table: "hoc" */
  delete_hoc_by_pk?: Maybe<Hoc>
  /** delete data from the table: "hoc_component_element" */
  delete_hoc_component_element?: Maybe<Hoc_Component_Element_Mutation_Response>
  /** delete single row from the table: "hoc_component_element" */
  delete_hoc_component_element_by_pk?: Maybe<Hoc_Component_Element>
  /** delete data from the table: "lambda" */
  delete_lambda?: Maybe<Lambda_Mutation_Response>
  /** delete single row from the table: "lambda" */
  delete_lambda_by_pk?: Maybe<Lambda>
  /** delete data from the table: "library" */
  delete_library?: Maybe<Library_Mutation_Response>
  /** delete single row from the table: "library" */
  delete_library_by_pk?: Maybe<Library>
  /** delete data from the table: "page" */
  delete_page?: Maybe<Page_Mutation_Response>
  /** delete single row from the table: "page" */
  delete_page_by_pk?: Maybe<Page>
  /** delete data from the table: "page_element" */
  delete_page_element?: Maybe<Page_Element_Mutation_Response>
  /** delete single row from the table: "page_element" */
  delete_page_element_by_pk?: Maybe<Page_Element>
  /** delete data from the table: "page_link" */
  delete_page_link?: Maybe<Page_Link_Mutation_Response>
  /** delete single row from the table: "page_link" */
  delete_page_link_by_pk?: Maybe<Page_Link>
  /** delete data from the table: "prop" */
  delete_prop?: Maybe<Prop_Mutation_Response>
  /** delete single row from the table: "prop" */
  delete_prop_by_pk?: Maybe<Prop>
  /** delete data from the table: "prop_c" */
  delete_prop_c?: Maybe<Prop_C_Mutation_Response>
  /** delete single row from the table: "prop_c" */
  delete_prop_c_by_pk?: Maybe<Prop_C>
  /** delete data from the table: "prop_type" */
  delete_prop_type?: Maybe<Prop_Type_Mutation_Response>
  /** delete single row from the table: "prop_type" */
  delete_prop_type_by_pk?: Maybe<Prop_Type>
  /** delete data from the table: "prop_type_c" */
  delete_prop_type_c?: Maybe<Prop_Type_C_Mutation_Response>
  /** delete single row from the table: "prop_type_c" */
  delete_prop_type_c_by_pk?: Maybe<Prop_Type_C>
  /** delete data from the table: "prop_value" */
  delete_prop_value?: Maybe<Prop_Value_Mutation_Response>
  /** delete single row from the table: "prop_value" */
  delete_prop_value_by_pk?: Maybe<Prop_Value>
  /** delete data from the table: "style" */
  delete_style?: Maybe<Style_Mutation_Response>
  /** delete data from the table: "style_atom" */
  delete_style_atom?: Maybe<Style_Atom_Mutation_Response>
  /** delete single row from the table: "style_atom" */
  delete_style_atom_by_pk?: Maybe<Style_Atom>
  /** delete single row from the table: "style" */
  delete_style_by_pk?: Maybe<Style>
  /** delete data from the table: "style_component_element" */
  delete_style_component_element?: Maybe<Style_Component_Element_Mutation_Response>
  /** delete single row from the table: "style_component_element" */
  delete_style_component_element_by_pk?: Maybe<Style_Component_Element>
  /** delete data from the table: "style_page_element" */
  delete_style_page_element?: Maybe<Style_Page_Element_Mutation_Response>
  /** delete single row from the table: "style_page_element" */
  delete_style_page_element_by_pk?: Maybe<Style_Page_Element>
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<Tag_Mutation_Response>
  /** delete data from the table: "tag_atom" */
  delete_tag_atom?: Maybe<Tag_Atom_Mutation_Response>
  /** delete single row from the table: "tag_atom" */
  delete_tag_atom_by_pk?: Maybe<Tag_Atom>
  /** delete data from the table: "tag_atom_type" */
  delete_tag_atom_type?: Maybe<Tag_Atom_Type_Mutation_Response>
  /** delete single row from the table: "tag_atom_type" */
  delete_tag_atom_type_by_pk?: Maybe<Tag_Atom_Type>
  /** delete single row from the table: "tag" */
  delete_tag_by_pk?: Maybe<Tag>
  /** delete data from the table: "tag_component" */
  delete_tag_component?: Maybe<Tag_Component_Mutation_Response>
  /** delete single row from the table: "tag_component" */
  delete_tag_component_by_pk?: Maybe<Tag_Component>
  /** delete data from the table: "tag_hoc" */
  delete_tag_hoc?: Maybe<Tag_Hoc_Mutation_Response>
  /** delete single row from the table: "tag_hoc" */
  delete_tag_hoc_by_pk?: Maybe<Tag_Hoc>
  /** delete data from the table: "tag_prop_c" */
  delete_tag_prop_c?: Maybe<Tag_Prop_C_Mutation_Response>
  /** delete single row from the table: "tag_prop_c" */
  delete_tag_prop_c_by_pk?: Maybe<Tag_Prop_C>
  /** delete data from the table: "tag_prop_type_c" */
  delete_tag_prop_type_c?: Maybe<Tag_Prop_Type_C_Mutation_Response>
  /** delete single row from the table: "tag_prop_type_c" */
  delete_tag_prop_type_c_by_pk?: Maybe<Tag_Prop_Type_C>
  /** delete data from the table: "tag_prop_value" */
  delete_tag_prop_value?: Maybe<Tag_Prop_Value_Mutation_Response>
  /** delete single row from the table: "tag_prop_value" */
  delete_tag_prop_value_by_pk?: Maybe<Tag_Prop_Value>
  /** delete data from the table: "tag_style" */
  delete_tag_style?: Maybe<Tag_Style_Mutation_Response>
  /** delete single row from the table: "tag_style" */
  delete_tag_style_by_pk?: Maybe<Tag_Style>
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>
  /** delete data from the table: "value_type" */
  delete_value_type?: Maybe<Value_Type_Mutation_Response>
  /** delete single row from the table: "value_type" */
  delete_value_type_by_pk?: Maybe<Value_Type>
  executeLambda?: Maybe<LambdaOutput>
  /** insert data into the table: "app" */
  insert_app?: Maybe<App_Mutation_Response>
  /** insert a single row into the table: "app" */
  insert_app_one?: Maybe<App>
  /** insert data into the table: "atom" */
  insert_atom?: Maybe<Atom_Mutation_Response>
  /** insert a single row into the table: "atom" */
  insert_atom_one?: Maybe<Atom>
  /** insert data into the table: "atom_type" */
  insert_atom_type?: Maybe<Atom_Type_Mutation_Response>
  /** insert a single row into the table: "atom_type" */
  insert_atom_type_one?: Maybe<Atom_Type>
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>
  /** insert data into the table: "component" */
  insert_component?: Maybe<Component_Mutation_Response>
  /** insert data into the table: "component_element" */
  insert_component_element?: Maybe<Component_Element_Mutation_Response>
  /** insert a single row into the table: "component_element" */
  insert_component_element_one?: Maybe<Component_Element>
  /** insert data into the table: "component_link" */
  insert_component_link?: Maybe<Component_Link_Mutation_Response>
  /** insert a single row into the table: "component_link" */
  insert_component_link_one?: Maybe<Component_Link>
  /** insert a single row into the table: "component" */
  insert_component_one?: Maybe<Component>
  /** insert data into the table: "hoc" */
  insert_hoc?: Maybe<Hoc_Mutation_Response>
  /** insert data into the table: "hoc_component_element" */
  insert_hoc_component_element?: Maybe<Hoc_Component_Element_Mutation_Response>
  /** insert a single row into the table: "hoc_component_element" */
  insert_hoc_component_element_one?: Maybe<Hoc_Component_Element>
  /** insert a single row into the table: "hoc" */
  insert_hoc_one?: Maybe<Hoc>
  /** insert data into the table: "lambda" */
  insert_lambda?: Maybe<Lambda_Mutation_Response>
  /** insert a single row into the table: "lambda" */
  insert_lambda_one?: Maybe<Lambda>
  /** insert data into the table: "library" */
  insert_library?: Maybe<Library_Mutation_Response>
  /** insert a single row into the table: "library" */
  insert_library_one?: Maybe<Library>
  /** insert data into the table: "page" */
  insert_page?: Maybe<Page_Mutation_Response>
  /** insert data into the table: "page_element" */
  insert_page_element?: Maybe<Page_Element_Mutation_Response>
  /** insert a single row into the table: "page_element" */
  insert_page_element_one?: Maybe<Page_Element>
  /** insert data into the table: "page_link" */
  insert_page_link?: Maybe<Page_Link_Mutation_Response>
  /** insert a single row into the table: "page_link" */
  insert_page_link_one?: Maybe<Page_Link>
  /** insert a single row into the table: "page" */
  insert_page_one?: Maybe<Page>
  /** insert data into the table: "prop" */
  insert_prop?: Maybe<Prop_Mutation_Response>
  /** insert data into the table: "prop_c" */
  insert_prop_c?: Maybe<Prop_C_Mutation_Response>
  /** insert a single row into the table: "prop_c" */
  insert_prop_c_one?: Maybe<Prop_C>
  /** insert a single row into the table: "prop" */
  insert_prop_one?: Maybe<Prop>
  /** insert data into the table: "prop_type" */
  insert_prop_type?: Maybe<Prop_Type_Mutation_Response>
  /** insert data into the table: "prop_type_c" */
  insert_prop_type_c?: Maybe<Prop_Type_C_Mutation_Response>
  /** insert a single row into the table: "prop_type_c" */
  insert_prop_type_c_one?: Maybe<Prop_Type_C>
  /** insert a single row into the table: "prop_type" */
  insert_prop_type_one?: Maybe<Prop_Type>
  /** insert data into the table: "prop_value" */
  insert_prop_value?: Maybe<Prop_Value_Mutation_Response>
  /** insert a single row into the table: "prop_value" */
  insert_prop_value_one?: Maybe<Prop_Value>
  /** insert data into the table: "style" */
  insert_style?: Maybe<Style_Mutation_Response>
  /** insert data into the table: "style_atom" */
  insert_style_atom?: Maybe<Style_Atom_Mutation_Response>
  /** insert a single row into the table: "style_atom" */
  insert_style_atom_one?: Maybe<Style_Atom>
  /** insert data into the table: "style_component_element" */
  insert_style_component_element?: Maybe<Style_Component_Element_Mutation_Response>
  /** insert a single row into the table: "style_component_element" */
  insert_style_component_element_one?: Maybe<Style_Component_Element>
  /** insert a single row into the table: "style" */
  insert_style_one?: Maybe<Style>
  /** insert data into the table: "style_page_element" */
  insert_style_page_element?: Maybe<Style_Page_Element_Mutation_Response>
  /** insert a single row into the table: "style_page_element" */
  insert_style_page_element_one?: Maybe<Style_Page_Element>
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<Tag_Mutation_Response>
  /** insert data into the table: "tag_atom" */
  insert_tag_atom?: Maybe<Tag_Atom_Mutation_Response>
  /** insert a single row into the table: "tag_atom" */
  insert_tag_atom_one?: Maybe<Tag_Atom>
  /** insert data into the table: "tag_atom_type" */
  insert_tag_atom_type?: Maybe<Tag_Atom_Type_Mutation_Response>
  /** insert a single row into the table: "tag_atom_type" */
  insert_tag_atom_type_one?: Maybe<Tag_Atom_Type>
  /** insert data into the table: "tag_component" */
  insert_tag_component?: Maybe<Tag_Component_Mutation_Response>
  /** insert a single row into the table: "tag_component" */
  insert_tag_component_one?: Maybe<Tag_Component>
  /** insert data into the table: "tag_hoc" */
  insert_tag_hoc?: Maybe<Tag_Hoc_Mutation_Response>
  /** insert a single row into the table: "tag_hoc" */
  insert_tag_hoc_one?: Maybe<Tag_Hoc>
  /** insert a single row into the table: "tag" */
  insert_tag_one?: Maybe<Tag>
  /** insert data into the table: "tag_prop_c" */
  insert_tag_prop_c?: Maybe<Tag_Prop_C_Mutation_Response>
  /** insert a single row into the table: "tag_prop_c" */
  insert_tag_prop_c_one?: Maybe<Tag_Prop_C>
  /** insert data into the table: "tag_prop_type_c" */
  insert_tag_prop_type_c?: Maybe<Tag_Prop_Type_C_Mutation_Response>
  /** insert a single row into the table: "tag_prop_type_c" */
  insert_tag_prop_type_c_one?: Maybe<Tag_Prop_Type_C>
  /** insert data into the table: "tag_prop_value" */
  insert_tag_prop_value?: Maybe<Tag_Prop_Value_Mutation_Response>
  /** insert a single row into the table: "tag_prop_value" */
  insert_tag_prop_value_one?: Maybe<Tag_Prop_Value>
  /** insert data into the table: "tag_style" */
  insert_tag_style?: Maybe<Tag_Style_Mutation_Response>
  /** insert a single row into the table: "tag_style" */
  insert_tag_style_one?: Maybe<Tag_Style>
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>
  /** insert data into the table: "value_type" */
  insert_value_type?: Maybe<Value_Type_Mutation_Response>
  /** insert a single row into the table: "value_type" */
  insert_value_type_one?: Maybe<Value_Type>
  /** update data of the table: "app" */
  update_app?: Maybe<App_Mutation_Response>
  /** update single row of the table: "app" */
  update_app_by_pk?: Maybe<App>
  /** update data of the table: "atom" */
  update_atom?: Maybe<Atom_Mutation_Response>
  /** update single row of the table: "atom" */
  update_atom_by_pk?: Maybe<Atom>
  /** update data of the table: "atom_type" */
  update_atom_type?: Maybe<Atom_Type_Mutation_Response>
  /** update single row of the table: "atom_type" */
  update_atom_type_by_pk?: Maybe<Atom_Type>
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>
  /** update data of the table: "component" */
  update_component?: Maybe<Component_Mutation_Response>
  /** update single row of the table: "component" */
  update_component_by_pk?: Maybe<Component>
  /** update data of the table: "component_element" */
  update_component_element?: Maybe<Component_Element_Mutation_Response>
  /** update single row of the table: "component_element" */
  update_component_element_by_pk?: Maybe<Component_Element>
  /** update data of the table: "component_link" */
  update_component_link?: Maybe<Component_Link_Mutation_Response>
  /** update single row of the table: "component_link" */
  update_component_link_by_pk?: Maybe<Component_Link>
  /** update data of the table: "hoc" */
  update_hoc?: Maybe<Hoc_Mutation_Response>
  /** update single row of the table: "hoc" */
  update_hoc_by_pk?: Maybe<Hoc>
  /** update data of the table: "hoc_component_element" */
  update_hoc_component_element?: Maybe<Hoc_Component_Element_Mutation_Response>
  /** update single row of the table: "hoc_component_element" */
  update_hoc_component_element_by_pk?: Maybe<Hoc_Component_Element>
  /** update data of the table: "lambda" */
  update_lambda?: Maybe<Lambda_Mutation_Response>
  /** update single row of the table: "lambda" */
  update_lambda_by_pk?: Maybe<Lambda>
  /** update data of the table: "library" */
  update_library?: Maybe<Library_Mutation_Response>
  /** update single row of the table: "library" */
  update_library_by_pk?: Maybe<Library>
  /** update data of the table: "page" */
  update_page?: Maybe<Page_Mutation_Response>
  /** update single row of the table: "page" */
  update_page_by_pk?: Maybe<Page>
  /** update data of the table: "page_element" */
  update_page_element?: Maybe<Page_Element_Mutation_Response>
  /** update single row of the table: "page_element" */
  update_page_element_by_pk?: Maybe<Page_Element>
  /** update data of the table: "page_link" */
  update_page_link?: Maybe<Page_Link_Mutation_Response>
  /** update single row of the table: "page_link" */
  update_page_link_by_pk?: Maybe<Page_Link>
  /** update data of the table: "prop" */
  update_prop?: Maybe<Prop_Mutation_Response>
  /** update single row of the table: "prop" */
  update_prop_by_pk?: Maybe<Prop>
  /** update data of the table: "prop_c" */
  update_prop_c?: Maybe<Prop_C_Mutation_Response>
  /** update single row of the table: "prop_c" */
  update_prop_c_by_pk?: Maybe<Prop_C>
  /** update data of the table: "prop_type" */
  update_prop_type?: Maybe<Prop_Type_Mutation_Response>
  /** update single row of the table: "prop_type" */
  update_prop_type_by_pk?: Maybe<Prop_Type>
  /** update data of the table: "prop_type_c" */
  update_prop_type_c?: Maybe<Prop_Type_C_Mutation_Response>
  /** update single row of the table: "prop_type_c" */
  update_prop_type_c_by_pk?: Maybe<Prop_Type_C>
  /** update data of the table: "prop_value" */
  update_prop_value?: Maybe<Prop_Value_Mutation_Response>
  /** update single row of the table: "prop_value" */
  update_prop_value_by_pk?: Maybe<Prop_Value>
  /** update data of the table: "style" */
  update_style?: Maybe<Style_Mutation_Response>
  /** update data of the table: "style_atom" */
  update_style_atom?: Maybe<Style_Atom_Mutation_Response>
  /** update single row of the table: "style_atom" */
  update_style_atom_by_pk?: Maybe<Style_Atom>
  /** update single row of the table: "style" */
  update_style_by_pk?: Maybe<Style>
  /** update data of the table: "style_component_element" */
  update_style_component_element?: Maybe<Style_Component_Element_Mutation_Response>
  /** update single row of the table: "style_component_element" */
  update_style_component_element_by_pk?: Maybe<Style_Component_Element>
  /** update data of the table: "style_page_element" */
  update_style_page_element?: Maybe<Style_Page_Element_Mutation_Response>
  /** update single row of the table: "style_page_element" */
  update_style_page_element_by_pk?: Maybe<Style_Page_Element>
  /** update data of the table: "tag" */
  update_tag?: Maybe<Tag_Mutation_Response>
  /** update data of the table: "tag_atom" */
  update_tag_atom?: Maybe<Tag_Atom_Mutation_Response>
  /** update single row of the table: "tag_atom" */
  update_tag_atom_by_pk?: Maybe<Tag_Atom>
  /** update data of the table: "tag_atom_type" */
  update_tag_atom_type?: Maybe<Tag_Atom_Type_Mutation_Response>
  /** update single row of the table: "tag_atom_type" */
  update_tag_atom_type_by_pk?: Maybe<Tag_Atom_Type>
  /** update single row of the table: "tag" */
  update_tag_by_pk?: Maybe<Tag>
  /** update data of the table: "tag_component" */
  update_tag_component?: Maybe<Tag_Component_Mutation_Response>
  /** update single row of the table: "tag_component" */
  update_tag_component_by_pk?: Maybe<Tag_Component>
  /** update data of the table: "tag_hoc" */
  update_tag_hoc?: Maybe<Tag_Hoc_Mutation_Response>
  /** update single row of the table: "tag_hoc" */
  update_tag_hoc_by_pk?: Maybe<Tag_Hoc>
  /** update data of the table: "tag_prop_c" */
  update_tag_prop_c?: Maybe<Tag_Prop_C_Mutation_Response>
  /** update single row of the table: "tag_prop_c" */
  update_tag_prop_c_by_pk?: Maybe<Tag_Prop_C>
  /** update data of the table: "tag_prop_type_c" */
  update_tag_prop_type_c?: Maybe<Tag_Prop_Type_C_Mutation_Response>
  /** update single row of the table: "tag_prop_type_c" */
  update_tag_prop_type_c_by_pk?: Maybe<Tag_Prop_Type_C>
  /** update data of the table: "tag_prop_value" */
  update_tag_prop_value?: Maybe<Tag_Prop_Value_Mutation_Response>
  /** update single row of the table: "tag_prop_value" */
  update_tag_prop_value_by_pk?: Maybe<Tag_Prop_Value>
  /** update data of the table: "tag_style" */
  update_tag_style?: Maybe<Tag_Style_Mutation_Response>
  /** update single row of the table: "tag_style" */
  update_tag_style_by_pk?: Maybe<Tag_Style>
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>
  /** update data of the table: "value_type" */
  update_value_type?: Maybe<Value_Type_Mutation_Response>
  /** update single row of the table: "value_type" */
  update_value_type_by_pk?: Maybe<Value_Type>
}

/** mutation root */
export type Mutation_RootDelete_AppArgs = {
  where: App_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_App_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_AtomArgs = {
  where: Atom_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Atom_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Atom_TypeArgs = {
  where: Atom_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Atom_Type_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_ComponentArgs = {
  where: Component_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Component_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Component_ElementArgs = {
  where: Component_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Component_Element_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Component_LinkArgs = {
  where: Component_Link_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Component_Link_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_HocArgs = {
  where: Hoc_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Hoc_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Hoc_Component_ElementArgs = {
  where: Hoc_Component_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Hoc_Component_Element_By_PkArgs = {
  component_element_id: Scalars['uuid']
  hoc_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_LambdaArgs = {
  where: Lambda_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Lambda_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_LibraryArgs = {
  where: Library_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Library_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_PageArgs = {
  where: Page_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Page_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Page_ElementArgs = {
  where: Page_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Page_Element_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Page_LinkArgs = {
  where: Page_Link_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Page_Link_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_PropArgs = {
  where: Prop_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Prop_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Prop_CArgs = {
  where: Prop_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Prop_C_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Prop_TypeArgs = {
  where: Prop_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Prop_Type_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Prop_Type_CArgs = {
  where: Prop_Type_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Prop_Type_C_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Prop_ValueArgs = {
  where: Prop_Value_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Prop_Value_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_StyleArgs = {
  where: Style_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Style_AtomArgs = {
  where: Style_Atom_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Style_Atom_By_PkArgs = {
  atom_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Style_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Style_Component_ElementArgs = {
  where: Style_Component_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Style_Component_Element_By_PkArgs = {
  component_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Style_Page_ElementArgs = {
  where: Style_Page_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Style_Page_Element_By_PkArgs = {
  page_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_AtomArgs = {
  where: Tag_Atom_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Atom_By_PkArgs = {
  atom_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_Atom_TypeArgs = {
  where: Tag_Atom_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Atom_Type_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_ComponentArgs = {
  where: Tag_Component_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Component_By_PkArgs = {
  component_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_HocArgs = {
  where: Tag_Hoc_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Hoc_By_PkArgs = {
  hoc_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_Prop_CArgs = {
  where: Tag_Prop_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Prop_C_By_PkArgs = {
  prop_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_Prop_Type_CArgs = {
  where: Tag_Prop_Type_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Prop_Type_C_By_PkArgs = {
  prop_type_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_Prop_ValueArgs = {
  where: Tag_Prop_Value_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Prop_Value_By_PkArgs = {
  prop_value_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Tag_StyleArgs = {
  where: Tag_Style_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Tag_Style_By_PkArgs = {
  style_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Value_TypeArgs = {
  where: Value_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Value_Type_By_PkArgs = {
  value: Scalars['String']
}

/** mutation root */
export type Mutation_RootExecuteLambdaArgs = {
  lambda: LambdaInput
  payload: Scalars['String']
}

/** mutation root */
export type Mutation_RootInsert_AppArgs = {
  objects: Array<App_Insert_Input>
  on_conflict?: Maybe<App_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_App_OneArgs = {
  object: App_Insert_Input
  on_conflict?: Maybe<App_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_AtomArgs = {
  objects: Array<Atom_Insert_Input>
  on_conflict?: Maybe<Atom_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Atom_OneArgs = {
  object: Atom_Insert_Input
  on_conflict?: Maybe<Atom_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Atom_TypeArgs = {
  objects: Array<Atom_Type_Insert_Input>
  on_conflict?: Maybe<Atom_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Atom_Type_OneArgs = {
  object: Atom_Type_Insert_Input
  on_conflict?: Maybe<Atom_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>
  on_conflict?: Maybe<Category_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input
  on_conflict?: Maybe<Category_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ComponentArgs = {
  objects: Array<Component_Insert_Input>
  on_conflict?: Maybe<Component_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Component_ElementArgs = {
  objects: Array<Component_Element_Insert_Input>
  on_conflict?: Maybe<Component_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Component_Element_OneArgs = {
  object: Component_Element_Insert_Input
  on_conflict?: Maybe<Component_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Component_LinkArgs = {
  objects: Array<Component_Link_Insert_Input>
  on_conflict?: Maybe<Component_Link_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Component_Link_OneArgs = {
  object: Component_Link_Insert_Input
  on_conflict?: Maybe<Component_Link_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Component_OneArgs = {
  object: Component_Insert_Input
  on_conflict?: Maybe<Component_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_HocArgs = {
  objects: Array<Hoc_Insert_Input>
  on_conflict?: Maybe<Hoc_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Hoc_Component_ElementArgs = {
  objects: Array<Hoc_Component_Element_Insert_Input>
  on_conflict?: Maybe<Hoc_Component_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Hoc_Component_Element_OneArgs = {
  object: Hoc_Component_Element_Insert_Input
  on_conflict?: Maybe<Hoc_Component_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Hoc_OneArgs = {
  object: Hoc_Insert_Input
  on_conflict?: Maybe<Hoc_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_LambdaArgs = {
  objects: Array<Lambda_Insert_Input>
  on_conflict?: Maybe<Lambda_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Lambda_OneArgs = {
  object: Lambda_Insert_Input
  on_conflict?: Maybe<Lambda_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_LibraryArgs = {
  objects: Array<Library_Insert_Input>
  on_conflict?: Maybe<Library_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Library_OneArgs = {
  object: Library_Insert_Input
  on_conflict?: Maybe<Library_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PageArgs = {
  objects: Array<Page_Insert_Input>
  on_conflict?: Maybe<Page_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Page_ElementArgs = {
  objects: Array<Page_Element_Insert_Input>
  on_conflict?: Maybe<Page_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Page_Element_OneArgs = {
  object: Page_Element_Insert_Input
  on_conflict?: Maybe<Page_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Page_LinkArgs = {
  objects: Array<Page_Link_Insert_Input>
  on_conflict?: Maybe<Page_Link_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Page_Link_OneArgs = {
  object: Page_Link_Insert_Input
  on_conflict?: Maybe<Page_Link_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Page_OneArgs = {
  object: Page_Insert_Input
  on_conflict?: Maybe<Page_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PropArgs = {
  objects: Array<Prop_Insert_Input>
  on_conflict?: Maybe<Prop_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_CArgs = {
  objects: Array<Prop_C_Insert_Input>
  on_conflict?: Maybe<Prop_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_C_OneArgs = {
  object: Prop_C_Insert_Input
  on_conflict?: Maybe<Prop_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_OneArgs = {
  object: Prop_Insert_Input
  on_conflict?: Maybe<Prop_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_TypeArgs = {
  objects: Array<Prop_Type_Insert_Input>
  on_conflict?: Maybe<Prop_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_Type_CArgs = {
  objects: Array<Prop_Type_C_Insert_Input>
  on_conflict?: Maybe<Prop_Type_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_Type_C_OneArgs = {
  object: Prop_Type_C_Insert_Input
  on_conflict?: Maybe<Prop_Type_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_Type_OneArgs = {
  object: Prop_Type_Insert_Input
  on_conflict?: Maybe<Prop_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_ValueArgs = {
  objects: Array<Prop_Value_Insert_Input>
  on_conflict?: Maybe<Prop_Value_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Prop_Value_OneArgs = {
  object: Prop_Value_Insert_Input
  on_conflict?: Maybe<Prop_Value_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StyleArgs = {
  objects: Array<Style_Insert_Input>
  on_conflict?: Maybe<Style_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_AtomArgs = {
  objects: Array<Style_Atom_Insert_Input>
  on_conflict?: Maybe<Style_Atom_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_Atom_OneArgs = {
  object: Style_Atom_Insert_Input
  on_conflict?: Maybe<Style_Atom_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_Component_ElementArgs = {
  objects: Array<Style_Component_Element_Insert_Input>
  on_conflict?: Maybe<Style_Component_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_Component_Element_OneArgs = {
  object: Style_Component_Element_Insert_Input
  on_conflict?: Maybe<Style_Component_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_OneArgs = {
  object: Style_Insert_Input
  on_conflict?: Maybe<Style_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_Page_ElementArgs = {
  objects: Array<Style_Page_Element_Insert_Input>
  on_conflict?: Maybe<Style_Page_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Style_Page_Element_OneArgs = {
  object: Style_Page_Element_Insert_Input
  on_conflict?: Maybe<Style_Page_Element_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>
  on_conflict?: Maybe<Tag_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_AtomArgs = {
  objects: Array<Tag_Atom_Insert_Input>
  on_conflict?: Maybe<Tag_Atom_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Atom_OneArgs = {
  object: Tag_Atom_Insert_Input
  on_conflict?: Maybe<Tag_Atom_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Atom_TypeArgs = {
  objects: Array<Tag_Atom_Type_Insert_Input>
  on_conflict?: Maybe<Tag_Atom_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Atom_Type_OneArgs = {
  object: Tag_Atom_Type_Insert_Input
  on_conflict?: Maybe<Tag_Atom_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_ComponentArgs = {
  objects: Array<Tag_Component_Insert_Input>
  on_conflict?: Maybe<Tag_Component_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Component_OneArgs = {
  object: Tag_Component_Insert_Input
  on_conflict?: Maybe<Tag_Component_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_HocArgs = {
  objects: Array<Tag_Hoc_Insert_Input>
  on_conflict?: Maybe<Tag_Hoc_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Hoc_OneArgs = {
  object: Tag_Hoc_Insert_Input
  on_conflict?: Maybe<Tag_Hoc_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_OneArgs = {
  object: Tag_Insert_Input
  on_conflict?: Maybe<Tag_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Prop_CArgs = {
  objects: Array<Tag_Prop_C_Insert_Input>
  on_conflict?: Maybe<Tag_Prop_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Prop_C_OneArgs = {
  object: Tag_Prop_C_Insert_Input
  on_conflict?: Maybe<Tag_Prop_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Prop_Type_CArgs = {
  objects: Array<Tag_Prop_Type_C_Insert_Input>
  on_conflict?: Maybe<Tag_Prop_Type_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Prop_Type_C_OneArgs = {
  object: Tag_Prop_Type_C_Insert_Input
  on_conflict?: Maybe<Tag_Prop_Type_C_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Prop_ValueArgs = {
  objects: Array<Tag_Prop_Value_Insert_Input>
  on_conflict?: Maybe<Tag_Prop_Value_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Prop_Value_OneArgs = {
  object: Tag_Prop_Value_Insert_Input
  on_conflict?: Maybe<Tag_Prop_Value_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_StyleArgs = {
  objects: Array<Tag_Style_Insert_Input>
  on_conflict?: Maybe<Tag_Style_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Tag_Style_OneArgs = {
  object: Tag_Style_Insert_Input
  on_conflict?: Maybe<Tag_Style_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>
  on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input
  on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Value_TypeArgs = {
  objects: Array<Value_Type_Insert_Input>
  on_conflict?: Maybe<Value_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Value_Type_OneArgs = {
  object: Value_Type_Insert_Input
  on_conflict?: Maybe<Value_Type_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_AppArgs = {
  _set?: Maybe<App_Set_Input>
  where: App_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_App_By_PkArgs = {
  _set?: Maybe<App_Set_Input>
  pk_columns: App_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_AtomArgs = {
  _set?: Maybe<Atom_Set_Input>
  where: Atom_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Atom_By_PkArgs = {
  _set?: Maybe<Atom_Set_Input>
  pk_columns: Atom_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Atom_TypeArgs = {
  _set?: Maybe<Atom_Type_Set_Input>
  where: Atom_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Atom_Type_By_PkArgs = {
  _set?: Maybe<Atom_Type_Set_Input>
  pk_columns: Atom_Type_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: Maybe<Category_Set_Input>
  where: Category_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: Maybe<Category_Set_Input>
  pk_columns: Category_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ComponentArgs = {
  _set?: Maybe<Component_Set_Input>
  where: Component_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Component_By_PkArgs = {
  _set?: Maybe<Component_Set_Input>
  pk_columns: Component_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Component_ElementArgs = {
  _set?: Maybe<Component_Element_Set_Input>
  where: Component_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Component_Element_By_PkArgs = {
  _set?: Maybe<Component_Element_Set_Input>
  pk_columns: Component_Element_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Component_LinkArgs = {
  _append?: Maybe<Component_Link_Append_Input>
  _delete_at_path?: Maybe<Component_Link_Delete_At_Path_Input>
  _delete_elem?: Maybe<Component_Link_Delete_Elem_Input>
  _delete_key?: Maybe<Component_Link_Delete_Key_Input>
  _inc?: Maybe<Component_Link_Inc_Input>
  _prepend?: Maybe<Component_Link_Prepend_Input>
  _set?: Maybe<Component_Link_Set_Input>
  where: Component_Link_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Component_Link_By_PkArgs = {
  _append?: Maybe<Component_Link_Append_Input>
  _delete_at_path?: Maybe<Component_Link_Delete_At_Path_Input>
  _delete_elem?: Maybe<Component_Link_Delete_Elem_Input>
  _delete_key?: Maybe<Component_Link_Delete_Key_Input>
  _inc?: Maybe<Component_Link_Inc_Input>
  _prepend?: Maybe<Component_Link_Prepend_Input>
  _set?: Maybe<Component_Link_Set_Input>
  pk_columns: Component_Link_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_HocArgs = {
  _set?: Maybe<Hoc_Set_Input>
  where: Hoc_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Hoc_By_PkArgs = {
  _set?: Maybe<Hoc_Set_Input>
  pk_columns: Hoc_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Hoc_Component_ElementArgs = {
  _set?: Maybe<Hoc_Component_Element_Set_Input>
  where: Hoc_Component_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Hoc_Component_Element_By_PkArgs = {
  _set?: Maybe<Hoc_Component_Element_Set_Input>
  pk_columns: Hoc_Component_Element_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_LambdaArgs = {
  _set?: Maybe<Lambda_Set_Input>
  where: Lambda_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Lambda_By_PkArgs = {
  _set?: Maybe<Lambda_Set_Input>
  pk_columns: Lambda_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_LibraryArgs = {
  _set?: Maybe<Library_Set_Input>
  where: Library_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Library_By_PkArgs = {
  _set?: Maybe<Library_Set_Input>
  pk_columns: Library_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PageArgs = {
  _set?: Maybe<Page_Set_Input>
  where: Page_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Page_By_PkArgs = {
  _set?: Maybe<Page_Set_Input>
  pk_columns: Page_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Page_ElementArgs = {
  _set?: Maybe<Page_Element_Set_Input>
  where: Page_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Page_Element_By_PkArgs = {
  _set?: Maybe<Page_Element_Set_Input>
  pk_columns: Page_Element_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Page_LinkArgs = {
  _append?: Maybe<Page_Link_Append_Input>
  _delete_at_path?: Maybe<Page_Link_Delete_At_Path_Input>
  _delete_elem?: Maybe<Page_Link_Delete_Elem_Input>
  _delete_key?: Maybe<Page_Link_Delete_Key_Input>
  _inc?: Maybe<Page_Link_Inc_Input>
  _prepend?: Maybe<Page_Link_Prepend_Input>
  _set?: Maybe<Page_Link_Set_Input>
  where: Page_Link_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Page_Link_By_PkArgs = {
  _append?: Maybe<Page_Link_Append_Input>
  _delete_at_path?: Maybe<Page_Link_Delete_At_Path_Input>
  _delete_elem?: Maybe<Page_Link_Delete_Elem_Input>
  _delete_key?: Maybe<Page_Link_Delete_Key_Input>
  _inc?: Maybe<Page_Link_Inc_Input>
  _prepend?: Maybe<Page_Link_Prepend_Input>
  _set?: Maybe<Page_Link_Set_Input>
  pk_columns: Page_Link_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PropArgs = {
  _set?: Maybe<Prop_Set_Input>
  where: Prop_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Prop_By_PkArgs = {
  _set?: Maybe<Prop_Set_Input>
  pk_columns: Prop_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Prop_CArgs = {
  _set?: Maybe<Prop_C_Set_Input>
  where: Prop_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Prop_C_By_PkArgs = {
  _set?: Maybe<Prop_C_Set_Input>
  pk_columns: Prop_C_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Prop_TypeArgs = {
  _set?: Maybe<Prop_Type_Set_Input>
  where: Prop_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Prop_Type_By_PkArgs = {
  _set?: Maybe<Prop_Type_Set_Input>
  pk_columns: Prop_Type_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Prop_Type_CArgs = {
  _set?: Maybe<Prop_Type_C_Set_Input>
  where: Prop_Type_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Prop_Type_C_By_PkArgs = {
  _set?: Maybe<Prop_Type_C_Set_Input>
  pk_columns: Prop_Type_C_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Prop_ValueArgs = {
  _set?: Maybe<Prop_Value_Set_Input>
  where: Prop_Value_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Prop_Value_By_PkArgs = {
  _set?: Maybe<Prop_Value_Set_Input>
  pk_columns: Prop_Value_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_StyleArgs = {
  _set?: Maybe<Style_Set_Input>
  where: Style_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Style_AtomArgs = {
  _set?: Maybe<Style_Atom_Set_Input>
  where: Style_Atom_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Style_Atom_By_PkArgs = {
  _set?: Maybe<Style_Atom_Set_Input>
  pk_columns: Style_Atom_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Style_By_PkArgs = {
  _set?: Maybe<Style_Set_Input>
  pk_columns: Style_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Style_Component_ElementArgs = {
  _set?: Maybe<Style_Component_Element_Set_Input>
  where: Style_Component_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Style_Component_Element_By_PkArgs = {
  _set?: Maybe<Style_Component_Element_Set_Input>
  pk_columns: Style_Component_Element_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Style_Page_ElementArgs = {
  _set?: Maybe<Style_Page_Element_Set_Input>
  where: Style_Page_Element_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Style_Page_Element_By_PkArgs = {
  _set?: Maybe<Style_Page_Element_Set_Input>
  pk_columns: Style_Page_Element_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _set?: Maybe<Tag_Set_Input>
  where: Tag_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_AtomArgs = {
  _set?: Maybe<Tag_Atom_Set_Input>
  where: Tag_Atom_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Atom_By_PkArgs = {
  _set?: Maybe<Tag_Atom_Set_Input>
  pk_columns: Tag_Atom_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Atom_TypeArgs = {
  _set?: Maybe<Tag_Atom_Type_Set_Input>
  where: Tag_Atom_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Atom_Type_By_PkArgs = {
  _set?: Maybe<Tag_Atom_Type_Set_Input>
  pk_columns: Tag_Atom_Type_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_By_PkArgs = {
  _set?: Maybe<Tag_Set_Input>
  pk_columns: Tag_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_ComponentArgs = {
  _set?: Maybe<Tag_Component_Set_Input>
  where: Tag_Component_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Component_By_PkArgs = {
  _set?: Maybe<Tag_Component_Set_Input>
  pk_columns: Tag_Component_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_HocArgs = {
  _set?: Maybe<Tag_Hoc_Set_Input>
  where: Tag_Hoc_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Hoc_By_PkArgs = {
  _set?: Maybe<Tag_Hoc_Set_Input>
  pk_columns: Tag_Hoc_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Prop_CArgs = {
  _set?: Maybe<Tag_Prop_C_Set_Input>
  where: Tag_Prop_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Prop_C_By_PkArgs = {
  _set?: Maybe<Tag_Prop_C_Set_Input>
  pk_columns: Tag_Prop_C_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Prop_Type_CArgs = {
  _set?: Maybe<Tag_Prop_Type_C_Set_Input>
  where: Tag_Prop_Type_C_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Prop_Type_C_By_PkArgs = {
  _set?: Maybe<Tag_Prop_Type_C_Set_Input>
  pk_columns: Tag_Prop_Type_C_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Prop_ValueArgs = {
  _set?: Maybe<Tag_Prop_Value_Set_Input>
  where: Tag_Prop_Value_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Prop_Value_By_PkArgs = {
  _set?: Maybe<Tag_Prop_Value_Set_Input>
  pk_columns: Tag_Prop_Value_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Tag_StyleArgs = {
  _set?: Maybe<Tag_Style_Set_Input>
  where: Tag_Style_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Tag_Style_By_PkArgs = {
  _set?: Maybe<Tag_Style_Set_Input>
  pk_columns: Tag_Style_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>
  where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>
  pk_columns: User_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Value_TypeArgs = {
  _set?: Maybe<Value_Type_Set_Input>
  where: Value_Type_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Value_Type_By_PkArgs = {
  _set?: Maybe<Value_Type_Set_Input>
  pk_columns: Value_Type_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "page" */
export type Page = {
  /** An object relationship */
  app: App
  app_id: Scalars['uuid']
  /** An array relationship */
  elements: Array<Page_Element>
  /** An aggregate relationship */
  elements_aggregate: Page_Element_Aggregate
  id: Scalars['uuid']
  /** An array relationship */
  links: Array<Page_Link>
  /** An aggregate relationship */
  links_aggregate: Page_Link_Aggregate
  name: Scalars['String']
}

/** columns and relationships of "page" */
export type PageElementsArgs = {
  distinct_on?: Maybe<Array<Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Element_Order_By>>
  where?: Maybe<Page_Element_Bool_Exp>
}

/** columns and relationships of "page" */
export type PageElements_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Element_Order_By>>
  where?: Maybe<Page_Element_Bool_Exp>
}

/** columns and relationships of "page" */
export type PageLinksArgs = {
  distinct_on?: Maybe<Array<Page_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Link_Order_By>>
  where?: Maybe<Page_Link_Bool_Exp>
}

/** columns and relationships of "page" */
export type PageLinks_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Link_Order_By>>
  where?: Maybe<Page_Link_Bool_Exp>
}

/** aggregated selection of "page" */
export type Page_Aggregate = {
  aggregate?: Maybe<Page_Aggregate_Fields>
  nodes: Array<Page>
}

/** aggregate fields of "page" */
export type Page_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Page_Max_Fields>
  min?: Maybe<Page_Min_Fields>
}

/** aggregate fields of "page" */
export type Page_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Page_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "page" */
export type Page_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Page_Max_Order_By>
  min?: Maybe<Page_Min_Order_By>
}

/** input type for inserting array relation for remote table "page" */
export type Page_Arr_Rel_Insert_Input = {
  data: Array<Page_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Page_On_Conflict>
}

/** Boolean expression to filter rows from the table "page". All fields are combined with a logical 'AND'. */
export type Page_Bool_Exp = {
  _and?: Maybe<Array<Page_Bool_Exp>>
  _not?: Maybe<Page_Bool_Exp>
  _or?: Maybe<Array<Page_Bool_Exp>>
  app?: Maybe<App_Bool_Exp>
  app_id?: Maybe<Uuid_Comparison_Exp>
  elements?: Maybe<Page_Element_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  links?: Maybe<Page_Link_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "page" */
export enum Page_Constraint {
  /** unique or primary key constraint */
  PagesPkey = 'pages_pkey',
}

/** columns and relationships of "page_element" */
export type Page_Element = {
  /** An object relationship */
  component: Component
  component_id: Scalars['uuid']
  id: Scalars['uuid']
  name?: Maybe<Scalars['String']>
  /** An object relationship */
  page: Page
  page_id: Scalars['uuid']
  prop_c_id?: Maybe<Scalars['uuid']>
  /** An object relationship */
  props?: Maybe<Prop_C>
  /** An array relationship */
  styles: Array<Style_Page_Element>
  /** An aggregate relationship */
  styles_aggregate: Style_Page_Element_Aggregate
}

/** columns and relationships of "page_element" */
export type Page_ElementStylesArgs = {
  distinct_on?: Maybe<Array<Style_Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Page_Element_Order_By>>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

/** columns and relationships of "page_element" */
export type Page_ElementStyles_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Page_Element_Order_By>>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

/** aggregated selection of "page_element" */
export type Page_Element_Aggregate = {
  aggregate?: Maybe<Page_Element_Aggregate_Fields>
  nodes: Array<Page_Element>
}

/** aggregate fields of "page_element" */
export type Page_Element_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Page_Element_Max_Fields>
  min?: Maybe<Page_Element_Min_Fields>
}

/** aggregate fields of "page_element" */
export type Page_Element_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Page_Element_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "page_element" */
export type Page_Element_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Page_Element_Max_Order_By>
  min?: Maybe<Page_Element_Min_Order_By>
}

/** input type for inserting array relation for remote table "page_element" */
export type Page_Element_Arr_Rel_Insert_Input = {
  data: Array<Page_Element_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Page_Element_On_Conflict>
}

/** Boolean expression to filter rows from the table "page_element". All fields are combined with a logical 'AND'. */
export type Page_Element_Bool_Exp = {
  _and?: Maybe<Array<Page_Element_Bool_Exp>>
  _not?: Maybe<Page_Element_Bool_Exp>
  _or?: Maybe<Array<Page_Element_Bool_Exp>>
  component?: Maybe<Component_Bool_Exp>
  component_id?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  page?: Maybe<Page_Bool_Exp>
  page_id?: Maybe<Uuid_Comparison_Exp>
  prop_c_id?: Maybe<Uuid_Comparison_Exp>
  props?: Maybe<Prop_C_Bool_Exp>
  styles?: Maybe<Style_Page_Element_Bool_Exp>
}

/** unique or primary key constraints on table "page_element" */
export enum Page_Element_Constraint {
  /** unique or primary key constraint */
  ElementsPkey = 'elements_pkey',
}

/** input type for inserting data into table "page_element" */
export type Page_Element_Insert_Input = {
  component?: Maybe<Component_Obj_Rel_Insert_Input>
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  page?: Maybe<Page_Obj_Rel_Insert_Input>
  page_id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
  props?: Maybe<Prop_C_Obj_Rel_Insert_Input>
  styles?: Maybe<Style_Page_Element_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Page_Element_Max_Fields = {
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  page_id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "page_element" */
export type Page_Element_Max_Order_By = {
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  page_id?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Page_Element_Min_Fields = {
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  page_id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "page_element" */
export type Page_Element_Min_Order_By = {
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  page_id?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
}

/** response of any mutation on the table "page_element" */
export type Page_Element_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Page_Element>
}

/** input type for inserting object relation for remote table "page_element" */
export type Page_Element_Obj_Rel_Insert_Input = {
  data: Page_Element_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Page_Element_On_Conflict>
}

/** on conflict condition type for table "page_element" */
export type Page_Element_On_Conflict = {
  constraint: Page_Element_Constraint
  update_columns: Array<Page_Element_Update_Column>
  where?: Maybe<Page_Element_Bool_Exp>
}

/** Ordering options when selecting data from "page_element". */
export type Page_Element_Order_By = {
  component?: Maybe<Component_Order_By>
  component_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  page?: Maybe<Page_Order_By>
  page_id?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
  props?: Maybe<Prop_C_Order_By>
  styles_aggregate?: Maybe<Style_Page_Element_Aggregate_Order_By>
}

/** primary key columns input for table: page_element */
export type Page_Element_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "page_element" */
export enum Page_Element_Select_Column {
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PageId = 'page_id',
  /** column name */
  PropCId = 'prop_c_id',
}

/** input type for updating data in table "page_element" */
export type Page_Element_Set_Input = {
  component_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  page_id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "page_element" */
export enum Page_Element_Update_Column {
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PageId = 'page_id',
  /** column name */
  PropCId = 'prop_c_id',
}

/** input type for inserting data into table "page" */
export type Page_Insert_Input = {
  app?: Maybe<App_Obj_Rel_Insert_Input>
  app_id?: Maybe<Scalars['uuid']>
  elements?: Maybe<Page_Element_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  links?: Maybe<Page_Link_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
}

/** columns and relationships of "page_link" */
export type Page_Link = {
  id: Scalars['uuid']
  order?: Maybe<Scalars['Int']>
  /** An object relationship */
  page: Page
  page_id: Scalars['uuid']
  props?: Maybe<Scalars['jsonb']>
  /** An object relationship */
  sourceComponentElement: Component_Element
  /** An object relationship */
  sourcePageElement: Page_Element
  source_component_element_id: Scalars['uuid']
  source_page_element_id: Scalars['uuid']
  /** An object relationship */
  targetPageElement: Page_Element
  target_page_element_id: Scalars['uuid']
}

/** columns and relationships of "page_link" */
export type Page_LinkPropsArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "page_link" */
export type Page_Link_Aggregate = {
  aggregate?: Maybe<Page_Link_Aggregate_Fields>
  nodes: Array<Page_Link>
}

/** aggregate fields of "page_link" */
export type Page_Link_Aggregate_Fields = {
  avg?: Maybe<Page_Link_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Page_Link_Max_Fields>
  min?: Maybe<Page_Link_Min_Fields>
  stddev?: Maybe<Page_Link_Stddev_Fields>
  stddev_pop?: Maybe<Page_Link_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Page_Link_Stddev_Samp_Fields>
  sum?: Maybe<Page_Link_Sum_Fields>
  var_pop?: Maybe<Page_Link_Var_Pop_Fields>
  var_samp?: Maybe<Page_Link_Var_Samp_Fields>
  variance?: Maybe<Page_Link_Variance_Fields>
}

/** aggregate fields of "page_link" */
export type Page_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Page_Link_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "page_link" */
export type Page_Link_Aggregate_Order_By = {
  avg?: Maybe<Page_Link_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Page_Link_Max_Order_By>
  min?: Maybe<Page_Link_Min_Order_By>
  stddev?: Maybe<Page_Link_Stddev_Order_By>
  stddev_pop?: Maybe<Page_Link_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Page_Link_Stddev_Samp_Order_By>
  sum?: Maybe<Page_Link_Sum_Order_By>
  var_pop?: Maybe<Page_Link_Var_Pop_Order_By>
  var_samp?: Maybe<Page_Link_Var_Samp_Order_By>
  variance?: Maybe<Page_Link_Variance_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Page_Link_Append_Input = {
  props?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "page_link" */
export type Page_Link_Arr_Rel_Insert_Input = {
  data: Array<Page_Link_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Page_Link_On_Conflict>
}

/** aggregate avg on columns */
export type Page_Link_Avg_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "page_link" */
export type Page_Link_Avg_Order_By = {
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "page_link". All fields are combined with a logical 'AND'. */
export type Page_Link_Bool_Exp = {
  _and?: Maybe<Array<Page_Link_Bool_Exp>>
  _not?: Maybe<Page_Link_Bool_Exp>
  _or?: Maybe<Array<Page_Link_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  order?: Maybe<Int_Comparison_Exp>
  page?: Maybe<Page_Bool_Exp>
  page_id?: Maybe<Uuid_Comparison_Exp>
  props?: Maybe<Jsonb_Comparison_Exp>
  sourceComponentElement?: Maybe<Component_Element_Bool_Exp>
  sourcePageElement?: Maybe<Page_Element_Bool_Exp>
  source_component_element_id?: Maybe<Uuid_Comparison_Exp>
  source_page_element_id?: Maybe<Uuid_Comparison_Exp>
  targetPageElement?: Maybe<Page_Element_Bool_Exp>
  target_page_element_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "page_link" */
export enum Page_Link_Constraint {
  /** unique or primary key constraint */
  PageLinksPkey = 'page_links_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Page_Link_Delete_At_Path_Input = {
  props?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Page_Link_Delete_Elem_Input = {
  props?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Page_Link_Delete_Key_Input = {
  props?: Maybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "page_link" */
export type Page_Link_Inc_Input = {
  order?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "page_link" */
export type Page_Link_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  page?: Maybe<Page_Obj_Rel_Insert_Input>
  page_id?: Maybe<Scalars['uuid']>
  props?: Maybe<Scalars['jsonb']>
  sourceComponentElement?: Maybe<Component_Element_Obj_Rel_Insert_Input>
  sourcePageElement?: Maybe<Page_Element_Obj_Rel_Insert_Input>
  source_component_element_id?: Maybe<Scalars['uuid']>
  source_page_element_id?: Maybe<Scalars['uuid']>
  targetPageElement?: Maybe<Page_Element_Obj_Rel_Insert_Input>
  target_page_element_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Page_Link_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  page_id?: Maybe<Scalars['uuid']>
  source_component_element_id?: Maybe<Scalars['uuid']>
  source_page_element_id?: Maybe<Scalars['uuid']>
  target_page_element_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "page_link" */
export type Page_Link_Max_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  page_id?: Maybe<Order_By>
  source_component_element_id?: Maybe<Order_By>
  source_page_element_id?: Maybe<Order_By>
  target_page_element_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Page_Link_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  page_id?: Maybe<Scalars['uuid']>
  source_component_element_id?: Maybe<Scalars['uuid']>
  source_page_element_id?: Maybe<Scalars['uuid']>
  target_page_element_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "page_link" */
export type Page_Link_Min_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  page_id?: Maybe<Order_By>
  source_component_element_id?: Maybe<Order_By>
  source_page_element_id?: Maybe<Order_By>
  target_page_element_id?: Maybe<Order_By>
}

/** response of any mutation on the table "page_link" */
export type Page_Link_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Page_Link>
}

/** on conflict condition type for table "page_link" */
export type Page_Link_On_Conflict = {
  constraint: Page_Link_Constraint
  update_columns: Array<Page_Link_Update_Column>
  where?: Maybe<Page_Link_Bool_Exp>
}

/** Ordering options when selecting data from "page_link". */
export type Page_Link_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  page?: Maybe<Page_Order_By>
  page_id?: Maybe<Order_By>
  props?: Maybe<Order_By>
  sourceComponentElement?: Maybe<Component_Element_Order_By>
  sourcePageElement?: Maybe<Page_Element_Order_By>
  source_component_element_id?: Maybe<Order_By>
  source_page_element_id?: Maybe<Order_By>
  targetPageElement?: Maybe<Page_Element_Order_By>
  target_page_element_id?: Maybe<Order_By>
}

/** primary key columns input for table: page_link */
export type Page_Link_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Page_Link_Prepend_Input = {
  props?: Maybe<Scalars['jsonb']>
}

/** select columns of table "page_link" */
export enum Page_Link_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PageId = 'page_id',
  /** column name */
  Props = 'props',
  /** column name */
  SourceComponentElementId = 'source_component_element_id',
  /** column name */
  SourcePageElementId = 'source_page_element_id',
  /** column name */
  TargetPageElementId = 'target_page_element_id',
}

/** input type for updating data in table "page_link" */
export type Page_Link_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  order?: Maybe<Scalars['Int']>
  page_id?: Maybe<Scalars['uuid']>
  props?: Maybe<Scalars['jsonb']>
  source_component_element_id?: Maybe<Scalars['uuid']>
  source_page_element_id?: Maybe<Scalars['uuid']>
  target_page_element_id?: Maybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type Page_Link_Stddev_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "page_link" */
export type Page_Link_Stddev_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Page_Link_Stddev_Pop_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "page_link" */
export type Page_Link_Stddev_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Page_Link_Stddev_Samp_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "page_link" */
export type Page_Link_Stddev_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Page_Link_Sum_Fields = {
  order?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "page_link" */
export type Page_Link_Sum_Order_By = {
  order?: Maybe<Order_By>
}

/** update columns of table "page_link" */
export enum Page_Link_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PageId = 'page_id',
  /** column name */
  Props = 'props',
  /** column name */
  SourceComponentElementId = 'source_component_element_id',
  /** column name */
  SourcePageElementId = 'source_page_element_id',
  /** column name */
  TargetPageElementId = 'target_page_element_id',
}

/** aggregate var_pop on columns */
export type Page_Link_Var_Pop_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "page_link" */
export type Page_Link_Var_Pop_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Page_Link_Var_Samp_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "page_link" */
export type Page_Link_Var_Samp_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Page_Link_Variance_Fields = {
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "page_link" */
export type Page_Link_Variance_Order_By = {
  order?: Maybe<Order_By>
}

/** aggregate max on columns */
export type Page_Max_Fields = {
  app_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "page" */
export type Page_Max_Order_By = {
  app_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Page_Min_Fields = {
  app_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "page" */
export type Page_Min_Order_By = {
  app_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "page" */
export type Page_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Page>
}

/** input type for inserting object relation for remote table "page" */
export type Page_Obj_Rel_Insert_Input = {
  data: Page_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Page_On_Conflict>
}

/** on conflict condition type for table "page" */
export type Page_On_Conflict = {
  constraint: Page_Constraint
  update_columns: Array<Page_Update_Column>
  where?: Maybe<Page_Bool_Exp>
}

/** Ordering options when selecting data from "page". */
export type Page_Order_By = {
  app?: Maybe<App_Order_By>
  app_id?: Maybe<Order_By>
  elements_aggregate?: Maybe<Page_Element_Aggregate_Order_By>
  id?: Maybe<Order_By>
  links_aggregate?: Maybe<Page_Link_Aggregate_Order_By>
  name?: Maybe<Order_By>
}

/** primary key columns input for table: page */
export type Page_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "page" */
export enum Page_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "page" */
export type Page_Set_Input = {
  app_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "page" */
export enum Page_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** columns and relationships of "prop" */
export type Prop = {
  id: Scalars['uuid']
  /** An object relationship */
  propCollection: Prop_C
  prop_c_id: Scalars['uuid']
  prop_type_id: Scalars['uuid']
  /** An object relationship */
  type: Prop_Type
  /** An array relationship */
  values: Array<Prop_Value>
  /** An aggregate relationship */
  values_aggregate: Prop_Value_Aggregate
}

/** columns and relationships of "prop" */
export type PropValuesArgs = {
  distinct_on?: Maybe<Array<Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Value_Order_By>>
  where?: Maybe<Prop_Value_Bool_Exp>
}

/** columns and relationships of "prop" */
export type PropValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Value_Order_By>>
  where?: Maybe<Prop_Value_Bool_Exp>
}

/** aggregated selection of "prop" */
export type Prop_Aggregate = {
  aggregate?: Maybe<Prop_Aggregate_Fields>
  nodes: Array<Prop>
}

/** aggregate fields of "prop" */
export type Prop_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Prop_Max_Fields>
  min?: Maybe<Prop_Min_Fields>
}

/** aggregate fields of "prop" */
export type Prop_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prop_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "prop" */
export type Prop_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Prop_Max_Order_By>
  min?: Maybe<Prop_Min_Order_By>
}

/** input type for inserting array relation for remote table "prop" */
export type Prop_Arr_Rel_Insert_Input = {
  data: Array<Prop_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Prop_On_Conflict>
}

/** Boolean expression to filter rows from the table "prop". All fields are combined with a logical 'AND'. */
export type Prop_Bool_Exp = {
  _and?: Maybe<Array<Prop_Bool_Exp>>
  _not?: Maybe<Prop_Bool_Exp>
  _or?: Maybe<Array<Prop_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  propCollection?: Maybe<Prop_C_Bool_Exp>
  prop_c_id?: Maybe<Uuid_Comparison_Exp>
  prop_type_id?: Maybe<Uuid_Comparison_Exp>
  type?: Maybe<Prop_Type_Bool_Exp>
  values?: Maybe<Prop_Value_Bool_Exp>
}

/** columns and relationships of "prop_c" */
export type Prop_C = {
  id: Scalars['uuid']
  label?: Maybe<Scalars['String']>
  libary_id: Scalars['uuid']
  /** An object relationship */
  library: Library
  /** An array relationship */
  props: Array<Prop>
  /** An aggregate relationship */
  props_aggregate: Prop_Aggregate
  /** An array relationship */
  tags: Array<Tag_Prop_C>
  /** An aggregate relationship */
  tags_aggregate: Tag_Prop_C_Aggregate
}

/** columns and relationships of "prop_c" */
export type Prop_CPropsArgs = {
  distinct_on?: Maybe<Array<Prop_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Order_By>>
  where?: Maybe<Prop_Bool_Exp>
}

/** columns and relationships of "prop_c" */
export type Prop_CProps_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Order_By>>
  where?: Maybe<Prop_Bool_Exp>
}

/** columns and relationships of "prop_c" */
export type Prop_CTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

/** columns and relationships of "prop_c" */
export type Prop_CTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

/** aggregated selection of "prop_c" */
export type Prop_C_Aggregate = {
  aggregate?: Maybe<Prop_C_Aggregate_Fields>
  nodes: Array<Prop_C>
}

/** aggregate fields of "prop_c" */
export type Prop_C_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Prop_C_Max_Fields>
  min?: Maybe<Prop_C_Min_Fields>
}

/** aggregate fields of "prop_c" */
export type Prop_C_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prop_C_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "prop_c" */
export type Prop_C_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Prop_C_Max_Order_By>
  min?: Maybe<Prop_C_Min_Order_By>
}

/** input type for inserting array relation for remote table "prop_c" */
export type Prop_C_Arr_Rel_Insert_Input = {
  data: Array<Prop_C_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Prop_C_On_Conflict>
}

/** Boolean expression to filter rows from the table "prop_c". All fields are combined with a logical 'AND'. */
export type Prop_C_Bool_Exp = {
  _and?: Maybe<Array<Prop_C_Bool_Exp>>
  _not?: Maybe<Prop_C_Bool_Exp>
  _or?: Maybe<Array<Prop_C_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  libary_id?: Maybe<Uuid_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  props?: Maybe<Prop_Bool_Exp>
  tags?: Maybe<Tag_Prop_C_Bool_Exp>
}

/** unique or primary key constraints on table "prop_c" */
export enum Prop_C_Constraint {
  /** unique or primary key constraint */
  PropCPkey = 'prop_c_pkey',
}

/** input type for inserting data into table "prop_c" */
export type Prop_C_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  libary_id?: Maybe<Scalars['uuid']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  props?: Maybe<Prop_Arr_Rel_Insert_Input>
  tags?: Maybe<Tag_Prop_C_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Prop_C_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  libary_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "prop_c" */
export type Prop_C_Max_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  libary_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Prop_C_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  libary_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "prop_c" */
export type Prop_C_Min_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  libary_id?: Maybe<Order_By>
}

/** response of any mutation on the table "prop_c" */
export type Prop_C_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Prop_C>
}

/** input type for inserting object relation for remote table "prop_c" */
export type Prop_C_Obj_Rel_Insert_Input = {
  data: Prop_C_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Prop_C_On_Conflict>
}

/** on conflict condition type for table "prop_c" */
export type Prop_C_On_Conflict = {
  constraint: Prop_C_Constraint
  update_columns: Array<Prop_C_Update_Column>
  where?: Maybe<Prop_C_Bool_Exp>
}

/** Ordering options when selecting data from "prop_c". */
export type Prop_C_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  libary_id?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  props_aggregate?: Maybe<Prop_Aggregate_Order_By>
  tags_aggregate?: Maybe<Tag_Prop_C_Aggregate_Order_By>
}

/** primary key columns input for table: prop_c */
export type Prop_C_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "prop_c" */
export enum Prop_C_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibaryId = 'libary_id',
}

/** input type for updating data in table "prop_c" */
export type Prop_C_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  libary_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "prop_c" */
export enum Prop_C_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibaryId = 'libary_id',
}

/** unique or primary key constraints on table "prop" */
export enum Prop_Constraint {
  /** unique or primary key constraint */
  PropsPkey = 'props_pkey',
}

/** input type for inserting data into table "prop" */
export type Prop_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  propCollection?: Maybe<Prop_C_Obj_Rel_Insert_Input>
  prop_c_id?: Maybe<Scalars['uuid']>
  prop_type_id?: Maybe<Scalars['uuid']>
  type?: Maybe<Prop_Type_Obj_Rel_Insert_Input>
  values?: Maybe<Prop_Value_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Prop_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
  prop_type_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "prop" */
export type Prop_Max_Order_By = {
  id?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
  prop_type_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Prop_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
  prop_type_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "prop" */
export type Prop_Min_Order_By = {
  id?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
  prop_type_id?: Maybe<Order_By>
}

/** response of any mutation on the table "prop" */
export type Prop_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Prop>
}

/** input type for inserting object relation for remote table "prop" */
export type Prop_Obj_Rel_Insert_Input = {
  data: Prop_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Prop_On_Conflict>
}

/** on conflict condition type for table "prop" */
export type Prop_On_Conflict = {
  constraint: Prop_Constraint
  update_columns: Array<Prop_Update_Column>
  where?: Maybe<Prop_Bool_Exp>
}

/** Ordering options when selecting data from "prop". */
export type Prop_Order_By = {
  id?: Maybe<Order_By>
  propCollection?: Maybe<Prop_C_Order_By>
  prop_c_id?: Maybe<Order_By>
  prop_type_id?: Maybe<Order_By>
  type?: Maybe<Prop_Type_Order_By>
  values_aggregate?: Maybe<Prop_Value_Aggregate_Order_By>
}

/** primary key columns input for table: prop */
export type Prop_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "prop" */
export enum Prop_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PropCId = 'prop_c_id',
  /** column name */
  PropTypeId = 'prop_type_id',
}

/** input type for updating data in table "prop" */
export type Prop_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  prop_c_id?: Maybe<Scalars['uuid']>
  prop_type_id?: Maybe<Scalars['uuid']>
}

/** columns and relationships of "prop_type" */
export type Prop_Type = {
  id: Scalars['uuid']
  is_array: Scalars['Boolean']
  key: Scalars['String']
  /** An object relationship */
  propTypeCollection: Prop_Type_C
  prop_type_c_id: Scalars['uuid']
  /** An object relationship */
  type: Value_Type
  value_type: Value_Type_Enum
}

/** aggregated selection of "prop_type" */
export type Prop_Type_Aggregate = {
  aggregate?: Maybe<Prop_Type_Aggregate_Fields>
  nodes: Array<Prop_Type>
}

/** aggregate fields of "prop_type" */
export type Prop_Type_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Prop_Type_Max_Fields>
  min?: Maybe<Prop_Type_Min_Fields>
}

/** aggregate fields of "prop_type" */
export type Prop_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prop_Type_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "prop_type" */
export type Prop_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Prop_Type_Max_Order_By>
  min?: Maybe<Prop_Type_Min_Order_By>
}

/** input type for inserting array relation for remote table "prop_type" */
export type Prop_Type_Arr_Rel_Insert_Input = {
  data: Array<Prop_Type_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Prop_Type_On_Conflict>
}

/** Boolean expression to filter rows from the table "prop_type". All fields are combined with a logical 'AND'. */
export type Prop_Type_Bool_Exp = {
  _and?: Maybe<Array<Prop_Type_Bool_Exp>>
  _not?: Maybe<Prop_Type_Bool_Exp>
  _or?: Maybe<Array<Prop_Type_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  is_array?: Maybe<Boolean_Comparison_Exp>
  key?: Maybe<String_Comparison_Exp>
  propTypeCollection?: Maybe<Prop_Type_C_Bool_Exp>
  prop_type_c_id?: Maybe<Uuid_Comparison_Exp>
  type?: Maybe<Value_Type_Bool_Exp>
  value_type?: Maybe<Value_Type_Enum_Comparison_Exp>
}

/** columns and relationships of "prop_type_c" */
export type Prop_Type_C = {
  id: Scalars['uuid']
  label?: Maybe<Scalars['String']>
  /** An object relationship */
  library: Library
  library_id: Scalars['uuid']
  /** An array relationship */
  propTypes: Array<Prop_Type>
  /** An aggregate relationship */
  propTypes_aggregate: Prop_Type_Aggregate
  /** An array relationship */
  tags: Array<Tag_Prop_Type_C>
  /** An aggregate relationship */
  tags_aggregate: Tag_Prop_Type_C_Aggregate
}

/** columns and relationships of "prop_type_c" */
export type Prop_Type_CPropTypesArgs = {
  distinct_on?: Maybe<Array<Prop_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_Order_By>>
  where?: Maybe<Prop_Type_Bool_Exp>
}

/** columns and relationships of "prop_type_c" */
export type Prop_Type_CPropTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_Order_By>>
  where?: Maybe<Prop_Type_Bool_Exp>
}

/** columns and relationships of "prop_type_c" */
export type Prop_Type_CTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

/** columns and relationships of "prop_type_c" */
export type Prop_Type_CTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

/** aggregated selection of "prop_type_c" */
export type Prop_Type_C_Aggregate = {
  aggregate?: Maybe<Prop_Type_C_Aggregate_Fields>
  nodes: Array<Prop_Type_C>
}

/** aggregate fields of "prop_type_c" */
export type Prop_Type_C_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Prop_Type_C_Max_Fields>
  min?: Maybe<Prop_Type_C_Min_Fields>
}

/** aggregate fields of "prop_type_c" */
export type Prop_Type_C_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prop_Type_C_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "prop_type_c" */
export type Prop_Type_C_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Prop_Type_C_Max_Order_By>
  min?: Maybe<Prop_Type_C_Min_Order_By>
}

/** input type for inserting array relation for remote table "prop_type_c" */
export type Prop_Type_C_Arr_Rel_Insert_Input = {
  data: Array<Prop_Type_C_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Prop_Type_C_On_Conflict>
}

/** Boolean expression to filter rows from the table "prop_type_c". All fields are combined with a logical 'AND'. */
export type Prop_Type_C_Bool_Exp = {
  _and?: Maybe<Array<Prop_Type_C_Bool_Exp>>
  _not?: Maybe<Prop_Type_C_Bool_Exp>
  _or?: Maybe<Array<Prop_Type_C_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  propTypes?: Maybe<Prop_Type_Bool_Exp>
  tags?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

/** unique or primary key constraints on table "prop_type_c" */
export enum Prop_Type_C_Constraint {
  /** unique or primary key constraint */
  PropTypeCPkey = 'prop_type_c_pkey',
}

/** input type for inserting data into table "prop_type_c" */
export type Prop_Type_C_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  library_id?: Maybe<Scalars['uuid']>
  propTypes?: Maybe<Prop_Type_Arr_Rel_Insert_Input>
  tags?: Maybe<Tag_Prop_Type_C_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Prop_Type_C_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "prop_type_c" */
export type Prop_Type_C_Max_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Prop_Type_C_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "prop_type_c" */
export type Prop_Type_C_Min_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
}

/** response of any mutation on the table "prop_type_c" */
export type Prop_Type_C_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Prop_Type_C>
}

/** input type for inserting object relation for remote table "prop_type_c" */
export type Prop_Type_C_Obj_Rel_Insert_Input = {
  data: Prop_Type_C_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Prop_Type_C_On_Conflict>
}

/** on conflict condition type for table "prop_type_c" */
export type Prop_Type_C_On_Conflict = {
  constraint: Prop_Type_C_Constraint
  update_columns: Array<Prop_Type_C_Update_Column>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

/** Ordering options when selecting data from "prop_type_c". */
export type Prop_Type_C_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  library_id?: Maybe<Order_By>
  propTypes_aggregate?: Maybe<Prop_Type_Aggregate_Order_By>
  tags_aggregate?: Maybe<Tag_Prop_Type_C_Aggregate_Order_By>
}

/** primary key columns input for table: prop_type_c */
export type Prop_Type_C_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "prop_type_c" */
export enum Prop_Type_C_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibraryId = 'library_id',
}

/** input type for updating data in table "prop_type_c" */
export type Prop_Type_C_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "prop_type_c" */
export enum Prop_Type_C_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibraryId = 'library_id',
}

/** unique or primary key constraints on table "prop_type" */
export enum Prop_Type_Constraint {
  /** unique or primary key constraint */
  PropTypeKeyPropTypeCIdKey = 'prop_type_key_prop_type_c_id_key',
  /** unique or primary key constraint */
  PropTypePkey = 'prop_type_pkey',
}

/** input type for inserting data into table "prop_type" */
export type Prop_Type_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  is_array?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
  propTypeCollection?: Maybe<Prop_Type_C_Obj_Rel_Insert_Input>
  prop_type_c_id?: Maybe<Scalars['uuid']>
  type?: Maybe<Value_Type_Obj_Rel_Insert_Input>
  value_type?: Maybe<Value_Type_Enum>
}

/** aggregate max on columns */
export type Prop_Type_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  key?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "prop_type" */
export type Prop_Type_Max_Order_By = {
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  prop_type_c_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Prop_Type_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  key?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "prop_type" */
export type Prop_Type_Min_Order_By = {
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  prop_type_c_id?: Maybe<Order_By>
}

/** response of any mutation on the table "prop_type" */
export type Prop_Type_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Prop_Type>
}

/** input type for inserting object relation for remote table "prop_type" */
export type Prop_Type_Obj_Rel_Insert_Input = {
  data: Prop_Type_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Prop_Type_On_Conflict>
}

/** on conflict condition type for table "prop_type" */
export type Prop_Type_On_Conflict = {
  constraint: Prop_Type_Constraint
  update_columns: Array<Prop_Type_Update_Column>
  where?: Maybe<Prop_Type_Bool_Exp>
}

/** Ordering options when selecting data from "prop_type". */
export type Prop_Type_Order_By = {
  id?: Maybe<Order_By>
  is_array?: Maybe<Order_By>
  key?: Maybe<Order_By>
  propTypeCollection?: Maybe<Prop_Type_C_Order_By>
  prop_type_c_id?: Maybe<Order_By>
  type?: Maybe<Value_Type_Order_By>
  value_type?: Maybe<Order_By>
}

/** primary key columns input for table: prop_type */
export type Prop_Type_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "prop_type" */
export enum Prop_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsArray = 'is_array',
  /** column name */
  Key = 'key',
  /** column name */
  PropTypeCId = 'prop_type_c_id',
  /** column name */
  ValueType = 'value_type',
}

/** input type for updating data in table "prop_type" */
export type Prop_Type_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  is_array?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
  prop_type_c_id?: Maybe<Scalars['uuid']>
  value_type?: Maybe<Value_Type_Enum>
}

/** update columns of table "prop_type" */
export enum Prop_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsArray = 'is_array',
  /** column name */
  Key = 'key',
  /** column name */
  PropTypeCId = 'prop_type_c_id',
  /** column name */
  ValueType = 'value_type',
}

/** update columns of table "prop" */
export enum Prop_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PropCId = 'prop_c_id',
  /** column name */
  PropTypeId = 'prop_type_id',
}

/** columns and relationships of "prop_value" */
export type Prop_Value = {
  id: Scalars['uuid']
  /** An object relationship */
  prop: Prop
  /** This is the prop that owns this value */
  prop_id: Scalars['uuid']
  /** An array relationship */
  tags: Array<Tag_Prop_Value>
  /** An aggregate relationship */
  tags_aggregate: Tag_Prop_Value_Aggregate
  type: Value_Type_Enum
  /** An object relationship */
  typeEntity: Value_Type
  value?: Maybe<Scalars['String']>
}

/** columns and relationships of "prop_value" */
export type Prop_ValueTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

/** columns and relationships of "prop_value" */
export type Prop_ValueTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

/** aggregated selection of "prop_value" */
export type Prop_Value_Aggregate = {
  aggregate?: Maybe<Prop_Value_Aggregate_Fields>
  nodes: Array<Prop_Value>
}

/** aggregate fields of "prop_value" */
export type Prop_Value_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Prop_Value_Max_Fields>
  min?: Maybe<Prop_Value_Min_Fields>
}

/** aggregate fields of "prop_value" */
export type Prop_Value_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prop_Value_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "prop_value" */
export type Prop_Value_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Prop_Value_Max_Order_By>
  min?: Maybe<Prop_Value_Min_Order_By>
}

/** input type for inserting array relation for remote table "prop_value" */
export type Prop_Value_Arr_Rel_Insert_Input = {
  data: Array<Prop_Value_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Prop_Value_On_Conflict>
}

/** Boolean expression to filter rows from the table "prop_value". All fields are combined with a logical 'AND'. */
export type Prop_Value_Bool_Exp = {
  _and?: Maybe<Array<Prop_Value_Bool_Exp>>
  _not?: Maybe<Prop_Value_Bool_Exp>
  _or?: Maybe<Array<Prop_Value_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  prop?: Maybe<Prop_Bool_Exp>
  prop_id?: Maybe<Uuid_Comparison_Exp>
  tags?: Maybe<Tag_Prop_Value_Bool_Exp>
  type?: Maybe<Value_Type_Enum_Comparison_Exp>
  typeEntity?: Maybe<Value_Type_Bool_Exp>
  value?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "prop_value" */
export enum Prop_Value_Constraint {
  /** unique or primary key constraint */
  PropValuesPkey = 'prop_values_pkey',
}

/** input type for inserting data into table "prop_value" */
export type Prop_Value_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  prop?: Maybe<Prop_Obj_Rel_Insert_Input>
  /** This is the prop that owns this value */
  prop_id?: Maybe<Scalars['uuid']>
  tags?: Maybe<Tag_Prop_Value_Arr_Rel_Insert_Input>
  type?: Maybe<Value_Type_Enum>
  typeEntity?: Maybe<Value_Type_Obj_Rel_Insert_Input>
  value?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Prop_Value_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  /** This is the prop that owns this value */
  prop_id?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "prop_value" */
export type Prop_Value_Max_Order_By = {
  id?: Maybe<Order_By>
  /** This is the prop that owns this value */
  prop_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Prop_Value_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  /** This is the prop that owns this value */
  prop_id?: Maybe<Scalars['uuid']>
  value?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "prop_value" */
export type Prop_Value_Min_Order_By = {
  id?: Maybe<Order_By>
  /** This is the prop that owns this value */
  prop_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** response of any mutation on the table "prop_value" */
export type Prop_Value_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Prop_Value>
}

/** input type for inserting object relation for remote table "prop_value" */
export type Prop_Value_Obj_Rel_Insert_Input = {
  data: Prop_Value_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Prop_Value_On_Conflict>
}

/** on conflict condition type for table "prop_value" */
export type Prop_Value_On_Conflict = {
  constraint: Prop_Value_Constraint
  update_columns: Array<Prop_Value_Update_Column>
  where?: Maybe<Prop_Value_Bool_Exp>
}

/** Ordering options when selecting data from "prop_value". */
export type Prop_Value_Order_By = {
  id?: Maybe<Order_By>
  prop?: Maybe<Prop_Order_By>
  prop_id?: Maybe<Order_By>
  tags_aggregate?: Maybe<Tag_Prop_Value_Aggregate_Order_By>
  type?: Maybe<Order_By>
  typeEntity?: Maybe<Value_Type_Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: prop_value */
export type Prop_Value_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "prop_value" */
export enum Prop_Value_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PropId = 'prop_id',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "prop_value" */
export type Prop_Value_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  /** This is the prop that owns this value */
  prop_id?: Maybe<Scalars['uuid']>
  type?: Maybe<Value_Type_Enum>
  value?: Maybe<Scalars['String']>
}

/** update columns of table "prop_value" */
export enum Prop_Value_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PropId = 'prop_id',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value',
}

export type Query_Root = {
  /** fetch data from the table: "app" */
  app: Array<App>
  /** fetch aggregated fields from the table: "app" */
  app_aggregate: App_Aggregate
  /** fetch data from the table: "app" using primary key columns */
  app_by_pk?: Maybe<App>
  /** fetch data from the table: "atom" */
  atom: Array<Atom>
  /** fetch aggregated fields from the table: "atom" */
  atom_aggregate: Atom_Aggregate
  /** fetch data from the table: "atom" using primary key columns */
  atom_by_pk?: Maybe<Atom>
  /** fetch data from the table: "atom_type" */
  atom_type: Array<Atom_Type>
  /** fetch aggregated fields from the table: "atom_type" */
  atom_type_aggregate: Atom_Type_Aggregate
  /** fetch data from the table: "atom_type" using primary key columns */
  atom_type_by_pk?: Maybe<Atom_Type>
  /** fetch data from the table: "category" */
  category: Array<Category>
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>
  /** fetch data from the table: "component" */
  component: Array<Component>
  /** fetch aggregated fields from the table: "component" */
  component_aggregate: Component_Aggregate
  /** fetch data from the table: "component" using primary key columns */
  component_by_pk?: Maybe<Component>
  /** fetch data from the table: "component_element" */
  component_element: Array<Component_Element>
  /** fetch aggregated fields from the table: "component_element" */
  component_element_aggregate: Component_Element_Aggregate
  /** fetch data from the table: "component_element" using primary key columns */
  component_element_by_pk?: Maybe<Component_Element>
  /** fetch data from the table: "component_link" */
  component_link: Array<Component_Link>
  /** fetch aggregated fields from the table: "component_link" */
  component_link_aggregate: Component_Link_Aggregate
  /** fetch data from the table: "component_link" using primary key columns */
  component_link_by_pk?: Maybe<Component_Link>
  /** execute function "get_current_user" which returns "user" */
  get_current_user: Array<User>
  /** execute function "get_current_user" and query aggregates on result of table type "user" */
  get_current_user_aggregate: User_Aggregate
  /** fetch data from the table: "hoc" */
  hoc: Array<Hoc>
  /** fetch aggregated fields from the table: "hoc" */
  hoc_aggregate: Hoc_Aggregate
  /** fetch data from the table: "hoc" using primary key columns */
  hoc_by_pk?: Maybe<Hoc>
  /** fetch data from the table: "hoc_component_element" */
  hoc_component_element: Array<Hoc_Component_Element>
  /** fetch aggregated fields from the table: "hoc_component_element" */
  hoc_component_element_aggregate: Hoc_Component_Element_Aggregate
  /** fetch data from the table: "hoc_component_element" using primary key columns */
  hoc_component_element_by_pk?: Maybe<Hoc_Component_Element>
  /** fetch data from the table: "lambda" */
  lambda: Array<Lambda>
  /** fetch aggregated fields from the table: "lambda" */
  lambda_aggregate: Lambda_Aggregate
  /** fetch data from the table: "lambda" using primary key columns */
  lambda_by_pk?: Maybe<Lambda>
  /** fetch data from the table: "library" */
  library: Array<Library>
  /** fetch aggregated fields from the table: "library" */
  library_aggregate: Library_Aggregate
  /** fetch data from the table: "library" using primary key columns */
  library_by_pk?: Maybe<Library>
  /** fetch data from the table: "page" */
  page: Array<Page>
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>
  /** fetch data from the table: "page_element" */
  page_element: Array<Page_Element>
  /** fetch aggregated fields from the table: "page_element" */
  page_element_aggregate: Page_Element_Aggregate
  /** fetch data from the table: "page_element" using primary key columns */
  page_element_by_pk?: Maybe<Page_Element>
  /** fetch data from the table: "page_link" */
  page_link: Array<Page_Link>
  /** fetch aggregated fields from the table: "page_link" */
  page_link_aggregate: Page_Link_Aggregate
  /** fetch data from the table: "page_link" using primary key columns */
  page_link_by_pk?: Maybe<Page_Link>
  /** fetch data from the table: "prop" */
  prop: Array<Prop>
  /** fetch aggregated fields from the table: "prop" */
  prop_aggregate: Prop_Aggregate
  /** fetch data from the table: "prop" using primary key columns */
  prop_by_pk?: Maybe<Prop>
  /** fetch data from the table: "prop_c" */
  prop_c: Array<Prop_C>
  /** fetch aggregated fields from the table: "prop_c" */
  prop_c_aggregate: Prop_C_Aggregate
  /** fetch data from the table: "prop_c" using primary key columns */
  prop_c_by_pk?: Maybe<Prop_C>
  /** fetch data from the table: "prop_type" */
  prop_type: Array<Prop_Type>
  /** fetch aggregated fields from the table: "prop_type" */
  prop_type_aggregate: Prop_Type_Aggregate
  /** fetch data from the table: "prop_type" using primary key columns */
  prop_type_by_pk?: Maybe<Prop_Type>
  /** fetch data from the table: "prop_type_c" */
  prop_type_c: Array<Prop_Type_C>
  /** fetch aggregated fields from the table: "prop_type_c" */
  prop_type_c_aggregate: Prop_Type_C_Aggregate
  /** fetch data from the table: "prop_type_c" using primary key columns */
  prop_type_c_by_pk?: Maybe<Prop_Type_C>
  /** fetch data from the table: "prop_value" */
  prop_value: Array<Prop_Value>
  /** fetch aggregated fields from the table: "prop_value" */
  prop_value_aggregate: Prop_Value_Aggregate
  /** fetch data from the table: "prop_value" using primary key columns */
  prop_value_by_pk?: Maybe<Prop_Value>
  /** fetch data from the table: "style" */
  style: Array<Style>
  /** fetch aggregated fields from the table: "style" */
  style_aggregate: Style_Aggregate
  /** fetch data from the table: "style_atom" */
  style_atom: Array<Style_Atom>
  /** fetch aggregated fields from the table: "style_atom" */
  style_atom_aggregate: Style_Atom_Aggregate
  /** fetch data from the table: "style_atom" using primary key columns */
  style_atom_by_pk?: Maybe<Style_Atom>
  /** fetch data from the table: "style" using primary key columns */
  style_by_pk?: Maybe<Style>
  /** fetch data from the table: "style_component_element" */
  style_component_element: Array<Style_Component_Element>
  /** fetch aggregated fields from the table: "style_component_element" */
  style_component_element_aggregate: Style_Component_Element_Aggregate
  /** fetch data from the table: "style_component_element" using primary key columns */
  style_component_element_by_pk?: Maybe<Style_Component_Element>
  /** fetch data from the table: "style_page_element" */
  style_page_element: Array<Style_Page_Element>
  /** fetch aggregated fields from the table: "style_page_element" */
  style_page_element_aggregate: Style_Page_Element_Aggregate
  /** fetch data from the table: "style_page_element" using primary key columns */
  style_page_element_by_pk?: Maybe<Style_Page_Element>
  /** fetch data from the table: "tag" */
  tag: Array<Tag>
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate
  /** fetch data from the table: "tag_atom" */
  tag_atom: Array<Tag_Atom>
  /** fetch aggregated fields from the table: "tag_atom" */
  tag_atom_aggregate: Tag_Atom_Aggregate
  /** fetch data from the table: "tag_atom" using primary key columns */
  tag_atom_by_pk?: Maybe<Tag_Atom>
  /** fetch data from the table: "tag_atom_type" */
  tag_atom_type: Array<Tag_Atom_Type>
  /** fetch aggregated fields from the table: "tag_atom_type" */
  tag_atom_type_aggregate: Tag_Atom_Type_Aggregate
  /** fetch data from the table: "tag_atom_type" using primary key columns */
  tag_atom_type_by_pk?: Maybe<Tag_Atom_Type>
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>
  /** fetch data from the table: "tag_component" */
  tag_component: Array<Tag_Component>
  /** fetch aggregated fields from the table: "tag_component" */
  tag_component_aggregate: Tag_Component_Aggregate
  /** fetch data from the table: "tag_component" using primary key columns */
  tag_component_by_pk?: Maybe<Tag_Component>
  /** fetch data from the table: "tag_hoc" */
  tag_hoc: Array<Tag_Hoc>
  /** fetch aggregated fields from the table: "tag_hoc" */
  tag_hoc_aggregate: Tag_Hoc_Aggregate
  /** fetch data from the table: "tag_hoc" using primary key columns */
  tag_hoc_by_pk?: Maybe<Tag_Hoc>
  /** fetch data from the table: "tag_prop_c" */
  tag_prop_c: Array<Tag_Prop_C>
  /** fetch aggregated fields from the table: "tag_prop_c" */
  tag_prop_c_aggregate: Tag_Prop_C_Aggregate
  /** fetch data from the table: "tag_prop_c" using primary key columns */
  tag_prop_c_by_pk?: Maybe<Tag_Prop_C>
  /** fetch data from the table: "tag_prop_type_c" */
  tag_prop_type_c: Array<Tag_Prop_Type_C>
  /** fetch aggregated fields from the table: "tag_prop_type_c" */
  tag_prop_type_c_aggregate: Tag_Prop_Type_C_Aggregate
  /** fetch data from the table: "tag_prop_type_c" using primary key columns */
  tag_prop_type_c_by_pk?: Maybe<Tag_Prop_Type_C>
  /** fetch data from the table: "tag_prop_value" */
  tag_prop_value: Array<Tag_Prop_Value>
  /** fetch aggregated fields from the table: "tag_prop_value" */
  tag_prop_value_aggregate: Tag_Prop_Value_Aggregate
  /** fetch data from the table: "tag_prop_value" using primary key columns */
  tag_prop_value_by_pk?: Maybe<Tag_Prop_Value>
  /** fetch data from the table: "tag_style" */
  tag_style: Array<Tag_Style>
  /** fetch aggregated fields from the table: "tag_style" */
  tag_style_aggregate: Tag_Style_Aggregate
  /** fetch data from the table: "tag_style" using primary key columns */
  tag_style_by_pk?: Maybe<Tag_Style>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table: "value_type" */
  value_type: Array<Value_Type>
  /** fetch aggregated fields from the table: "value_type" */
  value_type_aggregate: Value_Type_Aggregate
  /** fetch data from the table: "value_type" using primary key columns */
  value_type_by_pk?: Maybe<Value_Type>
}

export type Query_RootAppArgs = {
  distinct_on?: Maybe<Array<App_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<App_Order_By>>
  where?: Maybe<App_Bool_Exp>
}

export type Query_RootApp_AggregateArgs = {
  distinct_on?: Maybe<Array<App_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<App_Order_By>>
  where?: Maybe<App_Bool_Exp>
}

export type Query_RootApp_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootAtomArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

export type Query_RootAtom_AggregateArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

export type Query_RootAtom_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootAtom_TypeArgs = {
  distinct_on?: Maybe<Array<Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Type_Order_By>>
  where?: Maybe<Atom_Type_Bool_Exp>
}

export type Query_RootAtom_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Type_Order_By>>
  where?: Maybe<Atom_Type_Bool_Exp>
}

export type Query_RootAtom_Type_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_Order_By>>
  where?: Maybe<Category_Bool_Exp>
}

export type Query_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_Order_By>>
  where?: Maybe<Category_Bool_Exp>
}

export type Query_RootCategory_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootComponentArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Order_By>>
  where?: Maybe<Component_Bool_Exp>
}

export type Query_RootComponent_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Order_By>>
  where?: Maybe<Component_Bool_Exp>
}

export type Query_RootComponent_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootComponent_ElementArgs = {
  distinct_on?: Maybe<Array<Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Element_Order_By>>
  where?: Maybe<Component_Element_Bool_Exp>
}

export type Query_RootComponent_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Element_Order_By>>
  where?: Maybe<Component_Element_Bool_Exp>
}

export type Query_RootComponent_Element_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootComponent_LinkArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

export type Query_RootComponent_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

export type Query_RootComponent_Link_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootGet_Current_UserArgs = {
  args: Get_Current_User_Args
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Query_RootGet_Current_User_AggregateArgs = {
  args: Get_Current_User_Args
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Query_RootHocArgs = {
  distinct_on?: Maybe<Array<Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Order_By>>
  where?: Maybe<Hoc_Bool_Exp>
}

export type Query_RootHoc_AggregateArgs = {
  distinct_on?: Maybe<Array<Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Order_By>>
  where?: Maybe<Hoc_Bool_Exp>
}

export type Query_RootHoc_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootHoc_Component_ElementArgs = {
  distinct_on?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Component_Element_Order_By>>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

export type Query_RootHoc_Component_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Component_Element_Order_By>>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

export type Query_RootHoc_Component_Element_By_PkArgs = {
  component_element_id: Scalars['uuid']
  hoc_id: Scalars['uuid']
}

export type Query_RootLambdaArgs = {
  distinct_on?: Maybe<Array<Lambda_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lambda_Order_By>>
  where?: Maybe<Lambda_Bool_Exp>
}

export type Query_RootLambda_AggregateArgs = {
  distinct_on?: Maybe<Array<Lambda_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lambda_Order_By>>
  where?: Maybe<Lambda_Bool_Exp>
}

export type Query_RootLambda_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootLibraryArgs = {
  distinct_on?: Maybe<Array<Library_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Library_Order_By>>
  where?: Maybe<Library_Bool_Exp>
}

export type Query_RootLibrary_AggregateArgs = {
  distinct_on?: Maybe<Array<Library_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Library_Order_By>>
  where?: Maybe<Library_Bool_Exp>
}

export type Query_RootLibrary_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootPageArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Order_By>>
  where?: Maybe<Page_Bool_Exp>
}

export type Query_RootPage_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Order_By>>
  where?: Maybe<Page_Bool_Exp>
}

export type Query_RootPage_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootPage_ElementArgs = {
  distinct_on?: Maybe<Array<Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Element_Order_By>>
  where?: Maybe<Page_Element_Bool_Exp>
}

export type Query_RootPage_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Element_Order_By>>
  where?: Maybe<Page_Element_Bool_Exp>
}

export type Query_RootPage_Element_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootPage_LinkArgs = {
  distinct_on?: Maybe<Array<Page_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Link_Order_By>>
  where?: Maybe<Page_Link_Bool_Exp>
}

export type Query_RootPage_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Link_Order_By>>
  where?: Maybe<Page_Link_Bool_Exp>
}

export type Query_RootPage_Link_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootPropArgs = {
  distinct_on?: Maybe<Array<Prop_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Order_By>>
  where?: Maybe<Prop_Bool_Exp>
}

export type Query_RootProp_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Order_By>>
  where?: Maybe<Prop_Bool_Exp>
}

export type Query_RootProp_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProp_CArgs = {
  distinct_on?: Maybe<Array<Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_C_Order_By>>
  where?: Maybe<Prop_C_Bool_Exp>
}

export type Query_RootProp_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_C_Order_By>>
  where?: Maybe<Prop_C_Bool_Exp>
}

export type Query_RootProp_C_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProp_TypeArgs = {
  distinct_on?: Maybe<Array<Prop_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_Order_By>>
  where?: Maybe<Prop_Type_Bool_Exp>
}

export type Query_RootProp_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_Order_By>>
  where?: Maybe<Prop_Type_Bool_Exp>
}

export type Query_RootProp_Type_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProp_Type_CArgs = {
  distinct_on?: Maybe<Array<Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_C_Order_By>>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

export type Query_RootProp_Type_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_C_Order_By>>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

export type Query_RootProp_Type_C_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootProp_ValueArgs = {
  distinct_on?: Maybe<Array<Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Value_Order_By>>
  where?: Maybe<Prop_Value_Bool_Exp>
}

export type Query_RootProp_Value_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Value_Order_By>>
  where?: Maybe<Prop_Value_Bool_Exp>
}

export type Query_RootProp_Value_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootStyleArgs = {
  distinct_on?: Maybe<Array<Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Order_By>>
  where?: Maybe<Style_Bool_Exp>
}

export type Query_RootStyle_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Order_By>>
  where?: Maybe<Style_Bool_Exp>
}

export type Query_RootStyle_AtomArgs = {
  distinct_on?: Maybe<Array<Style_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Atom_Order_By>>
  where?: Maybe<Style_Atom_Bool_Exp>
}

export type Query_RootStyle_Atom_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Atom_Order_By>>
  where?: Maybe<Style_Atom_Bool_Exp>
}

export type Query_RootStyle_Atom_By_PkArgs = {
  atom_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

export type Query_RootStyle_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootStyle_Component_ElementArgs = {
  distinct_on?: Maybe<Array<Style_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Component_Element_Order_By>>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

export type Query_RootStyle_Component_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Component_Element_Order_By>>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

export type Query_RootStyle_Component_Element_By_PkArgs = {
  component_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

export type Query_RootStyle_Page_ElementArgs = {
  distinct_on?: Maybe<Array<Style_Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Page_Element_Order_By>>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

export type Query_RootStyle_Page_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Page_Element_Order_By>>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

export type Query_RootStyle_Page_Element_By_PkArgs = {
  page_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

export type Query_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

export type Query_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

export type Query_RootTag_AtomArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

export type Query_RootTag_Atom_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

export type Query_RootTag_Atom_By_PkArgs = {
  atom_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootTag_Atom_TypeArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Type_Order_By>>
  where?: Maybe<Tag_Atom_Type_Bool_Exp>
}

export type Query_RootTag_Atom_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Type_Order_By>>
  where?: Maybe<Tag_Atom_Type_Bool_Exp>
}

export type Query_RootTag_Atom_Type_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootTag_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootTag_ComponentArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

export type Query_RootTag_Component_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

export type Query_RootTag_Component_By_PkArgs = {
  component_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootTag_HocArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

export type Query_RootTag_Hoc_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

export type Query_RootTag_Hoc_By_PkArgs = {
  hoc_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootTag_Prop_CArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

export type Query_RootTag_Prop_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

export type Query_RootTag_Prop_C_By_PkArgs = {
  prop_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootTag_Prop_Type_CArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

export type Query_RootTag_Prop_Type_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

export type Query_RootTag_Prop_Type_C_By_PkArgs = {
  prop_type_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootTag_Prop_ValueArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

export type Query_RootTag_Prop_Value_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

export type Query_RootTag_Prop_Value_By_PkArgs = {
  prop_value_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootTag_StyleArgs = {
  distinct_on?: Maybe<Array<Tag_Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Style_Order_By>>
  where?: Maybe<Tag_Style_Bool_Exp>
}

export type Query_RootTag_Style_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Style_Order_By>>
  where?: Maybe<Tag_Style_Bool_Exp>
}

export type Query_RootTag_Style_By_PkArgs = {
  style_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Query_RootUser_By_PkArgs = {
  id: Scalars['String']
}

export type Query_RootValue_TypeArgs = {
  distinct_on?: Maybe<Array<Value_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Value_Type_Order_By>>
  where?: Maybe<Value_Type_Bool_Exp>
}

export type Query_RootValue_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Value_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Value_Type_Order_By>>
  where?: Maybe<Value_Type_Bool_Exp>
}

export type Query_RootValue_Type_By_PkArgs = {
  value: Scalars['String']
}

/** columns and relationships of "style" */
export type Style = {
  id: Scalars['uuid']
  /** An object relationship */
  library: Library
  library_id: Scalars['uuid']
  name: Scalars['String']
  /** An object relationship */
  propCollection?: Maybe<Prop_C>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** aggregated selection of "style" */
export type Style_Aggregate = {
  aggregate?: Maybe<Style_Aggregate_Fields>
  nodes: Array<Style>
}

/** aggregate fields of "style" */
export type Style_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Style_Max_Fields>
  min?: Maybe<Style_Min_Fields>
}

/** aggregate fields of "style" */
export type Style_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Style_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "style" */
export type Style_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Style_Max_Order_By>
  min?: Maybe<Style_Min_Order_By>
}

/** input type for inserting array relation for remote table "style" */
export type Style_Arr_Rel_Insert_Input = {
  data: Array<Style_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Style_On_Conflict>
}

/** columns and relationships of "style_atom" */
export type Style_Atom = {
  /** An object relationship */
  atom: Atom
  atom_id: Scalars['uuid']
  /** An object relationship */
  style: Style
  style_id: Scalars['uuid']
}

/** aggregated selection of "style_atom" */
export type Style_Atom_Aggregate = {
  aggregate?: Maybe<Style_Atom_Aggregate_Fields>
  nodes: Array<Style_Atom>
}

/** aggregate fields of "style_atom" */
export type Style_Atom_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Style_Atom_Max_Fields>
  min?: Maybe<Style_Atom_Min_Fields>
}

/** aggregate fields of "style_atom" */
export type Style_Atom_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Style_Atom_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "style_atom" */
export type Style_Atom_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Style_Atom_Max_Order_By>
  min?: Maybe<Style_Atom_Min_Order_By>
}

/** input type for inserting array relation for remote table "style_atom" */
export type Style_Atom_Arr_Rel_Insert_Input = {
  data: Array<Style_Atom_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Style_Atom_On_Conflict>
}

/** Boolean expression to filter rows from the table "style_atom". All fields are combined with a logical 'AND'. */
export type Style_Atom_Bool_Exp = {
  _and?: Maybe<Array<Style_Atom_Bool_Exp>>
  _not?: Maybe<Style_Atom_Bool_Exp>
  _or?: Maybe<Array<Style_Atom_Bool_Exp>>
  atom?: Maybe<Atom_Bool_Exp>
  atom_id?: Maybe<Uuid_Comparison_Exp>
  style?: Maybe<Style_Bool_Exp>
  style_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "style_atom" */
export enum Style_Atom_Constraint {
  /** unique or primary key constraint */
  StyleAtomPkey = 'style_atom_pkey',
}

/** input type for inserting data into table "style_atom" */
export type Style_Atom_Insert_Input = {
  atom?: Maybe<Atom_Obj_Rel_Insert_Input>
  atom_id?: Maybe<Scalars['uuid']>
  style?: Maybe<Style_Obj_Rel_Insert_Input>
  style_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Style_Atom_Max_Fields = {
  atom_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "style_atom" */
export type Style_Atom_Max_Order_By = {
  atom_id?: Maybe<Order_By>
  style_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Style_Atom_Min_Fields = {
  atom_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "style_atom" */
export type Style_Atom_Min_Order_By = {
  atom_id?: Maybe<Order_By>
  style_id?: Maybe<Order_By>
}

/** response of any mutation on the table "style_atom" */
export type Style_Atom_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Style_Atom>
}

/** on conflict condition type for table "style_atom" */
export type Style_Atom_On_Conflict = {
  constraint: Style_Atom_Constraint
  update_columns: Array<Style_Atom_Update_Column>
  where?: Maybe<Style_Atom_Bool_Exp>
}

/** Ordering options when selecting data from "style_atom". */
export type Style_Atom_Order_By = {
  atom?: Maybe<Atom_Order_By>
  atom_id?: Maybe<Order_By>
  style?: Maybe<Style_Order_By>
  style_id?: Maybe<Order_By>
}

/** primary key columns input for table: style_atom */
export type Style_Atom_Pk_Columns_Input = {
  atom_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

/** select columns of table "style_atom" */
export enum Style_Atom_Select_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  StyleId = 'style_id',
}

/** input type for updating data in table "style_atom" */
export type Style_Atom_Set_Input = {
  atom_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "style_atom" */
export enum Style_Atom_Update_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  StyleId = 'style_id',
}

/** Boolean expression to filter rows from the table "style". All fields are combined with a logical 'AND'. */
export type Style_Bool_Exp = {
  _and?: Maybe<Array<Style_Bool_Exp>>
  _not?: Maybe<Style_Bool_Exp>
  _or?: Maybe<Array<Style_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  propCollection?: Maybe<Prop_C_Bool_Exp>
  prop_c_id?: Maybe<Uuid_Comparison_Exp>
}

/** columns and relationships of "style_component_element" */
export type Style_Component_Element = {
  /** An object relationship */
  componentElement: Component_Element
  component_element_id: Scalars['uuid']
  /** An object relationship */
  style: Style
  style_id: Scalars['uuid']
}

/** aggregated selection of "style_component_element" */
export type Style_Component_Element_Aggregate = {
  aggregate?: Maybe<Style_Component_Element_Aggregate_Fields>
  nodes: Array<Style_Component_Element>
}

/** aggregate fields of "style_component_element" */
export type Style_Component_Element_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Style_Component_Element_Max_Fields>
  min?: Maybe<Style_Component_Element_Min_Fields>
}

/** aggregate fields of "style_component_element" */
export type Style_Component_Element_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Style_Component_Element_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "style_component_element" */
export type Style_Component_Element_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Style_Component_Element_Max_Order_By>
  min?: Maybe<Style_Component_Element_Min_Order_By>
}

/** input type for inserting array relation for remote table "style_component_element" */
export type Style_Component_Element_Arr_Rel_Insert_Input = {
  data: Array<Style_Component_Element_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Style_Component_Element_On_Conflict>
}

/** Boolean expression to filter rows from the table "style_component_element". All fields are combined with a logical 'AND'. */
export type Style_Component_Element_Bool_Exp = {
  _and?: Maybe<Array<Style_Component_Element_Bool_Exp>>
  _not?: Maybe<Style_Component_Element_Bool_Exp>
  _or?: Maybe<Array<Style_Component_Element_Bool_Exp>>
  componentElement?: Maybe<Component_Element_Bool_Exp>
  component_element_id?: Maybe<Uuid_Comparison_Exp>
  style?: Maybe<Style_Bool_Exp>
  style_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "style_component_element" */
export enum Style_Component_Element_Constraint {
  /** unique or primary key constraint */
  StyleComponentElementPkey = 'style_component_element_pkey',
}

/** input type for inserting data into table "style_component_element" */
export type Style_Component_Element_Insert_Input = {
  componentElement?: Maybe<Component_Element_Obj_Rel_Insert_Input>
  component_element_id?: Maybe<Scalars['uuid']>
  style?: Maybe<Style_Obj_Rel_Insert_Input>
  style_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Style_Component_Element_Max_Fields = {
  component_element_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "style_component_element" */
export type Style_Component_Element_Max_Order_By = {
  component_element_id?: Maybe<Order_By>
  style_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Style_Component_Element_Min_Fields = {
  component_element_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "style_component_element" */
export type Style_Component_Element_Min_Order_By = {
  component_element_id?: Maybe<Order_By>
  style_id?: Maybe<Order_By>
}

/** response of any mutation on the table "style_component_element" */
export type Style_Component_Element_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Style_Component_Element>
}

/** on conflict condition type for table "style_component_element" */
export type Style_Component_Element_On_Conflict = {
  constraint: Style_Component_Element_Constraint
  update_columns: Array<Style_Component_Element_Update_Column>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

/** Ordering options when selecting data from "style_component_element". */
export type Style_Component_Element_Order_By = {
  componentElement?: Maybe<Component_Element_Order_By>
  component_element_id?: Maybe<Order_By>
  style?: Maybe<Style_Order_By>
  style_id?: Maybe<Order_By>
}

/** primary key columns input for table: style_component_element */
export type Style_Component_Element_Pk_Columns_Input = {
  component_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

/** select columns of table "style_component_element" */
export enum Style_Component_Element_Select_Column {
  /** column name */
  ComponentElementId = 'component_element_id',
  /** column name */
  StyleId = 'style_id',
}

/** input type for updating data in table "style_component_element" */
export type Style_Component_Element_Set_Input = {
  component_element_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "style_component_element" */
export enum Style_Component_Element_Update_Column {
  /** column name */
  ComponentElementId = 'component_element_id',
  /** column name */
  StyleId = 'style_id',
}

/** unique or primary key constraints on table "style" */
export enum Style_Constraint {
  /** unique or primary key constraint */
  StylesPkey = 'styles_pkey',
}

/** input type for inserting data into table "style" */
export type Style_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  propCollection?: Maybe<Prop_C_Obj_Rel_Insert_Input>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Style_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "style" */
export type Style_Max_Order_By = {
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Style_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "style" */
export type Style_Min_Order_By = {
  id?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  prop_c_id?: Maybe<Order_By>
}

/** response of any mutation on the table "style" */
export type Style_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Style>
}

/** input type for inserting object relation for remote table "style" */
export type Style_Obj_Rel_Insert_Input = {
  data: Style_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Style_On_Conflict>
}

/** on conflict condition type for table "style" */
export type Style_On_Conflict = {
  constraint: Style_Constraint
  update_columns: Array<Style_Update_Column>
  where?: Maybe<Style_Bool_Exp>
}

/** Ordering options when selecting data from "style". */
export type Style_Order_By = {
  id?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  library_id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  propCollection?: Maybe<Prop_C_Order_By>
  prop_c_id?: Maybe<Order_By>
}

/** columns and relationships of "style_page_element" */
export type Style_Page_Element = {
  /** An object relationship */
  pageElement: Page_Element
  page_element_id: Scalars['uuid']
  /** An object relationship */
  style: Style
  style_id: Scalars['uuid']
}

/** aggregated selection of "style_page_element" */
export type Style_Page_Element_Aggregate = {
  aggregate?: Maybe<Style_Page_Element_Aggregate_Fields>
  nodes: Array<Style_Page_Element>
}

/** aggregate fields of "style_page_element" */
export type Style_Page_Element_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Style_Page_Element_Max_Fields>
  min?: Maybe<Style_Page_Element_Min_Fields>
}

/** aggregate fields of "style_page_element" */
export type Style_Page_Element_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Style_Page_Element_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "style_page_element" */
export type Style_Page_Element_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Style_Page_Element_Max_Order_By>
  min?: Maybe<Style_Page_Element_Min_Order_By>
}

/** input type for inserting array relation for remote table "style_page_element" */
export type Style_Page_Element_Arr_Rel_Insert_Input = {
  data: Array<Style_Page_Element_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Style_Page_Element_On_Conflict>
}

/** Boolean expression to filter rows from the table "style_page_element". All fields are combined with a logical 'AND'. */
export type Style_Page_Element_Bool_Exp = {
  _and?: Maybe<Array<Style_Page_Element_Bool_Exp>>
  _not?: Maybe<Style_Page_Element_Bool_Exp>
  _or?: Maybe<Array<Style_Page_Element_Bool_Exp>>
  pageElement?: Maybe<Page_Element_Bool_Exp>
  page_element_id?: Maybe<Uuid_Comparison_Exp>
  style?: Maybe<Style_Bool_Exp>
  style_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "style_page_element" */
export enum Style_Page_Element_Constraint {
  /** unique or primary key constraint */
  StylePageElementPkey = 'style_page_element_pkey',
}

/** input type for inserting data into table "style_page_element" */
export type Style_Page_Element_Insert_Input = {
  pageElement?: Maybe<Page_Element_Obj_Rel_Insert_Input>
  page_element_id?: Maybe<Scalars['uuid']>
  style?: Maybe<Style_Obj_Rel_Insert_Input>
  style_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Style_Page_Element_Max_Fields = {
  page_element_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "style_page_element" */
export type Style_Page_Element_Max_Order_By = {
  page_element_id?: Maybe<Order_By>
  style_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Style_Page_Element_Min_Fields = {
  page_element_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "style_page_element" */
export type Style_Page_Element_Min_Order_By = {
  page_element_id?: Maybe<Order_By>
  style_id?: Maybe<Order_By>
}

/** response of any mutation on the table "style_page_element" */
export type Style_Page_Element_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Style_Page_Element>
}

/** on conflict condition type for table "style_page_element" */
export type Style_Page_Element_On_Conflict = {
  constraint: Style_Page_Element_Constraint
  update_columns: Array<Style_Page_Element_Update_Column>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

/** Ordering options when selecting data from "style_page_element". */
export type Style_Page_Element_Order_By = {
  pageElement?: Maybe<Page_Element_Order_By>
  page_element_id?: Maybe<Order_By>
  style?: Maybe<Style_Order_By>
  style_id?: Maybe<Order_By>
}

/** primary key columns input for table: style_page_element */
export type Style_Page_Element_Pk_Columns_Input = {
  page_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

/** select columns of table "style_page_element" */
export enum Style_Page_Element_Select_Column {
  /** column name */
  PageElementId = 'page_element_id',
  /** column name */
  StyleId = 'style_id',
}

/** input type for updating data in table "style_page_element" */
export type Style_Page_Element_Set_Input = {
  page_element_id?: Maybe<Scalars['uuid']>
  style_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "style_page_element" */
export enum Style_Page_Element_Update_Column {
  /** column name */
  PageElementId = 'page_element_id',
  /** column name */
  StyleId = 'style_id',
}

/** primary key columns input for table: style */
export type Style_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "style" */
export enum Style_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
  /** column name */
  Name = 'name',
  /** column name */
  PropCId = 'prop_c_id',
}

/** input type for updating data in table "style" */
export type Style_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  library_id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  prop_c_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "style" */
export enum Style_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LibraryId = 'library_id',
  /** column name */
  Name = 'name',
  /** column name */
  PropCId = 'prop_c_id',
}

export type Subscription_Root = {
  /** fetch data from the table: "app" */
  app: Array<App>
  /** fetch aggregated fields from the table: "app" */
  app_aggregate: App_Aggregate
  /** fetch data from the table: "app" using primary key columns */
  app_by_pk?: Maybe<App>
  /** fetch data from the table: "atom" */
  atom: Array<Atom>
  /** fetch aggregated fields from the table: "atom" */
  atom_aggregate: Atom_Aggregate
  /** fetch data from the table: "atom" using primary key columns */
  atom_by_pk?: Maybe<Atom>
  /** fetch data from the table: "atom_type" */
  atom_type: Array<Atom_Type>
  /** fetch aggregated fields from the table: "atom_type" */
  atom_type_aggregate: Atom_Type_Aggregate
  /** fetch data from the table: "atom_type" using primary key columns */
  atom_type_by_pk?: Maybe<Atom_Type>
  /** fetch data from the table: "category" */
  category: Array<Category>
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>
  /** fetch data from the table: "component" */
  component: Array<Component>
  /** fetch aggregated fields from the table: "component" */
  component_aggregate: Component_Aggregate
  /** fetch data from the table: "component" using primary key columns */
  component_by_pk?: Maybe<Component>
  /** fetch data from the table: "component_element" */
  component_element: Array<Component_Element>
  /** fetch aggregated fields from the table: "component_element" */
  component_element_aggregate: Component_Element_Aggregate
  /** fetch data from the table: "component_element" using primary key columns */
  component_element_by_pk?: Maybe<Component_Element>
  /** fetch data from the table: "component_link" */
  component_link: Array<Component_Link>
  /** fetch aggregated fields from the table: "component_link" */
  component_link_aggregate: Component_Link_Aggregate
  /** fetch data from the table: "component_link" using primary key columns */
  component_link_by_pk?: Maybe<Component_Link>
  /** execute function "get_current_user" which returns "user" */
  get_current_user: Array<User>
  /** execute function "get_current_user" and query aggregates on result of table type "user" */
  get_current_user_aggregate: User_Aggregate
  /** fetch data from the table: "hoc" */
  hoc: Array<Hoc>
  /** fetch aggregated fields from the table: "hoc" */
  hoc_aggregate: Hoc_Aggregate
  /** fetch data from the table: "hoc" using primary key columns */
  hoc_by_pk?: Maybe<Hoc>
  /** fetch data from the table: "hoc_component_element" */
  hoc_component_element: Array<Hoc_Component_Element>
  /** fetch aggregated fields from the table: "hoc_component_element" */
  hoc_component_element_aggregate: Hoc_Component_Element_Aggregate
  /** fetch data from the table: "hoc_component_element" using primary key columns */
  hoc_component_element_by_pk?: Maybe<Hoc_Component_Element>
  /** fetch data from the table: "lambda" */
  lambda: Array<Lambda>
  /** fetch aggregated fields from the table: "lambda" */
  lambda_aggregate: Lambda_Aggregate
  /** fetch data from the table: "lambda" using primary key columns */
  lambda_by_pk?: Maybe<Lambda>
  /** fetch data from the table: "library" */
  library: Array<Library>
  /** fetch aggregated fields from the table: "library" */
  library_aggregate: Library_Aggregate
  /** fetch data from the table: "library" using primary key columns */
  library_by_pk?: Maybe<Library>
  /** fetch data from the table: "page" */
  page: Array<Page>
  /** fetch aggregated fields from the table: "page" */
  page_aggregate: Page_Aggregate
  /** fetch data from the table: "page" using primary key columns */
  page_by_pk?: Maybe<Page>
  /** fetch data from the table: "page_element" */
  page_element: Array<Page_Element>
  /** fetch aggregated fields from the table: "page_element" */
  page_element_aggregate: Page_Element_Aggregate
  /** fetch data from the table: "page_element" using primary key columns */
  page_element_by_pk?: Maybe<Page_Element>
  /** fetch data from the table: "page_link" */
  page_link: Array<Page_Link>
  /** fetch aggregated fields from the table: "page_link" */
  page_link_aggregate: Page_Link_Aggregate
  /** fetch data from the table: "page_link" using primary key columns */
  page_link_by_pk?: Maybe<Page_Link>
  /** fetch data from the table: "prop" */
  prop: Array<Prop>
  /** fetch aggregated fields from the table: "prop" */
  prop_aggregate: Prop_Aggregate
  /** fetch data from the table: "prop" using primary key columns */
  prop_by_pk?: Maybe<Prop>
  /** fetch data from the table: "prop_c" */
  prop_c: Array<Prop_C>
  /** fetch aggregated fields from the table: "prop_c" */
  prop_c_aggregate: Prop_C_Aggregate
  /** fetch data from the table: "prop_c" using primary key columns */
  prop_c_by_pk?: Maybe<Prop_C>
  /** fetch data from the table: "prop_type" */
  prop_type: Array<Prop_Type>
  /** fetch aggregated fields from the table: "prop_type" */
  prop_type_aggregate: Prop_Type_Aggregate
  /** fetch data from the table: "prop_type" using primary key columns */
  prop_type_by_pk?: Maybe<Prop_Type>
  /** fetch data from the table: "prop_type_c" */
  prop_type_c: Array<Prop_Type_C>
  /** fetch aggregated fields from the table: "prop_type_c" */
  prop_type_c_aggregate: Prop_Type_C_Aggregate
  /** fetch data from the table: "prop_type_c" using primary key columns */
  prop_type_c_by_pk?: Maybe<Prop_Type_C>
  /** fetch data from the table: "prop_value" */
  prop_value: Array<Prop_Value>
  /** fetch aggregated fields from the table: "prop_value" */
  prop_value_aggregate: Prop_Value_Aggregate
  /** fetch data from the table: "prop_value" using primary key columns */
  prop_value_by_pk?: Maybe<Prop_Value>
  /** fetch data from the table: "style" */
  style: Array<Style>
  /** fetch aggregated fields from the table: "style" */
  style_aggregate: Style_Aggregate
  /** fetch data from the table: "style_atom" */
  style_atom: Array<Style_Atom>
  /** fetch aggregated fields from the table: "style_atom" */
  style_atom_aggregate: Style_Atom_Aggregate
  /** fetch data from the table: "style_atom" using primary key columns */
  style_atom_by_pk?: Maybe<Style_Atom>
  /** fetch data from the table: "style" using primary key columns */
  style_by_pk?: Maybe<Style>
  /** fetch data from the table: "style_component_element" */
  style_component_element: Array<Style_Component_Element>
  /** fetch aggregated fields from the table: "style_component_element" */
  style_component_element_aggregate: Style_Component_Element_Aggregate
  /** fetch data from the table: "style_component_element" using primary key columns */
  style_component_element_by_pk?: Maybe<Style_Component_Element>
  /** fetch data from the table: "style_page_element" */
  style_page_element: Array<Style_Page_Element>
  /** fetch aggregated fields from the table: "style_page_element" */
  style_page_element_aggregate: Style_Page_Element_Aggregate
  /** fetch data from the table: "style_page_element" using primary key columns */
  style_page_element_by_pk?: Maybe<Style_Page_Element>
  /** fetch data from the table: "tag" */
  tag: Array<Tag>
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate
  /** fetch data from the table: "tag_atom" */
  tag_atom: Array<Tag_Atom>
  /** fetch aggregated fields from the table: "tag_atom" */
  tag_atom_aggregate: Tag_Atom_Aggregate
  /** fetch data from the table: "tag_atom" using primary key columns */
  tag_atom_by_pk?: Maybe<Tag_Atom>
  /** fetch data from the table: "tag_atom_type" */
  tag_atom_type: Array<Tag_Atom_Type>
  /** fetch aggregated fields from the table: "tag_atom_type" */
  tag_atom_type_aggregate: Tag_Atom_Type_Aggregate
  /** fetch data from the table: "tag_atom_type" using primary key columns */
  tag_atom_type_by_pk?: Maybe<Tag_Atom_Type>
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>
  /** fetch data from the table: "tag_component" */
  tag_component: Array<Tag_Component>
  /** fetch aggregated fields from the table: "tag_component" */
  tag_component_aggregate: Tag_Component_Aggregate
  /** fetch data from the table: "tag_component" using primary key columns */
  tag_component_by_pk?: Maybe<Tag_Component>
  /** fetch data from the table: "tag_hoc" */
  tag_hoc: Array<Tag_Hoc>
  /** fetch aggregated fields from the table: "tag_hoc" */
  tag_hoc_aggregate: Tag_Hoc_Aggregate
  /** fetch data from the table: "tag_hoc" using primary key columns */
  tag_hoc_by_pk?: Maybe<Tag_Hoc>
  /** fetch data from the table: "tag_prop_c" */
  tag_prop_c: Array<Tag_Prop_C>
  /** fetch aggregated fields from the table: "tag_prop_c" */
  tag_prop_c_aggregate: Tag_Prop_C_Aggregate
  /** fetch data from the table: "tag_prop_c" using primary key columns */
  tag_prop_c_by_pk?: Maybe<Tag_Prop_C>
  /** fetch data from the table: "tag_prop_type_c" */
  tag_prop_type_c: Array<Tag_Prop_Type_C>
  /** fetch aggregated fields from the table: "tag_prop_type_c" */
  tag_prop_type_c_aggregate: Tag_Prop_Type_C_Aggregate
  /** fetch data from the table: "tag_prop_type_c" using primary key columns */
  tag_prop_type_c_by_pk?: Maybe<Tag_Prop_Type_C>
  /** fetch data from the table: "tag_prop_value" */
  tag_prop_value: Array<Tag_Prop_Value>
  /** fetch aggregated fields from the table: "tag_prop_value" */
  tag_prop_value_aggregate: Tag_Prop_Value_Aggregate
  /** fetch data from the table: "tag_prop_value" using primary key columns */
  tag_prop_value_by_pk?: Maybe<Tag_Prop_Value>
  /** fetch data from the table: "tag_style" */
  tag_style: Array<Tag_Style>
  /** fetch aggregated fields from the table: "tag_style" */
  tag_style_aggregate: Tag_Style_Aggregate
  /** fetch data from the table: "tag_style" using primary key columns */
  tag_style_by_pk?: Maybe<Tag_Style>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table: "value_type" */
  value_type: Array<Value_Type>
  /** fetch aggregated fields from the table: "value_type" */
  value_type_aggregate: Value_Type_Aggregate
  /** fetch data from the table: "value_type" using primary key columns */
  value_type_by_pk?: Maybe<Value_Type>
}

export type Subscription_RootAppArgs = {
  distinct_on?: Maybe<Array<App_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<App_Order_By>>
  where?: Maybe<App_Bool_Exp>
}

export type Subscription_RootApp_AggregateArgs = {
  distinct_on?: Maybe<Array<App_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<App_Order_By>>
  where?: Maybe<App_Bool_Exp>
}

export type Subscription_RootApp_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootAtomArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

export type Subscription_RootAtom_AggregateArgs = {
  distinct_on?: Maybe<Array<Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Order_By>>
  where?: Maybe<Atom_Bool_Exp>
}

export type Subscription_RootAtom_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootAtom_TypeArgs = {
  distinct_on?: Maybe<Array<Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Type_Order_By>>
  where?: Maybe<Atom_Type_Bool_Exp>
}

export type Subscription_RootAtom_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Atom_Type_Order_By>>
  where?: Maybe<Atom_Type_Bool_Exp>
}

export type Subscription_RootAtom_Type_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootCategoryArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_Order_By>>
  where?: Maybe<Category_Bool_Exp>
}

export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_Order_By>>
  where?: Maybe<Category_Bool_Exp>
}

export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootComponentArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Order_By>>
  where?: Maybe<Component_Bool_Exp>
}

export type Subscription_RootComponent_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Order_By>>
  where?: Maybe<Component_Bool_Exp>
}

export type Subscription_RootComponent_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootComponent_ElementArgs = {
  distinct_on?: Maybe<Array<Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Element_Order_By>>
  where?: Maybe<Component_Element_Bool_Exp>
}

export type Subscription_RootComponent_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Element_Order_By>>
  where?: Maybe<Component_Element_Bool_Exp>
}

export type Subscription_RootComponent_Element_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootComponent_LinkArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

export type Subscription_RootComponent_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Component_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Component_Link_Order_By>>
  where?: Maybe<Component_Link_Bool_Exp>
}

export type Subscription_RootComponent_Link_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootGet_Current_UserArgs = {
  args: Get_Current_User_Args
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Subscription_RootGet_Current_User_AggregateArgs = {
  args: Get_Current_User_Args
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Subscription_RootHocArgs = {
  distinct_on?: Maybe<Array<Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Order_By>>
  where?: Maybe<Hoc_Bool_Exp>
}

export type Subscription_RootHoc_AggregateArgs = {
  distinct_on?: Maybe<Array<Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Order_By>>
  where?: Maybe<Hoc_Bool_Exp>
}

export type Subscription_RootHoc_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootHoc_Component_ElementArgs = {
  distinct_on?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Component_Element_Order_By>>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

export type Subscription_RootHoc_Component_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Hoc_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Hoc_Component_Element_Order_By>>
  where?: Maybe<Hoc_Component_Element_Bool_Exp>
}

export type Subscription_RootHoc_Component_Element_By_PkArgs = {
  component_element_id: Scalars['uuid']
  hoc_id: Scalars['uuid']
}

export type Subscription_RootLambdaArgs = {
  distinct_on?: Maybe<Array<Lambda_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lambda_Order_By>>
  where?: Maybe<Lambda_Bool_Exp>
}

export type Subscription_RootLambda_AggregateArgs = {
  distinct_on?: Maybe<Array<Lambda_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lambda_Order_By>>
  where?: Maybe<Lambda_Bool_Exp>
}

export type Subscription_RootLambda_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootLibraryArgs = {
  distinct_on?: Maybe<Array<Library_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Library_Order_By>>
  where?: Maybe<Library_Bool_Exp>
}

export type Subscription_RootLibrary_AggregateArgs = {
  distinct_on?: Maybe<Array<Library_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Library_Order_By>>
  where?: Maybe<Library_Bool_Exp>
}

export type Subscription_RootLibrary_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootPageArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Order_By>>
  where?: Maybe<Page_Bool_Exp>
}

export type Subscription_RootPage_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Order_By>>
  where?: Maybe<Page_Bool_Exp>
}

export type Subscription_RootPage_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootPage_ElementArgs = {
  distinct_on?: Maybe<Array<Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Element_Order_By>>
  where?: Maybe<Page_Element_Bool_Exp>
}

export type Subscription_RootPage_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Element_Order_By>>
  where?: Maybe<Page_Element_Bool_Exp>
}

export type Subscription_RootPage_Element_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootPage_LinkArgs = {
  distinct_on?: Maybe<Array<Page_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Link_Order_By>>
  where?: Maybe<Page_Link_Bool_Exp>
}

export type Subscription_RootPage_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Page_Link_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Page_Link_Order_By>>
  where?: Maybe<Page_Link_Bool_Exp>
}

export type Subscription_RootPage_Link_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootPropArgs = {
  distinct_on?: Maybe<Array<Prop_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Order_By>>
  where?: Maybe<Prop_Bool_Exp>
}

export type Subscription_RootProp_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Order_By>>
  where?: Maybe<Prop_Bool_Exp>
}

export type Subscription_RootProp_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProp_CArgs = {
  distinct_on?: Maybe<Array<Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_C_Order_By>>
  where?: Maybe<Prop_C_Bool_Exp>
}

export type Subscription_RootProp_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_C_Order_By>>
  where?: Maybe<Prop_C_Bool_Exp>
}

export type Subscription_RootProp_C_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProp_TypeArgs = {
  distinct_on?: Maybe<Array<Prop_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_Order_By>>
  where?: Maybe<Prop_Type_Bool_Exp>
}

export type Subscription_RootProp_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_Order_By>>
  where?: Maybe<Prop_Type_Bool_Exp>
}

export type Subscription_RootProp_Type_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProp_Type_CArgs = {
  distinct_on?: Maybe<Array<Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_C_Order_By>>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

export type Subscription_RootProp_Type_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Type_C_Order_By>>
  where?: Maybe<Prop_Type_C_Bool_Exp>
}

export type Subscription_RootProp_Type_C_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootProp_ValueArgs = {
  distinct_on?: Maybe<Array<Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Value_Order_By>>
  where?: Maybe<Prop_Value_Bool_Exp>
}

export type Subscription_RootProp_Value_AggregateArgs = {
  distinct_on?: Maybe<Array<Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Prop_Value_Order_By>>
  where?: Maybe<Prop_Value_Bool_Exp>
}

export type Subscription_RootProp_Value_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootStyleArgs = {
  distinct_on?: Maybe<Array<Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Order_By>>
  where?: Maybe<Style_Bool_Exp>
}

export type Subscription_RootStyle_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Order_By>>
  where?: Maybe<Style_Bool_Exp>
}

export type Subscription_RootStyle_AtomArgs = {
  distinct_on?: Maybe<Array<Style_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Atom_Order_By>>
  where?: Maybe<Style_Atom_Bool_Exp>
}

export type Subscription_RootStyle_Atom_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Atom_Order_By>>
  where?: Maybe<Style_Atom_Bool_Exp>
}

export type Subscription_RootStyle_Atom_By_PkArgs = {
  atom_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

export type Subscription_RootStyle_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootStyle_Component_ElementArgs = {
  distinct_on?: Maybe<Array<Style_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Component_Element_Order_By>>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

export type Subscription_RootStyle_Component_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Component_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Component_Element_Order_By>>
  where?: Maybe<Style_Component_Element_Bool_Exp>
}

export type Subscription_RootStyle_Component_Element_By_PkArgs = {
  component_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

export type Subscription_RootStyle_Page_ElementArgs = {
  distinct_on?: Maybe<Array<Style_Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Page_Element_Order_By>>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

export type Subscription_RootStyle_Page_Element_AggregateArgs = {
  distinct_on?: Maybe<Array<Style_Page_Element_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Style_Page_Element_Order_By>>
  where?: Maybe<Style_Page_Element_Bool_Exp>
}

export type Subscription_RootStyle_Page_Element_By_PkArgs = {
  page_element_id: Scalars['uuid']
  style_id: Scalars['uuid']
}

export type Subscription_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Order_By>>
  where?: Maybe<Tag_Bool_Exp>
}

export type Subscription_RootTag_AtomArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

export type Subscription_RootTag_Atom_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

export type Subscription_RootTag_Atom_By_PkArgs = {
  atom_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootTag_Atom_TypeArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Type_Order_By>>
  where?: Maybe<Tag_Atom_Type_Bool_Exp>
}

export type Subscription_RootTag_Atom_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Type_Order_By>>
  where?: Maybe<Tag_Atom_Type_Bool_Exp>
}

export type Subscription_RootTag_Atom_Type_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootTag_ComponentArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

export type Subscription_RootTag_Component_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

export type Subscription_RootTag_Component_By_PkArgs = {
  component_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootTag_HocArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

export type Subscription_RootTag_Hoc_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

export type Subscription_RootTag_Hoc_By_PkArgs = {
  hoc_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootTag_Prop_CArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

export type Subscription_RootTag_Prop_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

export type Subscription_RootTag_Prop_C_By_PkArgs = {
  prop_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootTag_Prop_Type_CArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

export type Subscription_RootTag_Prop_Type_C_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

export type Subscription_RootTag_Prop_Type_C_By_PkArgs = {
  prop_type_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootTag_Prop_ValueArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

export type Subscription_RootTag_Prop_Value_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

export type Subscription_RootTag_Prop_Value_By_PkArgs = {
  prop_value_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootTag_StyleArgs = {
  distinct_on?: Maybe<Array<Tag_Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Style_Order_By>>
  where?: Maybe<Tag_Style_Bool_Exp>
}

export type Subscription_RootTag_Style_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Style_Order_By>>
  where?: Maybe<Tag_Style_Bool_Exp>
}

export type Subscription_RootTag_Style_By_PkArgs = {
  style_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String']
}

export type Subscription_RootValue_TypeArgs = {
  distinct_on?: Maybe<Array<Value_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Value_Type_Order_By>>
  where?: Maybe<Value_Type_Bool_Exp>
}

export type Subscription_RootValue_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Value_Type_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Value_Type_Order_By>>
  where?: Maybe<Value_Type_Bool_Exp>
}

export type Subscription_RootValue_Type_By_PkArgs = {
  value: Scalars['String']
}

/** columns and relationships of "tag" */
export type Tag = {
  /** An array relationship */
  atoms: Array<Tag_Atom>
  /** An aggregate relationship */
  atoms_aggregate: Tag_Atom_Aggregate
  /** An object relationship */
  category?: Maybe<Category>
  category_id?: Maybe<Scalars['uuid']>
  /** An array relationship */
  components: Array<Tag_Component>
  /** An aggregate relationship */
  components_aggregate: Tag_Component_Aggregate
  /** An array relationship */
  hocs: Array<Tag_Hoc>
  /** An aggregate relationship */
  hocs_aggregate: Tag_Hoc_Aggregate
  id: Scalars['uuid']
  label: Scalars['String']
  /** An object relationship */
  library: Library
  library_id: Scalars['uuid']
  /** An array relationship */
  propCollections: Array<Tag_Prop_C>
  /** An aggregate relationship */
  propCollections_aggregate: Tag_Prop_C_Aggregate
  /** An array relationship */
  propTypeCollections: Array<Tag_Prop_Type_C>
  /** An aggregate relationship */
  propTypeCollections_aggregate: Tag_Prop_Type_C_Aggregate
  /** An array relationship */
  propValues: Array<Tag_Prop_Value>
  /** An aggregate relationship */
  propValues_aggregate: Tag_Prop_Value_Aggregate
  /** An array relationship */
  styles: Array<Tag_Style>
  /** An aggregate relationship */
  styles_aggregate: Tag_Style_Aggregate
}

/** columns and relationships of "tag" */
export type TagAtomsArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagAtoms_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Atom_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Atom_Order_By>>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagComponentsArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagComponents_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Component_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Component_Order_By>>
  where?: Maybe<Tag_Component_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagHocsArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagHocs_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Hoc_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Hoc_Order_By>>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagPropCollectionsArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagPropCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_C_Order_By>>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagPropTypeCollectionsArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagPropTypeCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Type_C_Order_By>>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagPropValuesArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagPropValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Prop_Value_Order_By>>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagStylesArgs = {
  distinct_on?: Maybe<Array<Tag_Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Style_Order_By>>
  where?: Maybe<Tag_Style_Bool_Exp>
}

/** columns and relationships of "tag" */
export type TagStyles_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Style_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Tag_Style_Order_By>>
  where?: Maybe<Tag_Style_Bool_Exp>
}

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  aggregate?: Maybe<Tag_Aggregate_Fields>
  nodes: Array<Tag>
}

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Max_Fields>
  min?: Maybe<Tag_Min_Fields>
}

/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag" */
export type Tag_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Max_Order_By>
  min?: Maybe<Tag_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag" */
export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_On_Conflict>
}

/** columns and relationships of "tag_atom" */
export type Tag_Atom = {
  /** An object relationship */
  atom: Atom
  atom_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_atom" */
export type Tag_Atom_Aggregate = {
  aggregate?: Maybe<Tag_Atom_Aggregate_Fields>
  nodes: Array<Tag_Atom>
}

/** aggregate fields of "tag_atom" */
export type Tag_Atom_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Atom_Max_Fields>
  min?: Maybe<Tag_Atom_Min_Fields>
}

/** aggregate fields of "tag_atom" */
export type Tag_Atom_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Atom_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_atom" */
export type Tag_Atom_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Atom_Max_Order_By>
  min?: Maybe<Tag_Atom_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_atom" */
export type Tag_Atom_Arr_Rel_Insert_Input = {
  data: Array<Tag_Atom_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Atom_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_atom". All fields are combined with a logical 'AND'. */
export type Tag_Atom_Bool_Exp = {
  _and?: Maybe<Array<Tag_Atom_Bool_Exp>>
  _not?: Maybe<Tag_Atom_Bool_Exp>
  _or?: Maybe<Array<Tag_Atom_Bool_Exp>>
  atom?: Maybe<Atom_Bool_Exp>
  atom_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_atom" */
export enum Tag_Atom_Constraint {
  /** unique or primary key constraint */
  TagAtomPkey = 'tag_atom_pkey',
}

/** input type for inserting data into table "tag_atom" */
export type Tag_Atom_Insert_Input = {
  atom?: Maybe<Atom_Obj_Rel_Insert_Input>
  atom_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Atom_Max_Fields = {
  atom_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_atom" */
export type Tag_Atom_Max_Order_By = {
  atom_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Atom_Min_Fields = {
  atom_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_atom" */
export type Tag_Atom_Min_Order_By = {
  atom_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_atom" */
export type Tag_Atom_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Atom>
}

/** on conflict condition type for table "tag_atom" */
export type Tag_Atom_On_Conflict = {
  constraint: Tag_Atom_Constraint
  update_columns: Array<Tag_Atom_Update_Column>
  where?: Maybe<Tag_Atom_Bool_Exp>
}

/** Ordering options when selecting data from "tag_atom". */
export type Tag_Atom_Order_By = {
  atom?: Maybe<Atom_Order_By>
  atom_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_atom */
export type Tag_Atom_Pk_Columns_Input = {
  atom_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_atom" */
export enum Tag_Atom_Select_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_atom" */
export type Tag_Atom_Set_Input = {
  atom_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** columns and relationships of "tag_atom_type" */
export type Tag_Atom_Type = {
  id: Scalars['uuid']
}

/** aggregated selection of "tag_atom_type" */
export type Tag_Atom_Type_Aggregate = {
  aggregate?: Maybe<Tag_Atom_Type_Aggregate_Fields>
  nodes: Array<Tag_Atom_Type>
}

/** aggregate fields of "tag_atom_type" */
export type Tag_Atom_Type_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Atom_Type_Max_Fields>
  min?: Maybe<Tag_Atom_Type_Min_Fields>
}

/** aggregate fields of "tag_atom_type" */
export type Tag_Atom_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Atom_Type_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "tag_atom_type". All fields are combined with a logical 'AND'. */
export type Tag_Atom_Type_Bool_Exp = {
  _and?: Maybe<Array<Tag_Atom_Type_Bool_Exp>>
  _not?: Maybe<Tag_Atom_Type_Bool_Exp>
  _or?: Maybe<Array<Tag_Atom_Type_Bool_Exp>>
  id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_atom_type" */
export enum Tag_Atom_Type_Constraint {
  /** unique or primary key constraint */
  TagAtomTypePkey = 'tag_atom_type_pkey',
}

/** input type for inserting data into table "tag_atom_type" */
export type Tag_Atom_Type_Insert_Input = {
  id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Atom_Type_Max_Fields = {
  id?: Maybe<Scalars['uuid']>
}

/** aggregate min on columns */
export type Tag_Atom_Type_Min_Fields = {
  id?: Maybe<Scalars['uuid']>
}

/** response of any mutation on the table "tag_atom_type" */
export type Tag_Atom_Type_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Atom_Type>
}

/** on conflict condition type for table "tag_atom_type" */
export type Tag_Atom_Type_On_Conflict = {
  constraint: Tag_Atom_Type_Constraint
  update_columns: Array<Tag_Atom_Type_Update_Column>
  where?: Maybe<Tag_Atom_Type_Bool_Exp>
}

/** Ordering options when selecting data from "tag_atom_type". */
export type Tag_Atom_Type_Order_By = {
  id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_atom_type */
export type Tag_Atom_Type_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "tag_atom_type" */
export enum Tag_Atom_Type_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "tag_atom_type" */
export type Tag_Atom_Type_Set_Input = {
  id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_atom_type" */
export enum Tag_Atom_Type_Update_Column {
  /** column name */
  Id = 'id',
}

/** update columns of table "tag_atom" */
export enum Tag_Atom_Update_Column {
  /** column name */
  AtomId = 'atom_id',
  /** column name */
  TagId = 'tag_id',
}

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Tag_Bool_Exp>>
  _not?: Maybe<Tag_Bool_Exp>
  _or?: Maybe<Array<Tag_Bool_Exp>>
  atoms?: Maybe<Tag_Atom_Bool_Exp>
  category?: Maybe<Category_Bool_Exp>
  category_id?: Maybe<Uuid_Comparison_Exp>
  components?: Maybe<Tag_Component_Bool_Exp>
  hocs?: Maybe<Tag_Hoc_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  library?: Maybe<Library_Bool_Exp>
  library_id?: Maybe<Uuid_Comparison_Exp>
  propCollections?: Maybe<Tag_Prop_C_Bool_Exp>
  propTypeCollections?: Maybe<Tag_Prop_Type_C_Bool_Exp>
  propValues?: Maybe<Tag_Prop_Value_Bool_Exp>
  styles?: Maybe<Tag_Style_Bool_Exp>
}

/** columns and relationships of "tag_component" */
export type Tag_Component = {
  /** An object relationship */
  component: Component
  component_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_component" */
export type Tag_Component_Aggregate = {
  aggregate?: Maybe<Tag_Component_Aggregate_Fields>
  nodes: Array<Tag_Component>
}

/** aggregate fields of "tag_component" */
export type Tag_Component_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Component_Max_Fields>
  min?: Maybe<Tag_Component_Min_Fields>
}

/** aggregate fields of "tag_component" */
export type Tag_Component_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Component_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_component" */
export type Tag_Component_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Component_Max_Order_By>
  min?: Maybe<Tag_Component_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_component" */
export type Tag_Component_Arr_Rel_Insert_Input = {
  data: Array<Tag_Component_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Component_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_component". All fields are combined with a logical 'AND'. */
export type Tag_Component_Bool_Exp = {
  _and?: Maybe<Array<Tag_Component_Bool_Exp>>
  _not?: Maybe<Tag_Component_Bool_Exp>
  _or?: Maybe<Array<Tag_Component_Bool_Exp>>
  component?: Maybe<Component_Bool_Exp>
  component_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_component" */
export enum Tag_Component_Constraint {
  /** unique or primary key constraint */
  TagComponentPkey = 'tag_component_pkey',
}

/** input type for inserting data into table "tag_component" */
export type Tag_Component_Insert_Input = {
  component?: Maybe<Component_Obj_Rel_Insert_Input>
  component_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Component_Max_Fields = {
  component_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_component" */
export type Tag_Component_Max_Order_By = {
  component_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Component_Min_Fields = {
  component_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_component" */
export type Tag_Component_Min_Order_By = {
  component_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_component" */
export type Tag_Component_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Component>
}

/** on conflict condition type for table "tag_component" */
export type Tag_Component_On_Conflict = {
  constraint: Tag_Component_Constraint
  update_columns: Array<Tag_Component_Update_Column>
  where?: Maybe<Tag_Component_Bool_Exp>
}

/** Ordering options when selecting data from "tag_component". */
export type Tag_Component_Order_By = {
  component?: Maybe<Component_Order_By>
  component_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_component */
export type Tag_Component_Pk_Columns_Input = {
  component_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_component" */
export enum Tag_Component_Select_Column {
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_component" */
export type Tag_Component_Set_Input = {
  component_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_component" */
export enum Tag_Component_Update_Column {
  /** column name */
  ComponentId = 'component_id',
  /** column name */
  TagId = 'tag_id',
}

/** unique or primary key constraints on table "tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey',
}

/** columns and relationships of "tag_hoc" */
export type Tag_Hoc = {
  /** An object relationship */
  hoc: Hoc
  hoc_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_hoc" */
export type Tag_Hoc_Aggregate = {
  aggregate?: Maybe<Tag_Hoc_Aggregate_Fields>
  nodes: Array<Tag_Hoc>
}

/** aggregate fields of "tag_hoc" */
export type Tag_Hoc_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Hoc_Max_Fields>
  min?: Maybe<Tag_Hoc_Min_Fields>
}

/** aggregate fields of "tag_hoc" */
export type Tag_Hoc_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Hoc_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_hoc" */
export type Tag_Hoc_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Hoc_Max_Order_By>
  min?: Maybe<Tag_Hoc_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_hoc" */
export type Tag_Hoc_Arr_Rel_Insert_Input = {
  data: Array<Tag_Hoc_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Hoc_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_hoc". All fields are combined with a logical 'AND'. */
export type Tag_Hoc_Bool_Exp = {
  _and?: Maybe<Array<Tag_Hoc_Bool_Exp>>
  _not?: Maybe<Tag_Hoc_Bool_Exp>
  _or?: Maybe<Array<Tag_Hoc_Bool_Exp>>
  hoc?: Maybe<Hoc_Bool_Exp>
  hoc_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_hoc" */
export enum Tag_Hoc_Constraint {
  /** unique or primary key constraint */
  TagHocPkey = 'tag_hoc_pkey',
}

/** input type for inserting data into table "tag_hoc" */
export type Tag_Hoc_Insert_Input = {
  hoc?: Maybe<Hoc_Obj_Rel_Insert_Input>
  hoc_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Hoc_Max_Fields = {
  hoc_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_hoc" */
export type Tag_Hoc_Max_Order_By = {
  hoc_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Hoc_Min_Fields = {
  hoc_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_hoc" */
export type Tag_Hoc_Min_Order_By = {
  hoc_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_hoc" */
export type Tag_Hoc_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Hoc>
}

/** on conflict condition type for table "tag_hoc" */
export type Tag_Hoc_On_Conflict = {
  constraint: Tag_Hoc_Constraint
  update_columns: Array<Tag_Hoc_Update_Column>
  where?: Maybe<Tag_Hoc_Bool_Exp>
}

/** Ordering options when selecting data from "tag_hoc". */
export type Tag_Hoc_Order_By = {
  hoc?: Maybe<Hoc_Order_By>
  hoc_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_hoc */
export type Tag_Hoc_Pk_Columns_Input = {
  hoc_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_hoc" */
export enum Tag_Hoc_Select_Column {
  /** column name */
  HocId = 'hoc_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_hoc" */
export type Tag_Hoc_Set_Input = {
  hoc_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_hoc" */
export enum Tag_Hoc_Update_Column {
  /** column name */
  HocId = 'hoc_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for inserting data into table "tag" */
export type Tag_Insert_Input = {
  atoms?: Maybe<Tag_Atom_Arr_Rel_Insert_Input>
  category?: Maybe<Category_Obj_Rel_Insert_Input>
  category_id?: Maybe<Scalars['uuid']>
  components?: Maybe<Tag_Component_Arr_Rel_Insert_Input>
  hocs?: Maybe<Tag_Hoc_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library?: Maybe<Library_Obj_Rel_Insert_Input>
  library_id?: Maybe<Scalars['uuid']>
  propCollections?: Maybe<Tag_Prop_C_Arr_Rel_Insert_Input>
  propTypeCollections?: Maybe<Tag_Prop_Type_C_Arr_Rel_Insert_Input>
  propValues?: Maybe<Tag_Prop_Value_Arr_Rel_Insert_Input>
  styles?: Maybe<Tag_Style_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Tag_Max_Fields = {
  category_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag" */
export type Tag_Max_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Min_Fields = {
  category_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag" */
export type Tag_Min_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag" */
export type Tag_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag>
}

/** input type for inserting object relation for remote table "tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Tag_On_Conflict>
}

/** on conflict condition type for table "tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint
  update_columns: Array<Tag_Update_Column>
  where?: Maybe<Tag_Bool_Exp>
}

/** Ordering options when selecting data from "tag". */
export type Tag_Order_By = {
  atoms_aggregate?: Maybe<Tag_Atom_Aggregate_Order_By>
  category?: Maybe<Category_Order_By>
  category_id?: Maybe<Order_By>
  components_aggregate?: Maybe<Tag_Component_Aggregate_Order_By>
  hocs_aggregate?: Maybe<Tag_Hoc_Aggregate_Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  library?: Maybe<Library_Order_By>
  library_id?: Maybe<Order_By>
  propCollections_aggregate?: Maybe<Tag_Prop_C_Aggregate_Order_By>
  propTypeCollections_aggregate?: Maybe<Tag_Prop_Type_C_Aggregate_Order_By>
  propValues_aggregate?: Maybe<Tag_Prop_Value_Aggregate_Order_By>
  styles_aggregate?: Maybe<Tag_Style_Aggregate_Order_By>
}

/** primary key columns input for table: tag */
export type Tag_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** columns and relationships of "tag_prop_c" */
export type Tag_Prop_C = {
  /** An object relationship */
  propCollection: Prop_C
  prop_c_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_prop_c" */
export type Tag_Prop_C_Aggregate = {
  aggregate?: Maybe<Tag_Prop_C_Aggregate_Fields>
  nodes: Array<Tag_Prop_C>
}

/** aggregate fields of "tag_prop_c" */
export type Tag_Prop_C_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Prop_C_Max_Fields>
  min?: Maybe<Tag_Prop_C_Min_Fields>
}

/** aggregate fields of "tag_prop_c" */
export type Tag_Prop_C_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Prop_C_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_prop_c" */
export type Tag_Prop_C_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Prop_C_Max_Order_By>
  min?: Maybe<Tag_Prop_C_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_prop_c" */
export type Tag_Prop_C_Arr_Rel_Insert_Input = {
  data: Array<Tag_Prop_C_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Prop_C_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_prop_c". All fields are combined with a logical 'AND'. */
export type Tag_Prop_C_Bool_Exp = {
  _and?: Maybe<Array<Tag_Prop_C_Bool_Exp>>
  _not?: Maybe<Tag_Prop_C_Bool_Exp>
  _or?: Maybe<Array<Tag_Prop_C_Bool_Exp>>
  propCollection?: Maybe<Prop_C_Bool_Exp>
  prop_c_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_prop_c" */
export enum Tag_Prop_C_Constraint {
  /** unique or primary key constraint */
  TagPropCPkey = 'tag_prop_c_pkey',
}

/** input type for inserting data into table "tag_prop_c" */
export type Tag_Prop_C_Insert_Input = {
  propCollection?: Maybe<Prop_C_Obj_Rel_Insert_Input>
  prop_c_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Prop_C_Max_Fields = {
  prop_c_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_prop_c" */
export type Tag_Prop_C_Max_Order_By = {
  prop_c_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Prop_C_Min_Fields = {
  prop_c_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_prop_c" */
export type Tag_Prop_C_Min_Order_By = {
  prop_c_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_prop_c" */
export type Tag_Prop_C_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Prop_C>
}

/** on conflict condition type for table "tag_prop_c" */
export type Tag_Prop_C_On_Conflict = {
  constraint: Tag_Prop_C_Constraint
  update_columns: Array<Tag_Prop_C_Update_Column>
  where?: Maybe<Tag_Prop_C_Bool_Exp>
}

/** Ordering options when selecting data from "tag_prop_c". */
export type Tag_Prop_C_Order_By = {
  propCollection?: Maybe<Prop_C_Order_By>
  prop_c_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_prop_c */
export type Tag_Prop_C_Pk_Columns_Input = {
  prop_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_prop_c" */
export enum Tag_Prop_C_Select_Column {
  /** column name */
  PropCId = 'prop_c_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_prop_c" */
export type Tag_Prop_C_Set_Input = {
  prop_c_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_prop_c" */
export enum Tag_Prop_C_Update_Column {
  /** column name */
  PropCId = 'prop_c_id',
  /** column name */
  TagId = 'tag_id',
}

/** columns and relationships of "tag_prop_type_c" */
export type Tag_Prop_Type_C = {
  /** An object relationship */
  propTypeCollection: Prop_Type_C
  prop_type_c_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_prop_type_c" */
export type Tag_Prop_Type_C_Aggregate = {
  aggregate?: Maybe<Tag_Prop_Type_C_Aggregate_Fields>
  nodes: Array<Tag_Prop_Type_C>
}

/** aggregate fields of "tag_prop_type_c" */
export type Tag_Prop_Type_C_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Prop_Type_C_Max_Fields>
  min?: Maybe<Tag_Prop_Type_C_Min_Fields>
}

/** aggregate fields of "tag_prop_type_c" */
export type Tag_Prop_Type_C_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Prop_Type_C_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Prop_Type_C_Max_Order_By>
  min?: Maybe<Tag_Prop_Type_C_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Arr_Rel_Insert_Input = {
  data: Array<Tag_Prop_Type_C_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Prop_Type_C_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_prop_type_c". All fields are combined with a logical 'AND'. */
export type Tag_Prop_Type_C_Bool_Exp = {
  _and?: Maybe<Array<Tag_Prop_Type_C_Bool_Exp>>
  _not?: Maybe<Tag_Prop_Type_C_Bool_Exp>
  _or?: Maybe<Array<Tag_Prop_Type_C_Bool_Exp>>
  propTypeCollection?: Maybe<Prop_Type_C_Bool_Exp>
  prop_type_c_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_prop_type_c" */
export enum Tag_Prop_Type_C_Constraint {
  /** unique or primary key constraint */
  TagPropTypeCPkey = 'tag_prop_type_c_pkey',
}

/** input type for inserting data into table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Insert_Input = {
  propTypeCollection?: Maybe<Prop_Type_C_Obj_Rel_Insert_Input>
  prop_type_c_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Prop_Type_C_Max_Fields = {
  prop_type_c_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Max_Order_By = {
  prop_type_c_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Prop_Type_C_Min_Fields = {
  prop_type_c_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Min_Order_By = {
  prop_type_c_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Prop_Type_C>
}

/** on conflict condition type for table "tag_prop_type_c" */
export type Tag_Prop_Type_C_On_Conflict = {
  constraint: Tag_Prop_Type_C_Constraint
  update_columns: Array<Tag_Prop_Type_C_Update_Column>
  where?: Maybe<Tag_Prop_Type_C_Bool_Exp>
}

/** Ordering options when selecting data from "tag_prop_type_c". */
export type Tag_Prop_Type_C_Order_By = {
  propTypeCollection?: Maybe<Prop_Type_C_Order_By>
  prop_type_c_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_prop_type_c */
export type Tag_Prop_Type_C_Pk_Columns_Input = {
  prop_type_c_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_prop_type_c" */
export enum Tag_Prop_Type_C_Select_Column {
  /** column name */
  PropTypeCId = 'prop_type_c_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_prop_type_c" */
export type Tag_Prop_Type_C_Set_Input = {
  prop_type_c_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_prop_type_c" */
export enum Tag_Prop_Type_C_Update_Column {
  /** column name */
  PropTypeCId = 'prop_type_c_id',
  /** column name */
  TagId = 'tag_id',
}

/** columns and relationships of "tag_prop_value" */
export type Tag_Prop_Value = {
  /** An object relationship */
  propValue: Prop_Value
  prop_value_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_prop_value" */
export type Tag_Prop_Value_Aggregate = {
  aggregate?: Maybe<Tag_Prop_Value_Aggregate_Fields>
  nodes: Array<Tag_Prop_Value>
}

/** aggregate fields of "tag_prop_value" */
export type Tag_Prop_Value_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Prop_Value_Max_Fields>
  min?: Maybe<Tag_Prop_Value_Min_Fields>
}

/** aggregate fields of "tag_prop_value" */
export type Tag_Prop_Value_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Prop_Value_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_prop_value" */
export type Tag_Prop_Value_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Prop_Value_Max_Order_By>
  min?: Maybe<Tag_Prop_Value_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_prop_value" */
export type Tag_Prop_Value_Arr_Rel_Insert_Input = {
  data: Array<Tag_Prop_Value_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Prop_Value_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_prop_value". All fields are combined with a logical 'AND'. */
export type Tag_Prop_Value_Bool_Exp = {
  _and?: Maybe<Array<Tag_Prop_Value_Bool_Exp>>
  _not?: Maybe<Tag_Prop_Value_Bool_Exp>
  _or?: Maybe<Array<Tag_Prop_Value_Bool_Exp>>
  propValue?: Maybe<Prop_Value_Bool_Exp>
  prop_value_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_prop_value" */
export enum Tag_Prop_Value_Constraint {
  /** unique or primary key constraint */
  PropValueTagPkey = 'prop_value_tag_pkey',
}

/** input type for inserting data into table "tag_prop_value" */
export type Tag_Prop_Value_Insert_Input = {
  propValue?: Maybe<Prop_Value_Obj_Rel_Insert_Input>
  prop_value_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Prop_Value_Max_Fields = {
  prop_value_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_prop_value" */
export type Tag_Prop_Value_Max_Order_By = {
  prop_value_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Prop_Value_Min_Fields = {
  prop_value_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_prop_value" */
export type Tag_Prop_Value_Min_Order_By = {
  prop_value_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_prop_value" */
export type Tag_Prop_Value_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Prop_Value>
}

/** on conflict condition type for table "tag_prop_value" */
export type Tag_Prop_Value_On_Conflict = {
  constraint: Tag_Prop_Value_Constraint
  update_columns: Array<Tag_Prop_Value_Update_Column>
  where?: Maybe<Tag_Prop_Value_Bool_Exp>
}

/** Ordering options when selecting data from "tag_prop_value". */
export type Tag_Prop_Value_Order_By = {
  propValue?: Maybe<Prop_Value_Order_By>
  prop_value_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_prop_value */
export type Tag_Prop_Value_Pk_Columns_Input = {
  prop_value_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_prop_value" */
export enum Tag_Prop_Value_Select_Column {
  /** column name */
  PropValueId = 'prop_value_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_prop_value" */
export type Tag_Prop_Value_Set_Input = {
  prop_value_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_prop_value" */
export enum Tag_Prop_Value_Update_Column {
  /** column name */
  PropValueId = 'prop_value_id',
  /** column name */
  TagId = 'tag_id',
}

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibraryId = 'library_id',
}

/** input type for updating data in table "tag" */
export type Tag_Set_Input = {
  category_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  library_id?: Maybe<Scalars['uuid']>
}

/** columns and relationships of "tag_style" */
export type Tag_Style = {
  /** An object relationship */
  style: Style
  style_id: Scalars['uuid']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['uuid']
}

/** aggregated selection of "tag_style" */
export type Tag_Style_Aggregate = {
  aggregate?: Maybe<Tag_Style_Aggregate_Fields>
  nodes: Array<Tag_Style>
}

/** aggregate fields of "tag_style" */
export type Tag_Style_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Tag_Style_Max_Fields>
  min?: Maybe<Tag_Style_Min_Fields>
}

/** aggregate fields of "tag_style" */
export type Tag_Style_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Style_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag_style" */
export type Tag_Style_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Tag_Style_Max_Order_By>
  min?: Maybe<Tag_Style_Min_Order_By>
}

/** input type for inserting array relation for remote table "tag_style" */
export type Tag_Style_Arr_Rel_Insert_Input = {
  data: Array<Tag_Style_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Tag_Style_On_Conflict>
}

/** Boolean expression to filter rows from the table "tag_style". All fields are combined with a logical 'AND'. */
export type Tag_Style_Bool_Exp = {
  _and?: Maybe<Array<Tag_Style_Bool_Exp>>
  _not?: Maybe<Tag_Style_Bool_Exp>
  _or?: Maybe<Array<Tag_Style_Bool_Exp>>
  style?: Maybe<Style_Bool_Exp>
  style_id?: Maybe<Uuid_Comparison_Exp>
  tag?: Maybe<Tag_Bool_Exp>
  tag_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "tag_style" */
export enum Tag_Style_Constraint {
  /** unique or primary key constraint */
  TagStylePkey = 'tag_style_pkey',
}

/** input type for inserting data into table "tag_style" */
export type Tag_Style_Insert_Input = {
  style?: Maybe<Style_Obj_Rel_Insert_Input>
  style_id?: Maybe<Scalars['uuid']>
  tag?: Maybe<Tag_Obj_Rel_Insert_Input>
  tag_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type Tag_Style_Max_Fields = {
  style_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "tag_style" */
export type Tag_Style_Max_Order_By = {
  style_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Tag_Style_Min_Fields = {
  style_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "tag_style" */
export type Tag_Style_Min_Order_By = {
  style_id?: Maybe<Order_By>
  tag_id?: Maybe<Order_By>
}

/** response of any mutation on the table "tag_style" */
export type Tag_Style_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Style>
}

/** on conflict condition type for table "tag_style" */
export type Tag_Style_On_Conflict = {
  constraint: Tag_Style_Constraint
  update_columns: Array<Tag_Style_Update_Column>
  where?: Maybe<Tag_Style_Bool_Exp>
}

/** Ordering options when selecting data from "tag_style". */
export type Tag_Style_Order_By = {
  style?: Maybe<Style_Order_By>
  style_id?: Maybe<Order_By>
  tag?: Maybe<Tag_Order_By>
  tag_id?: Maybe<Order_By>
}

/** primary key columns input for table: tag_style */
export type Tag_Style_Pk_Columns_Input = {
  style_id: Scalars['uuid']
  tag_id: Scalars['uuid']
}

/** select columns of table "tag_style" */
export enum Tag_Style_Select_Column {
  /** column name */
  StyleId = 'style_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "tag_style" */
export type Tag_Style_Set_Input = {
  style_id?: Maybe<Scalars['uuid']>
  tag_id?: Maybe<Scalars['uuid']>
}

/** update columns of table "tag_style" */
export enum Tag_Style_Update_Column {
  /** column name */
  StyleId = 'style_id',
  /** column name */
  TagId = 'tag_id',
}

/** update columns of table "tag" */
export enum Tag_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  LibraryId = 'library_id',
}

/** columns and relationships of "user" */
export type User = {
  /** An array relationship */
  apps: Array<App>
  /** An aggregate relationship */
  apps_aggregate: App_Aggregate
  id: Scalars['String']
  /** An array relationship */
  libraries: Array<Library>
  /** An aggregate relationship */
  libraries_aggregate: Library_Aggregate
  name?: Maybe<Scalars['String']>
}

/** columns and relationships of "user" */
export type UserAppsArgs = {
  distinct_on?: Maybe<Array<App_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<App_Order_By>>
  where?: Maybe<App_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserApps_AggregateArgs = {
  distinct_on?: Maybe<Array<App_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<App_Order_By>>
  where?: Maybe<App_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserLibrariesArgs = {
  distinct_on?: Maybe<Array<Library_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Library_Order_By>>
  where?: Maybe<Library_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserLibraries_AggregateArgs = {
  distinct_on?: Maybe<Array<Library_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Library_Order_By>>
  where?: Maybe<Library_Bool_Exp>
}

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<User_Max_Fields>
  min?: Maybe<User_Min_Fields>
}

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>
  _not?: Maybe<User_Bool_Exp>
  _or?: Maybe<Array<User_Bool_Exp>>
  apps?: Maybe<App_Bool_Exp>
  id?: Maybe<String_Comparison_Exp>
  libraries?: Maybe<Library_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  apps?: Maybe<App_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['String']>
  libraries?: Maybe<Library_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Max_Fields = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type User_Min_Fields = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>
}

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint
  update_columns: Array<User_Update_Column>
  where?: Maybe<User_Bool_Exp>
}

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  apps_aggregate?: Maybe<App_Aggregate_Order_By>
  id?: Maybe<Order_By>
  libraries_aggregate?: Maybe<Library_Aggregate_Order_By>
  name?: Maybe<Order_By>
}

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['String']
}

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

/** columns and relationships of "value_type" */
export type Value_Type = {
  description?: Maybe<Scalars['String']>
  value: Scalars['String']
}

/** aggregated selection of "value_type" */
export type Value_Type_Aggregate = {
  aggregate?: Maybe<Value_Type_Aggregate_Fields>
  nodes: Array<Value_Type>
}

/** aggregate fields of "value_type" */
export type Value_Type_Aggregate_Fields = {
  count: Scalars['Int']
  max?: Maybe<Value_Type_Max_Fields>
  min?: Maybe<Value_Type_Min_Fields>
}

/** aggregate fields of "value_type" */
export type Value_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Value_Type_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "value_type". All fields are combined with a logical 'AND'. */
export type Value_Type_Bool_Exp = {
  _and?: Maybe<Array<Value_Type_Bool_Exp>>
  _not?: Maybe<Value_Type_Bool_Exp>
  _or?: Maybe<Array<Value_Type_Bool_Exp>>
  description?: Maybe<String_Comparison_Exp>
  value?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "value_type" */
export enum Value_Type_Constraint {
  /** unique or primary key constraint */
  PropValueTypesPkey = 'prop_value_types_pkey',
}

export enum Value_Type_Enum {
  Boolean = 'Boolean',
  Lambda = 'Lambda',
  Number = 'Number',
  String = 'String',
}

/** Boolean expression to compare columns of type "value_type_enum". All fields are combined with logical 'AND'. */
export type Value_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Value_Type_Enum>
  _in?: Maybe<Array<Value_Type_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Value_Type_Enum>
  _nin?: Maybe<Array<Value_Type_Enum>>
}

/** input type for inserting data into table "value_type" */
export type Value_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Value_Type_Max_Fields = {
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Value_Type_Min_Fields = {
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "value_type" */
export type Value_Type_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Value_Type>
}

/** input type for inserting object relation for remote table "value_type" */
export type Value_Type_Obj_Rel_Insert_Input = {
  data: Value_Type_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Value_Type_On_Conflict>
}

/** on conflict condition type for table "value_type" */
export type Value_Type_On_Conflict = {
  constraint: Value_Type_Constraint
  update_columns: Array<Value_Type_Update_Column>
  where?: Maybe<Value_Type_Bool_Exp>
}

/** Ordering options when selecting data from "value_type". */
export type Value_Type_Order_By = {
  description?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: value_type */
export type Value_Type_Pk_Columns_Input = {
  value: Scalars['String']
}

/** select columns of table "value_type" */
export enum Value_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "value_type" */
export type Value_Type_Set_Input = {
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

/** update columns of table "value_type" */
export enum Value_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value',
}

export type DeleteUserAppsMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type DeleteUserAppsMutation = {
  delete_app?: Maybe<Pick<App_Mutation_Response, 'affected_rows'>>
}

export type User__AppFragment = Pick<App, 'id' | 'user_id' | 'name'> & {
  pages: Array<App__PageFragment>
}

export type GetAppPageQueryVariables = Exact<{
  appId: Scalars['uuid']
  pageId: Scalars['uuid']
}>

export type GetAppPageQuery = {
  app_by_pk?: Maybe<User__AppFragment>
  page_by_pk?: Maybe<App__PageFragment>
}

export type CreateAppMutationVariables = Exact<{
  input: App_Insert_Input
}>

export type CreateAppMutation = { insert_app_one?: Maybe<User__AppFragment> }

export type DeleteAppMutationVariables = Exact<{
  id: Scalars['uuid']
}>

export type DeleteAppMutation = { delete_app_by_pk?: Maybe<User__AppFragment> }

export type GetAppQueryVariables = Exact<{
  appId: Scalars['uuid']
}>

export type GetAppQuery = { app_by_pk?: Maybe<User__AppFragment> }

export type GetAppsListQueryVariables = Exact<{ [key: string]: never }>

export type GetAppsListQuery = { app: Array<User__AppFragment> }

export type GetAppsListForUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type GetAppsListForUserQuery = { app: Array<User__AppFragment> }

export type GetFirstAppQueryVariables = Exact<{ [key: string]: never }>

export type GetFirstAppQuery = {
  app: Array<
    Pick<App, 'id' | 'name'> & { pages: Array<Pick<Page, 'id' | 'name'>> }
  >
}

export type EditAppMutationVariables = Exact<{
  input: App_Set_Input
  id: Scalars['uuid']
}>

export type EditAppMutation = { update_app_by_pk?: Maybe<Pick<App, 'name'>> }

export type __AtomTypeFragment = Pick<Atom_Type, 'id' | 'label'>

export type CreateAtomTypeMutationVariables = Exact<{
  input: Atom_Type_Insert_Input
}>

export type CreateAtomTypeMutation = {
  insert_atom_type_one?: Maybe<__AtomTypeFragment>
}

export type DeleteAtomTypesWhereMutationVariables = Exact<{
  where: Atom_Type_Bool_Exp
}>

export type DeleteAtomTypesWhereMutation = {
  delete_atom_type?: Maybe<{ returning: Array<__AtomTypeFragment> }>
}

export type GetAtomTypeQueryVariables = Exact<{
  atomTypeId: Scalars['uuid']
}>

export type GetAtomTypeQuery = { atom_type_by_pk?: Maybe<__AtomTypeFragment> }

export type GetAtomTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetAtomTypesQuery = { atom_type: Array<__AtomTypeFragment> }

export type GetAtomTypesWhereQueryVariables = Exact<{
  where: Atom_Type_Bool_Exp
}>

export type GetAtomTypesWhereQuery = { atom_type: Array<__AtomTypeFragment> }

export type UpdateAtomTypeMutationVariables = Exact<{
  input: Atom_Type_Set_Input
  atomTypeId: Scalars['uuid']
}>

export type UpdateAtomTypeMutation = {
  update_atom_type_by_pk?: Maybe<__AtomTypeFragment>
}

export type __AtomFragment = Pick<Atom, 'id'> & {
  type: __AtomTypeFragment
  props?: Maybe<PropTypeCollectionFragment>
  styles: Array<{ style: Library__StyleFragment }>
  tags: Array<{ tag: __TagFragment }>
}

export type LibraryExplorer__AtomFragment = Pick<Atom, 'id'> & {
  type: Pick<Atom_Type, 'id' | 'label'>
}

export type CreateAtomMutationVariables = Exact<{
  data: Atom_Insert_Input
}>

export type CreateAtomMutation = {
  insert_atom_one?: Maybe<LibraryExplorer__AtomFragment>
}

export type DeleteAllAtomsMutationVariables = Exact<{ [key: string]: never }>

export type DeleteAllAtomsMutation = {
  delete_atom?: Maybe<Pick<Atom_Mutation_Response, 'affected_rows'>>
}

export type DeleteAtomMutationVariables = Exact<{
  atomId: Scalars['uuid']
}>

export type DeleteAtomMutation = {
  delete_atom_by_pk?: Maybe<LibraryExplorer__AtomFragment>
}

export type DeleteAtomsWhereMutationVariables = Exact<{
  where: Atom_Bool_Exp
}>

export type DeleteAtomsWhereMutation = {
  delete_atom?: Maybe<{ returning: Array<__AtomFragment> }>
}

export type GetAtomQueryVariables = Exact<{
  atomId: Scalars['uuid']
}>

export type GetAtomQuery = { atom_by_pk?: Maybe<__AtomFragment> }

export type GetAtomsListQueryVariables = Exact<{ [key: string]: never }>

export type GetAtomsListQuery = { atom: Array<__AtomFragment> }

export type GetAtomsTypesQueryVariables = Exact<{ [key: string]: never }>

export type GetAtomsTypesQuery = { atom_type: Array<__AtomTypeFragment> }

export type GetAtomsWhereQueryVariables = Exact<{
  where: Atom_Bool_Exp
}>

export type GetAtomsWhereQuery = { atom: Array<__AtomFragment> }

export type UpdateAtomMutationVariables = Exact<{
  input: Atom_Set_Input
  atomId: Scalars['uuid']
}>

export type UpdateAtomMutation = {
  update_atom_by_pk?: Maybe<LibraryExplorer__AtomFragment>
}

export type Library__CategoryFragment = Pick<Category, 'id' | 'name'> & {
  tags: Array<__TagFragment>
}

export type __TagFragment = Pick<
  Tag,
  'id' | 'category_id' | 'label' | 'library_id'
>

export type AddChildComponentElementMutationVariables = Exact<{
  data: Component_Link_Insert_Input
}>

export type AddChildComponentElementMutation = {
  insert_component_link_one?: Maybe<PageElement__ComponentLinkFragment>
}

export type CreateComponentElementMutationVariables = Exact<{
  input: Component_Element_Insert_Input
}>

export type CreateComponentElementMutation = {
  insert_component_element_one?: Maybe<__ComponentElementFragment>
}

export type CreateComponentLinkMutationVariables = Exact<{
  input: Component_Link_Insert_Input
}>

export type CreateComponentLinkMutation = {
  insert_component_link_one?: Maybe<PageElement__ComponentLinkFragment>
}

export type DeleteComponentElementsMutationVariables = Exact<{
  where: Component_Element_Bool_Exp
}>

export type DeleteComponentElementsMutation = {
  delete_component_element?: Maybe<{
    returning: Array<__ComponentElementFragment>
  }>
}

export type GetComponentElementQueryVariables = Exact<{
  componentElementId: Scalars['uuid']
}>

export type GetComponentElementQuery = {
  component_element_by_pk?: Maybe<__ComponentElementFragment>
}

export type GetComponentElementsWhereQueryVariables = Exact<{
  where: Component_Element_Bool_Exp
}>

export type GetComponentElementsWhereQuery = {
  component_element: Array<__ComponentElementFragment>
}

export type UpdateComponentElementMutationVariables = Exact<{
  componentElementId: Scalars['uuid']
  input: Component_Element_Set_Input
}>

export type UpdateComponentElementMutation = {
  update_component_element_by_pk?: Maybe<__ComponentElementFragment>
}

export type __ComponentFragment = Pick<Component, 'id' | 'label'> & {
  elements: Array<__ComponentElementFragment>
  links: Array<PageElement__ComponentLinkFragment>
}

export type __ComponentElementFragment = Pick<
  Component_Element,
  'id' | 'label'
> & {
  hocs: Array<{ hoc: ComponentElement__HocFragment }>
  props?: Maybe<PropCollectionFragment>
  styles: Array<{ style: Library__StyleFragment }>
  atom: __AtomFragment
}

export type PageElement__ComponentLinkFragment = Pick<
  Component_Link,
  | 'id'
  | 'order'
  | 'props'
  | 'source_component_element_id'
  | 'target_component_element_id'
>

export type ComponentElement__HocFragment = Pick<Hoc, 'id'> & {
  tags: Array<{ tag: __TagFragment }>
}

export type LibraryExplorer__ComponentFragment = Pick<Component, 'id' | 'label'>

export type CreateComponentMutationVariables = Exact<{
  input: Component_Insert_Input
}>

export type CreateComponentMutation = {
  insert_component_one?: Maybe<LibraryExplorer__ComponentFragment>
}

export type DeleteAllComponentsMutationVariables = Exact<{
  [key: string]: never
}>

export type DeleteAllComponentsMutation = {
  delete_component?: Maybe<Pick<Component_Mutation_Response, 'affected_rows'>>
}

export type DeleteComponentMutationVariables = Exact<{
  componentId: Scalars['uuid']
}>

export type DeleteComponentMutation = {
  delete_component_by_pk?: Maybe<LibraryExplorer__ComponentFragment>
}

export type DeleteComponentsWhereMutationVariables = Exact<{
  where: Component_Bool_Exp
}>

export type DeleteComponentsWhereMutation = {
  delete_component?: Maybe<{ returning: Array<__ComponentFragment> }>
}

export type GetComponentQueryVariables = Exact<{
  componentId: Scalars['uuid']
}>

export type GetComponentQuery = { component_by_pk?: Maybe<__ComponentFragment> }

export type GetComponentDetailQueryVariables = Exact<{
  componentId: Scalars['uuid']
}>

export type GetComponentDetailQuery = {
  component_by_pk?: Maybe<__ComponentFragment>
}

export type GetComponentsQueryVariables = Exact<{ [key: string]: never }>

export type GetComponentsQuery = { component: Array<__ComponentFragment> }

export type UpdateComponentMutationVariables = Exact<{
  componentId: Scalars['uuid']
  input: Component_Set_Input
}>

export type UpdateComponentMutation = {
  update_component_by_pk?: Maybe<LibraryExplorer__ComponentFragment>
}

export type CreateLambdaMutationVariables = Exact<{
  input: Array<Lambda_Insert_Input> | Lambda_Insert_Input
}>

export type CreateLambdaMutation = {
  insert_lambda?: Maybe<{
    returning: Array<Pick<Lambda, 'id' | 'libraryId' | 'name' | 'body'>>
  }>
}

export type DeleteLambdaMutationVariables = Exact<{
  id: Scalars['uuid']
}>

export type DeleteLambdaMutation = {
  delete_lambda?: Maybe<{
    returning: Array<Pick<Lambda, 'id' | 'name' | 'body'>>
  }>
}

export type ExecuteLambdaMutationVariables = Exact<{
  lambda: LambdaInput
  payload: Scalars['String']
}>

export type ExecuteLambdaMutation = {
  executeLambda?: Maybe<Pick<LambdaOutput, 'payload'>>
}

export type GetLambdaByIdQueryVariables = Exact<{
  id: Scalars['uuid']
}>

export type GetLambdaByIdQuery = {
  lambda: Array<Pick<Lambda, 'body' | 'id' | 'libraryId' | 'name'>>
}

export type GetLambdasQueryVariables = Exact<{ [key: string]: never }>

export type GetLambdasQuery = {
  lambda: Array<Pick<Lambda, 'body' | 'id' | 'libraryId' | 'name'>>
}

export type GetLambdasByLibraryIdQueryVariables = Exact<{
  libraryId: Scalars['uuid']
}>

export type GetLambdasByLibraryIdQuery = {
  lambda: Array<Pick<Lambda, 'body' | 'id' | 'libraryId' | 'name'>>
}

export type UpdateLambdaMutationVariables = Exact<{
  id: Scalars['uuid']
  body?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}>

export type UpdateLambdaMutation = {
  update_lambda?: Maybe<{
    returning: Array<Pick<Lambda, 'id' | 'libraryId' | 'name' | 'body'>>
  }>
}

export type Library__LambdaFragment = Pick<Lambda, 'id' | 'body' | 'name'>

export type GetFirstLibraryQueryVariables = Exact<{ [key: string]: never }>

export type GetFirstLibraryQuery = { library: Array<__LibraryFragment> }

export type GetLibraryQueryVariables = Exact<{
  libraryId: Scalars['uuid']
}>

export type GetLibraryQuery = { library_by_pk?: Maybe<__LibraryFragment> }

export type __LibraryFragment = Pick<Library, 'id' | 'name'>

export type CreateLibraryMutationVariables = Exact<{
  data: Library_Insert_Input
}>

export type CreateLibraryMutation = {
  insert_library_one?: Maybe<__LibraryFragment>
}

export type DeleteLibraryMutationVariables = Exact<{
  libraryId: Scalars['uuid']
}>

export type DeleteLibraryMutation = {
  delete_library_by_pk?: Maybe<Pick<Library, 'id'>>
}

export type DeleteUserLibrariesMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type DeleteUserLibrariesMutation = {
  delete_library?: Maybe<Pick<Library_Mutation_Response, 'affected_rows'>>
}

export type LibraryExplorerQueryVariables = Exact<{ [key: string]: never }>

export type LibraryExplorerQuery = {
  library: Array<
    Pick<Library, 'id' | 'name'> & {
      components: Array<LibraryExplorer__ComponentFragment>
      atoms: Array<LibraryExplorer__AtomFragment>
    }
  >
}

export type UpdateLibraryMutationVariables = Exact<{
  input: Library_Set_Input
  libraryId: Scalars['uuid']
}>

export type UpdateLibraryMutation = {
  update_library_by_pk?: Maybe<__LibraryFragment>
}

export type App__PageFragment = Pick<Page, 'id' | 'name' | 'app_id'> & {
  elements: Array<Page__PageElementFragment>
  links: Array<Page__PageLinkFragment>
}

export type Page__PageElementFragment = Pick<
  Page_Element,
  'id' | 'name' | 'page_id'
> & { component: __ComponentFragment; props?: Maybe<PropCollectionFragment> }

export type Page__PageLinkFragment = Pick<
  Page_Link,
  | 'id'
  | 'order'
  | 'props'
  | 'source_page_element_id'
  | 'source_component_element_id'
  | 'target_page_element_id'
>

export type CreatePageMutationVariables = Exact<{
  data: Page_Insert_Input
}>

export type CreatePageMutation = { insert_page_one?: Maybe<App__PageFragment> }

export type DeletePageMutationVariables = Exact<{
  pageId: Scalars['uuid']
}>

export type DeletePageMutation = {
  delete_page_by_pk?: Maybe<App__PageFragment>
}

export type GetPageQueryVariables = Exact<{
  pageId: Scalars['uuid']
}>

export type GetPageQuery = { page_by_pk?: Maybe<App__PageFragment> }

export type GetPagesListQueryVariables = Exact<{
  appId: Scalars['uuid']
}>

export type GetPagesListQuery = {
  app_by_pk?: Maybe<{ pages: Array<Pick<Page, 'id' | 'name'>> }>
}

export type CreatePageElementMutationVariables = Exact<{
  input: Page_Element_Insert_Input
}>

export type CreatePageElementMutation = {
  insert_page_element_one?: Maybe<Page__PageElementFragment>
}

export type DeletePageElementMutationVariables = Exact<{
  pageElementId: Scalars['uuid']
}>

export type DeletePageElementMutation = {
  delete_page_element_by_pk?: Maybe<Page__PageElementFragment>
}

export type GetPageElementQueryVariables = Exact<{
  pageElementId: Scalars['uuid']
}>

export type GetPageElementQuery = {
  page_element_by_pk?: Maybe<Page__PageElementFragment>
}

export type UpdatePageElementMutationVariables = Exact<{
  id: Scalars['uuid']
  input?: Maybe<Page_Element_Set_Input>
}>

export type UpdatePageElementMutation = {
  update_page_element_by_pk?: Maybe<Page__PageElementFragment>
}

export type UpdatePageMutationVariables = Exact<{
  input: Page_Set_Input
  pageId: Scalars['uuid']
}>

export type UpdatePageMutation = {
  update_page_by_pk?: Maybe<App__PageFragment>
}

export type PropTypeCollection__PropTypeFragment = Pick<
  Prop_Type,
  'id' | 'key' | 'prop_type_c_id' | 'is_array' | 'value_type'
> & { type: ValueTypeFragment }

export type PropTypeCollectionFragment = Pick<
  Prop_Type_C,
  'id' | 'label' | 'library_id'
> & {
  propTypes: Array<PropTypeCollection__PropTypeFragment>
  tags: Array<{ tag: __TagFragment }>
}

export type ValueTypeFragment = Pick<Value_Type, 'description' | 'value'>

export type CreatePropTypeCMutationVariables = Exact<{
  data: Prop_Type_C_Insert_Input
}>

export type CreatePropTypeCMutation = {
  insert_prop_type_c_one?: Maybe<Pick<Prop_Type_C, 'id'>>
}

export type DeletePropTypeCMutationVariables = Exact<{
  propTypeCId: Scalars['uuid']
}>

export type DeletePropTypeCMutation = {
  delete_prop_type_c_by_pk?: Maybe<PropTypeCollectionFragment>
}

export type GetPropTypeCQueryVariables = Exact<{
  propTypeCId: Scalars['uuid']
}>

export type GetPropTypeCQuery = {
  prop_type_c_by_pk?: Maybe<PropTypeCollectionFragment>
}

export type GetPropTypeCListQueryVariables = Exact<{
  where?: Maybe<Prop_Type_C_Bool_Exp>
}>

export type GetPropTypeCListQuery = {
  prop_type_c: Array<PropTypeCollectionFragment>
}

export type UpdatePropTypeCMutationVariables = Exact<{
  input: Prop_Type_C_Set_Input
  propTypeCId: Scalars['uuid']
}>

export type UpdatePropTypeCMutation = {
  update_prop_type_c_by_pk?: Maybe<PropTypeCollectionFragment>
}

export type UpsertPropTypeCMutationVariables = Exact<{
  object: Prop_Type_C_Insert_Input
}>

export type UpsertPropTypeCMutation = {
  insert_prop_type_c?: Maybe<
    Pick<Prop_Type_C_Mutation_Response, 'affected_rows'>
  >
}

export type CreatePageElementPropMutationVariables = Exact<{
  propInput: Prop_Insert_Input
}>

export type CreatePageElementPropMutation = {
  insert_prop_one?: Maybe<PropCollection__PropFragment>
}

export type CreatePropMutationVariables = Exact<{
  input: Prop_Insert_Input
}>

export type CreatePropMutation = { insert_prop_one?: Maybe<Pick<Prop, 'id'>> }

export type PropCollection__PropFragment = Pick<Prop, 'id' | 'prop_c_id'> & {
  type: PropTypeCollection__PropTypeFragment
  values: Array<Prop__PropValueFragment>
}

export type PropCollectionFragment = Pick<
  Prop_C,
  'id' | 'label' | 'libary_id'
> & {
  props: Array<PropCollection__PropFragment>
  tags: Array<{ tag: __TagFragment }>
}

export type Prop__PropValueFragment = Pick<
  Prop_Value,
  'id' | 'prop_id' | 'type' | 'value'
> & { tags: Array<{ tag: __TagFragment }>; typeEntity: ValueTypeFragment }

export type PageElementPropQueryVariables = Exact<{
  pageElementId: Scalars['uuid']
}>

export type PageElementPropQuery = {
  page_element_by_pk?: Maybe<Page__PageElementFragment>
}

export type UpdatePropMutationVariables = Exact<{
  input: Prop_Set_Input
  propId: Scalars['uuid']
}>

export type UpdatePropMutation = {
  update_prop_by_pk?: Maybe<Pick<Prop, 'id'> & PropCollection__PropFragment>
}

export type UpdatePropValueMutationVariables = Exact<{
  propValueId: Scalars['uuid']
  input: Prop_Value_Set_Input
}>

export type UpdatePropValueMutation = {
  update_prop_value_by_pk?: Maybe<Prop__PropValueFragment>
}

export type GetStyleQueryVariables = Exact<{
  styleId: Scalars['uuid']
}>

export type GetStyleQuery = {
  style_by_pk?: Maybe<Pick<Style, 'id' | 'name' | 'library_id'>>
}

export type Library__StyleFragment = Pick<Style, 'id' | 'name'> & {
  propCollection?: Maybe<PropCollectionFragment>
}

export type CreateStyleMutationVariables = Exact<{
  data: Style_Insert_Input
}>

export type CreateStyleMutation = {
  insert_style_one?: Maybe<Pick<Style, 'id'>>
}

export type DeleteStyleMutationVariables = Exact<{
  styleId: Scalars['uuid']
}>

export type DeleteStyleMutation = {
  delete_style_by_pk?: Maybe<Pick<Style, 'id'>>
}

export type GetStylesListQueryVariables = Exact<{ [key: string]: never }>

export type GetStylesListQuery = {
  style: Array<Pick<Style, 'id' | 'library_id' | 'name'>>
}

export type UpdateStyleMutationVariables = Exact<{
  input: Style_Set_Input
  styleId: Scalars['uuid']
}>

export type UpdateStyleMutation = {
  update_style_by_pk?: Maybe<Pick<Style, 'id' | 'name'>>
}

export type UpsertUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type UpsertUserMutation = {
  insert_user?: Maybe<Pick<User_Mutation_Response, 'affected_rows'>>
}

export type __UserFragment = Pick<User, 'id' | 'name'> & {
  apps: Array<User__AppFragment>
}

export const LibraryExplorer__AtomFragmentDoc = gql`
  fragment LibraryExplorer__Atom on atom {
    id
    type {
      id
      label
    }
  }
`
export const __TagFragmentDoc = gql`
  fragment __Tag on tag {
    id
    category_id
    label
    library_id
  }
`
export const Library__CategoryFragmentDoc = gql`
  fragment Library__Category on category {
    id
    name
    tags {
      ...__Tag
    }
  }
  ${__TagFragmentDoc}
`
export const LibraryExplorer__ComponentFragmentDoc = gql`
  fragment LibraryExplorer__Component on component {
    id
    label
  }
`
export const Library__LambdaFragmentDoc = gql`
  fragment Library__Lambda on lambda {
    id
    body
    name
  }
`
export const __LibraryFragmentDoc = gql`
  fragment __Library on library {
    id
    name
  }
`
export const ComponentElement__HocFragmentDoc = gql`
  fragment ComponentElement__Hoc on hoc {
    id
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${__TagFragmentDoc}
`
export const ValueTypeFragmentDoc = gql`
  fragment ValueType on value_type {
    description
    value
  }
`
export const PropTypeCollection__PropTypeFragmentDoc = gql`
  fragment PropTypeCollection__PropType on prop_type {
    id
    key
    prop_type_c_id
    is_array
    type {
      ...ValueType
    }
    value_type
  }
  ${ValueTypeFragmentDoc}
`
export const Prop__PropValueFragmentDoc = gql`
  fragment Prop__PropValue on prop_value {
    id
    prop_id
    tags {
      tag {
        ...__Tag
      }
    }
    type
    typeEntity {
      ...ValueType
    }
    value
  }
  ${__TagFragmentDoc}
  ${ValueTypeFragmentDoc}
`
export const PropCollection__PropFragmentDoc = gql`
  fragment PropCollection__Prop on prop {
    id
    prop_c_id
    type {
      ...PropTypeCollection__PropType
    }
    values {
      ...Prop__PropValue
    }
  }
  ${PropTypeCollection__PropTypeFragmentDoc}
  ${Prop__PropValueFragmentDoc}
`
export const PropCollectionFragmentDoc = gql`
  fragment PropCollection on prop_c {
    id
    label
    libary_id
    props {
      ...PropCollection__Prop
    }
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${PropCollection__PropFragmentDoc}
  ${__TagFragmentDoc}
`
export const Library__StyleFragmentDoc = gql`
  fragment Library__Style on style {
    id
    name
    propCollection {
      ...PropCollection
    }
  }
  ${PropCollectionFragmentDoc}
`
export const __AtomTypeFragmentDoc = gql`
  fragment __AtomType on atom_type {
    id
    label
  }
`
export const PropTypeCollectionFragmentDoc = gql`
  fragment PropTypeCollection on prop_type_c {
    id
    label
    library_id
    propTypes {
      ...PropTypeCollection__PropType
    }
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${PropTypeCollection__PropTypeFragmentDoc}
  ${__TagFragmentDoc}
`
export const __AtomFragmentDoc = gql`
  fragment __Atom on atom {
    id
    type {
      ...__AtomType
    }
    props {
      ...PropTypeCollection
    }
    styles {
      style {
        ...Library__Style
      }
    }
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${__AtomTypeFragmentDoc}
  ${PropTypeCollectionFragmentDoc}
  ${Library__StyleFragmentDoc}
  ${__TagFragmentDoc}
`
export const __ComponentElementFragmentDoc = gql`
  fragment __ComponentElement on component_element {
    id
    label
    hocs {
      hoc {
        ...ComponentElement__Hoc
      }
    }
    props {
      ...PropCollection
    }
    styles {
      style {
        ...Library__Style
      }
    }
    atom {
      ...__Atom
    }
  }
  ${ComponentElement__HocFragmentDoc}
  ${PropCollectionFragmentDoc}
  ${Library__StyleFragmentDoc}
  ${__AtomFragmentDoc}
`
export const PageElement__ComponentLinkFragmentDoc = gql`
  fragment PageElement__ComponentLink on component_link {
    id
    order
    props
    source_component_element_id
    target_component_element_id
  }
`
export const __ComponentFragmentDoc = gql`
  fragment __Component on component {
    id
    label
    elements {
      ...__ComponentElement
    }
    links {
      ...PageElement__ComponentLink
    }
  }
  ${__ComponentElementFragmentDoc}
  ${PageElement__ComponentLinkFragmentDoc}
`
export const Page__PageElementFragmentDoc = gql`
  fragment Page__PageElement on page_element {
    id
    name
    page_id
    component {
      ...__Component
    }
    props {
      ...PropCollection
    }
  }
  ${__ComponentFragmentDoc}
  ${PropCollectionFragmentDoc}
`
export const Page__PageLinkFragmentDoc = gql`
  fragment Page__PageLink on page_link {
    id
    order
    props
    source_page_element_id
    source_component_element_id
    target_page_element_id
  }
`
export const App__PageFragmentDoc = gql`
  fragment App__Page on page {
    id
    name
    app_id
    elements {
      ...Page__PageElement
    }
    links {
      ...Page__PageLink
    }
  }
  ${Page__PageElementFragmentDoc}
  ${Page__PageLinkFragmentDoc}
`
export const User__AppFragmentDoc = gql`
  fragment User__App on app {
    id
    user_id
    name
    pages {
      ...App__Page
    }
  }
  ${App__PageFragmentDoc}
`
export const __UserFragmentDoc = gql`
  fragment __User on user {
    id
    name
    apps {
      ...User__App
    }
  }
  ${User__AppFragmentDoc}
`
export const DeleteUserAppsGql = gql`
  mutation DeleteUserApps($userId: String!) {
    delete_app(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
  }
`
export type DeleteUserAppsMutationFn = Apollo.MutationFunction<
  DeleteUserAppsMutation,
  DeleteUserAppsMutationVariables
>

/**
 * __useDeleteUserAppsMutation__
 *
 * To run a mutation, you first call `useDeleteUserAppsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAppsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAppsMutation, { data, loading, error }] = useDeleteUserAppsMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserAppsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserAppsMutation,
    DeleteUserAppsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteUserAppsMutation,
    DeleteUserAppsMutationVariables
  >(DeleteUserAppsGql, options)
}
export type DeleteUserAppsMutationHookResult = ReturnType<
  typeof useDeleteUserAppsMutation
>
export type DeleteUserAppsMutationResult =
  Apollo.MutationResult<DeleteUserAppsMutation>
export type DeleteUserAppsMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserAppsMutation,
  DeleteUserAppsMutationVariables
>
export const GetAppPageGql = gql`
  query GetAppPage($appId: uuid!, $pageId: uuid!) {
    app_by_pk(id: $appId) {
      ...User__App
    }
    page_by_pk(id: $pageId) {
      ...App__Page
    }
  }
  ${User__AppFragmentDoc}
  ${App__PageFragmentDoc}
`

/**
 * __useGetAppPageQuery__
 *
 * To run a query within a React component, call `useGetAppPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppPageQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useGetAppPageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAppPageQuery,
    GetAppPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAppPageQuery, GetAppPageQueryVariables>(
    GetAppPageGql,
    options,
  )
}
export function useGetAppPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppPageQuery,
    GetAppPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAppPageQuery, GetAppPageQueryVariables>(
    GetAppPageGql,
    options,
  )
}
export type GetAppPageQueryHookResult = ReturnType<typeof useGetAppPageQuery>
export type GetAppPageLazyQueryHookResult = ReturnType<
  typeof useGetAppPageLazyQuery
>
export type GetAppPageQueryResult = Apollo.QueryResult<
  GetAppPageQuery,
  GetAppPageQueryVariables
>
export function refetchGetAppPageQuery(variables?: GetAppPageQueryVariables) {
  return { query: GetAppPageGql, variables: variables }
}
export const CreateAppGql = gql`
  mutation CreateApp($input: app_insert_input!) {
    insert_app_one(object: $input) {
      ...User__App
    }
  }
  ${User__AppFragmentDoc}
`
export type CreateAppMutationFn = Apollo.MutationFunction<
  CreateAppMutation,
  CreateAppMutationVariables
>

/**
 * __useCreateAppMutation__
 *
 * To run a mutation, you first call `useCreateAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppMutation, { data, loading, error }] = useCreateAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAppMutation,
    CreateAppMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAppMutation, CreateAppMutationVariables>(
    CreateAppGql,
    options,
  )
}
export type CreateAppMutationHookResult = ReturnType<
  typeof useCreateAppMutation
>
export type CreateAppMutationResult = Apollo.MutationResult<CreateAppMutation>
export type CreateAppMutationOptions = Apollo.BaseMutationOptions<
  CreateAppMutation,
  CreateAppMutationVariables
>
export const DeleteAppGql = gql`
  mutation DeleteApp($id: uuid!) {
    delete_app_by_pk(id: $id) {
      ...User__App
    }
  }
  ${User__AppFragmentDoc}
`
export type DeleteAppMutationFn = Apollo.MutationFunction<
  DeleteAppMutation,
  DeleteAppMutationVariables
>

/**
 * __useDeleteAppMutation__
 *
 * To run a mutation, you first call `useDeleteAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAppMutation, { data, loading, error }] = useDeleteAppMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAppMutation,
    DeleteAppMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteAppMutation, DeleteAppMutationVariables>(
    DeleteAppGql,
    options,
  )
}
export type DeleteAppMutationHookResult = ReturnType<
  typeof useDeleteAppMutation
>
export type DeleteAppMutationResult = Apollo.MutationResult<DeleteAppMutation>
export type DeleteAppMutationOptions = Apollo.BaseMutationOptions<
  DeleteAppMutation,
  DeleteAppMutationVariables
>
export const GetAppGql = gql`
  query GetApp($appId: uuid!) {
    app_by_pk(id: $appId) {
      ...User__App
    }
  }
  ${User__AppFragmentDoc}
`

/**
 * __useGetAppQuery__
 *
 * To run a query within a React component, call `useGetAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetAppQuery(
  baseOptions: Apollo.QueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAppQuery, GetAppQueryVariables>(GetAppGql, options)
}
export function useGetAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAppQuery, GetAppQueryVariables>(
    GetAppGql,
    options,
  )
}
export type GetAppQueryHookResult = ReturnType<typeof useGetAppQuery>
export type GetAppLazyQueryHookResult = ReturnType<typeof useGetAppLazyQuery>
export type GetAppQueryResult = Apollo.QueryResult<
  GetAppQuery,
  GetAppQueryVariables
>
export function refetchGetAppQuery(variables?: GetAppQueryVariables) {
  return { query: GetAppGql, variables: variables }
}
export const GetAppsListGql = gql`
  query GetAppsList {
    app {
      ...User__App
    }
  }
  ${User__AppFragmentDoc}
`

/**
 * __useGetAppsListQuery__
 *
 * To run a query within a React component, call `useGetAppsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAppsListQuery,
    GetAppsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAppsListQuery, GetAppsListQueryVariables>(
    GetAppsListGql,
    options,
  )
}
export function useGetAppsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppsListQuery,
    GetAppsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAppsListQuery, GetAppsListQueryVariables>(
    GetAppsListGql,
    options,
  )
}
export type GetAppsListQueryHookResult = ReturnType<typeof useGetAppsListQuery>
export type GetAppsListLazyQueryHookResult = ReturnType<
  typeof useGetAppsListLazyQuery
>
export type GetAppsListQueryResult = Apollo.QueryResult<
  GetAppsListQuery,
  GetAppsListQueryVariables
>
export function refetchGetAppsListQuery(variables?: GetAppsListQueryVariables) {
  return { query: GetAppsListGql, variables: variables }
}
export const GetAppsListForUserGql = gql`
  query GetAppsListForUser($userId: String!) {
    app(where: { user_id: { _eq: $userId } }) {
      ...User__App
    }
  }
  ${User__AppFragmentDoc}
`

/**
 * __useGetAppsListForUserQuery__
 *
 * To run a query within a React component, call `useGetAppsListForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppsListForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppsListForUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAppsListForUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAppsListForUserQuery,
    GetAppsListForUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAppsListForUserQuery,
    GetAppsListForUserQueryVariables
  >(GetAppsListForUserGql, options)
}
export function useGetAppsListForUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppsListForUserQuery,
    GetAppsListForUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAppsListForUserQuery,
    GetAppsListForUserQueryVariables
  >(GetAppsListForUserGql, options)
}
export type GetAppsListForUserQueryHookResult = ReturnType<
  typeof useGetAppsListForUserQuery
>
export type GetAppsListForUserLazyQueryHookResult = ReturnType<
  typeof useGetAppsListForUserLazyQuery
>
export type GetAppsListForUserQueryResult = Apollo.QueryResult<
  GetAppsListForUserQuery,
  GetAppsListForUserQueryVariables
>
export function refetchGetAppsListForUserQuery(
  variables?: GetAppsListForUserQueryVariables,
) {
  return { query: GetAppsListForUserGql, variables: variables }
}
export const GetFirstAppGql = gql`
  query GetFirstApp {
    app(limit: 1) {
      id
      name
      pages {
        id
        name
      }
    }
  }
`

/**
 * __useGetFirstAppQuery__
 *
 * To run a query within a React component, call `useGetFirstAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFirstAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFirstAppQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFirstAppQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFirstAppQuery,
    GetFirstAppQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFirstAppQuery, GetFirstAppQueryVariables>(
    GetFirstAppGql,
    options,
  )
}
export function useGetFirstAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFirstAppQuery,
    GetFirstAppQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetFirstAppQuery, GetFirstAppQueryVariables>(
    GetFirstAppGql,
    options,
  )
}
export type GetFirstAppQueryHookResult = ReturnType<typeof useGetFirstAppQuery>
export type GetFirstAppLazyQueryHookResult = ReturnType<
  typeof useGetFirstAppLazyQuery
>
export type GetFirstAppQueryResult = Apollo.QueryResult<
  GetFirstAppQuery,
  GetFirstAppQueryVariables
>
export function refetchGetFirstAppQuery(variables?: GetFirstAppQueryVariables) {
  return { query: GetFirstAppGql, variables: variables }
}
export const EditAppGql = gql`
  mutation EditApp($input: app_set_input!, $id: uuid!) {
    update_app_by_pk(_set: $input, pk_columns: { id: $id }) {
      name
    }
  }
`
export type EditAppMutationFn = Apollo.MutationFunction<
  EditAppMutation,
  EditAppMutationVariables
>

/**
 * __useEditAppMutation__
 *
 * To run a mutation, you first call `useEditAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editAppMutation, { data, loading, error }] = useEditAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditAppMutation,
    EditAppMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EditAppMutation, EditAppMutationVariables>(
    EditAppGql,
    options,
  )
}
export type EditAppMutationHookResult = ReturnType<typeof useEditAppMutation>
export type EditAppMutationResult = Apollo.MutationResult<EditAppMutation>
export type EditAppMutationOptions = Apollo.BaseMutationOptions<
  EditAppMutation,
  EditAppMutationVariables
>
export const CreateAtomTypeGql = gql`
  mutation CreateAtomType($input: atom_type_insert_input!) {
    insert_atom_type_one(object: $input) {
      ...__AtomType
    }
  }
  ${__AtomTypeFragmentDoc}
`
export type CreateAtomTypeMutationFn = Apollo.MutationFunction<
  CreateAtomTypeMutation,
  CreateAtomTypeMutationVariables
>

/**
 * __useCreateAtomTypeMutation__
 *
 * To run a mutation, you first call `useCreateAtomTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAtomTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAtomTypeMutation, { data, loading, error }] = useCreateAtomTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAtomTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAtomTypeMutation,
    CreateAtomTypeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateAtomTypeMutation,
    CreateAtomTypeMutationVariables
  >(CreateAtomTypeGql, options)
}
export type CreateAtomTypeMutationHookResult = ReturnType<
  typeof useCreateAtomTypeMutation
>
export type CreateAtomTypeMutationResult =
  Apollo.MutationResult<CreateAtomTypeMutation>
export type CreateAtomTypeMutationOptions = Apollo.BaseMutationOptions<
  CreateAtomTypeMutation,
  CreateAtomTypeMutationVariables
>
export const DeleteAtomTypesWhereGql = gql`
  mutation DeleteAtomTypesWhere($where: atom_type_bool_exp!) {
    delete_atom_type(where: $where) {
      returning {
        ...__AtomType
      }
    }
  }
  ${__AtomTypeFragmentDoc}
`
export type DeleteAtomTypesWhereMutationFn = Apollo.MutationFunction<
  DeleteAtomTypesWhereMutation,
  DeleteAtomTypesWhereMutationVariables
>

/**
 * __useDeleteAtomTypesWhereMutation__
 *
 * To run a mutation, you first call `useDeleteAtomTypesWhereMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAtomTypesWhereMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAtomTypesWhereMutation, { data, loading, error }] = useDeleteAtomTypesWhereMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAtomTypesWhereMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAtomTypesWhereMutation,
    DeleteAtomTypesWhereMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteAtomTypesWhereMutation,
    DeleteAtomTypesWhereMutationVariables
  >(DeleteAtomTypesWhereGql, options)
}
export type DeleteAtomTypesWhereMutationHookResult = ReturnType<
  typeof useDeleteAtomTypesWhereMutation
>
export type DeleteAtomTypesWhereMutationResult =
  Apollo.MutationResult<DeleteAtomTypesWhereMutation>
export type DeleteAtomTypesWhereMutationOptions = Apollo.BaseMutationOptions<
  DeleteAtomTypesWhereMutation,
  DeleteAtomTypesWhereMutationVariables
>
export const GetAtomTypeGql = gql`
  query GetAtomType($atomTypeId: uuid!) {
    atom_type_by_pk(id: $atomTypeId) {
      ...__AtomType
    }
  }
  ${__AtomTypeFragmentDoc}
`

/**
 * __useGetAtomTypeQuery__
 *
 * To run a query within a React component, call `useGetAtomTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomTypeQuery({
 *   variables: {
 *      atomTypeId: // value for 'atomTypeId'
 *   },
 * });
 */
export function useGetAtomTypeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAtomTypeQuery,
    GetAtomTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomTypeQuery, GetAtomTypeQueryVariables>(
    GetAtomTypeGql,
    options,
  )
}
export function useGetAtomTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomTypeQuery,
    GetAtomTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomTypeQuery, GetAtomTypeQueryVariables>(
    GetAtomTypeGql,
    options,
  )
}
export type GetAtomTypeQueryHookResult = ReturnType<typeof useGetAtomTypeQuery>
export type GetAtomTypeLazyQueryHookResult = ReturnType<
  typeof useGetAtomTypeLazyQuery
>
export type GetAtomTypeQueryResult = Apollo.QueryResult<
  GetAtomTypeQuery,
  GetAtomTypeQueryVariables
>
export function refetchGetAtomTypeQuery(variables?: GetAtomTypeQueryVariables) {
  return { query: GetAtomTypeGql, variables: variables }
}
export const GetAtomTypesGql = gql`
  query GetAtomTypes {
    atom_type {
      ...__AtomType
    }
  }
  ${__AtomTypeFragmentDoc}
`

/**
 * __useGetAtomTypesQuery__
 *
 * To run a query within a React component, call `useGetAtomTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAtomTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAtomTypesQuery,
    GetAtomTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomTypesQuery, GetAtomTypesQueryVariables>(
    GetAtomTypesGql,
    options,
  )
}
export function useGetAtomTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomTypesQuery,
    GetAtomTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomTypesQuery, GetAtomTypesQueryVariables>(
    GetAtomTypesGql,
    options,
  )
}
export type GetAtomTypesQueryHookResult = ReturnType<
  typeof useGetAtomTypesQuery
>
export type GetAtomTypesLazyQueryHookResult = ReturnType<
  typeof useGetAtomTypesLazyQuery
>
export type GetAtomTypesQueryResult = Apollo.QueryResult<
  GetAtomTypesQuery,
  GetAtomTypesQueryVariables
>
export function refetchGetAtomTypesQuery(
  variables?: GetAtomTypesQueryVariables,
) {
  return { query: GetAtomTypesGql, variables: variables }
}
export const GetAtomTypesWhereGql = gql`
  query GetAtomTypesWhere($where: atom_type_bool_exp!) {
    atom_type(where: $where) {
      ...__AtomType
    }
  }
  ${__AtomTypeFragmentDoc}
`

/**
 * __useGetAtomTypesWhereQuery__
 *
 * To run a query within a React component, call `useGetAtomTypesWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomTypesWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomTypesWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAtomTypesWhereQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAtomTypesWhereQuery,
    GetAtomTypesWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAtomTypesWhereQuery,
    GetAtomTypesWhereQueryVariables
  >(GetAtomTypesWhereGql, options)
}
export function useGetAtomTypesWhereLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomTypesWhereQuery,
    GetAtomTypesWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAtomTypesWhereQuery,
    GetAtomTypesWhereQueryVariables
  >(GetAtomTypesWhereGql, options)
}
export type GetAtomTypesWhereQueryHookResult = ReturnType<
  typeof useGetAtomTypesWhereQuery
>
export type GetAtomTypesWhereLazyQueryHookResult = ReturnType<
  typeof useGetAtomTypesWhereLazyQuery
>
export type GetAtomTypesWhereQueryResult = Apollo.QueryResult<
  GetAtomTypesWhereQuery,
  GetAtomTypesWhereQueryVariables
>
export function refetchGetAtomTypesWhereQuery(
  variables?: GetAtomTypesWhereQueryVariables,
) {
  return { query: GetAtomTypesWhereGql, variables: variables }
}
export const UpdateAtomTypeGql = gql`
  mutation UpdateAtomType($input: atom_type_set_input!, $atomTypeId: uuid!) {
    update_atom_type_by_pk(_set: $input, pk_columns: { id: $atomTypeId }) {
      ...__AtomType
    }
  }
  ${__AtomTypeFragmentDoc}
`
export type UpdateAtomTypeMutationFn = Apollo.MutationFunction<
  UpdateAtomTypeMutation,
  UpdateAtomTypeMutationVariables
>

/**
 * __useUpdateAtomTypeMutation__
 *
 * To run a mutation, you first call `useUpdateAtomTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAtomTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAtomTypeMutation, { data, loading, error }] = useUpdateAtomTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      atomTypeId: // value for 'atomTypeId'
 *   },
 * });
 */
export function useUpdateAtomTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAtomTypeMutation,
    UpdateAtomTypeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateAtomTypeMutation,
    UpdateAtomTypeMutationVariables
  >(UpdateAtomTypeGql, options)
}
export type UpdateAtomTypeMutationHookResult = ReturnType<
  typeof useUpdateAtomTypeMutation
>
export type UpdateAtomTypeMutationResult =
  Apollo.MutationResult<UpdateAtomTypeMutation>
export type UpdateAtomTypeMutationOptions = Apollo.BaseMutationOptions<
  UpdateAtomTypeMutation,
  UpdateAtomTypeMutationVariables
>
export const CreateAtomGql = gql`
  mutation CreateAtom($data: atom_insert_input!) {
    insert_atom_one(object: $data) {
      ...LibraryExplorer__Atom
    }
  }
  ${LibraryExplorer__AtomFragmentDoc}
`
export type CreateAtomMutationFn = Apollo.MutationFunction<
  CreateAtomMutation,
  CreateAtomMutationVariables
>

/**
 * __useCreateAtomMutation__
 *
 * To run a mutation, you first call `useCreateAtomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAtomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAtomMutation, { data, loading, error }] = useCreateAtomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAtomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAtomMutation,
    CreateAtomMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAtomMutation, CreateAtomMutationVariables>(
    CreateAtomGql,
    options,
  )
}
export type CreateAtomMutationHookResult = ReturnType<
  typeof useCreateAtomMutation
>
export type CreateAtomMutationResult = Apollo.MutationResult<CreateAtomMutation>
export type CreateAtomMutationOptions = Apollo.BaseMutationOptions<
  CreateAtomMutation,
  CreateAtomMutationVariables
>
export const DeleteAllAtomsGql = gql`
  mutation DeleteAllAtoms {
    delete_atom(where: {}) {
      affected_rows
    }
  }
`
export type DeleteAllAtomsMutationFn = Apollo.MutationFunction<
  DeleteAllAtomsMutation,
  DeleteAllAtomsMutationVariables
>

/**
 * __useDeleteAllAtomsMutation__
 *
 * To run a mutation, you first call `useDeleteAllAtomsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllAtomsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllAtomsMutation, { data, loading, error }] = useDeleteAllAtomsMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAllAtomsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAllAtomsMutation,
    DeleteAllAtomsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteAllAtomsMutation,
    DeleteAllAtomsMutationVariables
  >(DeleteAllAtomsGql, options)
}
export type DeleteAllAtomsMutationHookResult = ReturnType<
  typeof useDeleteAllAtomsMutation
>
export type DeleteAllAtomsMutationResult =
  Apollo.MutationResult<DeleteAllAtomsMutation>
export type DeleteAllAtomsMutationOptions = Apollo.BaseMutationOptions<
  DeleteAllAtomsMutation,
  DeleteAllAtomsMutationVariables
>
export const DeleteAtomGql = gql`
  mutation DeleteAtom($atomId: uuid!) {
    delete_atom_by_pk(id: $atomId) {
      ...LibraryExplorer__Atom
    }
  }
  ${LibraryExplorer__AtomFragmentDoc}
`
export type DeleteAtomMutationFn = Apollo.MutationFunction<
  DeleteAtomMutation,
  DeleteAtomMutationVariables
>

/**
 * __useDeleteAtomMutation__
 *
 * To run a mutation, you first call `useDeleteAtomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAtomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAtomMutation, { data, loading, error }] = useDeleteAtomMutation({
 *   variables: {
 *      atomId: // value for 'atomId'
 *   },
 * });
 */
export function useDeleteAtomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAtomMutation,
    DeleteAtomMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteAtomMutation, DeleteAtomMutationVariables>(
    DeleteAtomGql,
    options,
  )
}
export type DeleteAtomMutationHookResult = ReturnType<
  typeof useDeleteAtomMutation
>
export type DeleteAtomMutationResult = Apollo.MutationResult<DeleteAtomMutation>
export type DeleteAtomMutationOptions = Apollo.BaseMutationOptions<
  DeleteAtomMutation,
  DeleteAtomMutationVariables
>
export const DeleteAtomsWhereGql = gql`
  mutation DeleteAtomsWhere($where: atom_bool_exp!) {
    delete_atom(where: $where) {
      returning {
        ...__Atom
      }
    }
  }
  ${__AtomFragmentDoc}
`
export type DeleteAtomsWhereMutationFn = Apollo.MutationFunction<
  DeleteAtomsWhereMutation,
  DeleteAtomsWhereMutationVariables
>

/**
 * __useDeleteAtomsWhereMutation__
 *
 * To run a mutation, you first call `useDeleteAtomsWhereMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAtomsWhereMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAtomsWhereMutation, { data, loading, error }] = useDeleteAtomsWhereMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAtomsWhereMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAtomsWhereMutation,
    DeleteAtomsWhereMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteAtomsWhereMutation,
    DeleteAtomsWhereMutationVariables
  >(DeleteAtomsWhereGql, options)
}
export type DeleteAtomsWhereMutationHookResult = ReturnType<
  typeof useDeleteAtomsWhereMutation
>
export type DeleteAtomsWhereMutationResult =
  Apollo.MutationResult<DeleteAtomsWhereMutation>
export type DeleteAtomsWhereMutationOptions = Apollo.BaseMutationOptions<
  DeleteAtomsWhereMutation,
  DeleteAtomsWhereMutationVariables
>
export const GetAtomGql = gql`
  query GetAtom($atomId: uuid!) {
    atom_by_pk(id: $atomId) {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`

/**
 * __useGetAtomQuery__
 *
 * To run a query within a React component, call `useGetAtomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomQuery({
 *   variables: {
 *      atomId: // value for 'atomId'
 *   },
 * });
 */
export function useGetAtomQuery(
  baseOptions: Apollo.QueryHookOptions<GetAtomQuery, GetAtomQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomQuery, GetAtomQueryVariables>(
    GetAtomGql,
    options,
  )
}
export function useGetAtomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomQuery,
    GetAtomQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomQuery, GetAtomQueryVariables>(
    GetAtomGql,
    options,
  )
}
export type GetAtomQueryHookResult = ReturnType<typeof useGetAtomQuery>
export type GetAtomLazyQueryHookResult = ReturnType<typeof useGetAtomLazyQuery>
export type GetAtomQueryResult = Apollo.QueryResult<
  GetAtomQuery,
  GetAtomQueryVariables
>
export function refetchGetAtomQuery(variables?: GetAtomQueryVariables) {
  return { query: GetAtomGql, variables: variables }
}
export const GetAtomsListGql = gql`
  query GetAtomsList {
    atom {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`

/**
 * __useGetAtomsListQuery__
 *
 * To run a query within a React component, call `useGetAtomsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAtomsListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAtomsListQuery,
    GetAtomsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomsListQuery, GetAtomsListQueryVariables>(
    GetAtomsListGql,
    options,
  )
}
export function useGetAtomsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomsListQuery,
    GetAtomsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomsListQuery, GetAtomsListQueryVariables>(
    GetAtomsListGql,
    options,
  )
}
export type GetAtomsListQueryHookResult = ReturnType<
  typeof useGetAtomsListQuery
>
export type GetAtomsListLazyQueryHookResult = ReturnType<
  typeof useGetAtomsListLazyQuery
>
export type GetAtomsListQueryResult = Apollo.QueryResult<
  GetAtomsListQuery,
  GetAtomsListQueryVariables
>
export function refetchGetAtomsListQuery(
  variables?: GetAtomsListQueryVariables,
) {
  return { query: GetAtomsListGql, variables: variables }
}
export const GetAtomsTypesGql = gql`
  query GetAtomsTypes {
    atom_type {
      ...__AtomType
    }
  }
  ${__AtomTypeFragmentDoc}
`

/**
 * __useGetAtomsTypesQuery__
 *
 * To run a query within a React component, call `useGetAtomsTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomsTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomsTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAtomsTypesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAtomsTypesQuery,
    GetAtomsTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomsTypesQuery, GetAtomsTypesQueryVariables>(
    GetAtomsTypesGql,
    options,
  )
}
export function useGetAtomsTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomsTypesQuery,
    GetAtomsTypesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomsTypesQuery, GetAtomsTypesQueryVariables>(
    GetAtomsTypesGql,
    options,
  )
}
export type GetAtomsTypesQueryHookResult = ReturnType<
  typeof useGetAtomsTypesQuery
>
export type GetAtomsTypesLazyQueryHookResult = ReturnType<
  typeof useGetAtomsTypesLazyQuery
>
export type GetAtomsTypesQueryResult = Apollo.QueryResult<
  GetAtomsTypesQuery,
  GetAtomsTypesQueryVariables
>
export function refetchGetAtomsTypesQuery(
  variables?: GetAtomsTypesQueryVariables,
) {
  return { query: GetAtomsTypesGql, variables: variables }
}
export const GetAtomsWhereGql = gql`
  query GetAtomsWhere($where: atom_bool_exp!) {
    atom(where: $where) {
      ...__Atom
    }
  }
  ${__AtomFragmentDoc}
`

/**
 * __useGetAtomsWhereQuery__
 *
 * To run a query within a React component, call `useGetAtomsWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAtomsWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAtomsWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAtomsWhereQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAtomsWhereQuery,
    GetAtomsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAtomsWhereQuery, GetAtomsWhereQueryVariables>(
    GetAtomsWhereGql,
    options,
  )
}
export function useGetAtomsWhereLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAtomsWhereQuery,
    GetAtomsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAtomsWhereQuery, GetAtomsWhereQueryVariables>(
    GetAtomsWhereGql,
    options,
  )
}
export type GetAtomsWhereQueryHookResult = ReturnType<
  typeof useGetAtomsWhereQuery
>
export type GetAtomsWhereLazyQueryHookResult = ReturnType<
  typeof useGetAtomsWhereLazyQuery
>
export type GetAtomsWhereQueryResult = Apollo.QueryResult<
  GetAtomsWhereQuery,
  GetAtomsWhereQueryVariables
>
export function refetchGetAtomsWhereQuery(
  variables?: GetAtomsWhereQueryVariables,
) {
  return { query: GetAtomsWhereGql, variables: variables }
}
export const UpdateAtomGql = gql`
  mutation UpdateAtom($input: atom_set_input!, $atomId: uuid!) {
    update_atom_by_pk(_set: $input, pk_columns: { id: $atomId }) {
      ...LibraryExplorer__Atom
    }
  }
  ${LibraryExplorer__AtomFragmentDoc}
`
export type UpdateAtomMutationFn = Apollo.MutationFunction<
  UpdateAtomMutation,
  UpdateAtomMutationVariables
>

/**
 * __useUpdateAtomMutation__
 *
 * To run a mutation, you first call `useUpdateAtomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAtomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAtomMutation, { data, loading, error }] = useUpdateAtomMutation({
 *   variables: {
 *      input: // value for 'input'
 *      atomId: // value for 'atomId'
 *   },
 * });
 */
export function useUpdateAtomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAtomMutation,
    UpdateAtomMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateAtomMutation, UpdateAtomMutationVariables>(
    UpdateAtomGql,
    options,
  )
}
export type UpdateAtomMutationHookResult = ReturnType<
  typeof useUpdateAtomMutation
>
export type UpdateAtomMutationResult = Apollo.MutationResult<UpdateAtomMutation>
export type UpdateAtomMutationOptions = Apollo.BaseMutationOptions<
  UpdateAtomMutation,
  UpdateAtomMutationVariables
>
export const AddChildComponentElementGql = gql`
  mutation AddChildComponentElement($data: component_link_insert_input!) {
    insert_component_link_one(object: $data) {
      ...PageElement__ComponentLink
    }
  }
  ${PageElement__ComponentLinkFragmentDoc}
`
export type AddChildComponentElementMutationFn = Apollo.MutationFunction<
  AddChildComponentElementMutation,
  AddChildComponentElementMutationVariables
>

/**
 * __useAddChildComponentElementMutation__
 *
 * To run a mutation, you first call `useAddChildComponentElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChildComponentElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChildComponentElementMutation, { data, loading, error }] = useAddChildComponentElementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddChildComponentElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddChildComponentElementMutation,
    AddChildComponentElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AddChildComponentElementMutation,
    AddChildComponentElementMutationVariables
  >(AddChildComponentElementGql, options)
}
export type AddChildComponentElementMutationHookResult = ReturnType<
  typeof useAddChildComponentElementMutation
>
export type AddChildComponentElementMutationResult =
  Apollo.MutationResult<AddChildComponentElementMutation>
export type AddChildComponentElementMutationOptions =
  Apollo.BaseMutationOptions<
    AddChildComponentElementMutation,
    AddChildComponentElementMutationVariables
  >
export const CreateComponentElementGql = gql`
  mutation CreateComponentElement($input: component_element_insert_input!) {
    insert_component_element_one(object: $input) {
      ...__ComponentElement
    }
  }
  ${__ComponentElementFragmentDoc}
`
export type CreateComponentElementMutationFn = Apollo.MutationFunction<
  CreateComponentElementMutation,
  CreateComponentElementMutationVariables
>

/**
 * __useCreateComponentElementMutation__
 *
 * To run a mutation, you first call `useCreateComponentElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComponentElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComponentElementMutation, { data, loading, error }] = useCreateComponentElementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateComponentElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateComponentElementMutation,
    CreateComponentElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateComponentElementMutation,
    CreateComponentElementMutationVariables
  >(CreateComponentElementGql, options)
}
export type CreateComponentElementMutationHookResult = ReturnType<
  typeof useCreateComponentElementMutation
>
export type CreateComponentElementMutationResult =
  Apollo.MutationResult<CreateComponentElementMutation>
export type CreateComponentElementMutationOptions = Apollo.BaseMutationOptions<
  CreateComponentElementMutation,
  CreateComponentElementMutationVariables
>
export const CreateComponentLinkGql = gql`
  mutation CreateComponentLink($input: component_link_insert_input!) {
    insert_component_link_one(object: $input) {
      ...PageElement__ComponentLink
    }
  }
  ${PageElement__ComponentLinkFragmentDoc}
`
export type CreateComponentLinkMutationFn = Apollo.MutationFunction<
  CreateComponentLinkMutation,
  CreateComponentLinkMutationVariables
>

/**
 * __useCreateComponentLinkMutation__
 *
 * To run a mutation, you first call `useCreateComponentLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComponentLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComponentLinkMutation, { data, loading, error }] = useCreateComponentLinkMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateComponentLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateComponentLinkMutation,
    CreateComponentLinkMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateComponentLinkMutation,
    CreateComponentLinkMutationVariables
  >(CreateComponentLinkGql, options)
}
export type CreateComponentLinkMutationHookResult = ReturnType<
  typeof useCreateComponentLinkMutation
>
export type CreateComponentLinkMutationResult =
  Apollo.MutationResult<CreateComponentLinkMutation>
export type CreateComponentLinkMutationOptions = Apollo.BaseMutationOptions<
  CreateComponentLinkMutation,
  CreateComponentLinkMutationVariables
>
export const DeleteComponentElementsGql = gql`
  mutation DeleteComponentElements($where: component_element_bool_exp!) {
    delete_component_element(where: $where) {
      returning {
        ...__ComponentElement
      }
    }
  }
  ${__ComponentElementFragmentDoc}
`
export type DeleteComponentElementsMutationFn = Apollo.MutationFunction<
  DeleteComponentElementsMutation,
  DeleteComponentElementsMutationVariables
>

/**
 * __useDeleteComponentElementsMutation__
 *
 * To run a mutation, you first call `useDeleteComponentElementsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteComponentElementsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteComponentElementsMutation, { data, loading, error }] = useDeleteComponentElementsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteComponentElementsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteComponentElementsMutation,
    DeleteComponentElementsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteComponentElementsMutation,
    DeleteComponentElementsMutationVariables
  >(DeleteComponentElementsGql, options)
}
export type DeleteComponentElementsMutationHookResult = ReturnType<
  typeof useDeleteComponentElementsMutation
>
export type DeleteComponentElementsMutationResult =
  Apollo.MutationResult<DeleteComponentElementsMutation>
export type DeleteComponentElementsMutationOptions = Apollo.BaseMutationOptions<
  DeleteComponentElementsMutation,
  DeleteComponentElementsMutationVariables
>
export const GetComponentElementGql = gql`
  query GetComponentElement($componentElementId: uuid!) {
    component_element_by_pk(id: $componentElementId) {
      ...__ComponentElement
    }
  }
  ${__ComponentElementFragmentDoc}
`

/**
 * __useGetComponentElementQuery__
 *
 * To run a query within a React component, call `useGetComponentElementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentElementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentElementQuery({
 *   variables: {
 *      componentElementId: // value for 'componentElementId'
 *   },
 * });
 */
export function useGetComponentElementQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetComponentElementQuery,
    GetComponentElementQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetComponentElementQuery,
    GetComponentElementQueryVariables
  >(GetComponentElementGql, options)
}
export function useGetComponentElementLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentElementQuery,
    GetComponentElementQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetComponentElementQuery,
    GetComponentElementQueryVariables
  >(GetComponentElementGql, options)
}
export type GetComponentElementQueryHookResult = ReturnType<
  typeof useGetComponentElementQuery
>
export type GetComponentElementLazyQueryHookResult = ReturnType<
  typeof useGetComponentElementLazyQuery
>
export type GetComponentElementQueryResult = Apollo.QueryResult<
  GetComponentElementQuery,
  GetComponentElementQueryVariables
>
export function refetchGetComponentElementQuery(
  variables?: GetComponentElementQueryVariables,
) {
  return { query: GetComponentElementGql, variables: variables }
}
export const GetComponentElementsWhereGql = gql`
  query GetComponentElementsWhere($where: component_element_bool_exp!) {
    component_element(where: $where) {
      ...__ComponentElement
    }
  }
  ${__ComponentElementFragmentDoc}
`

/**
 * __useGetComponentElementsWhereQuery__
 *
 * To run a query within a React component, call `useGetComponentElementsWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentElementsWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentElementsWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetComponentElementsWhereQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetComponentElementsWhereQuery,
    GetComponentElementsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetComponentElementsWhereQuery,
    GetComponentElementsWhereQueryVariables
  >(GetComponentElementsWhereGql, options)
}
export function useGetComponentElementsWhereLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentElementsWhereQuery,
    GetComponentElementsWhereQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetComponentElementsWhereQuery,
    GetComponentElementsWhereQueryVariables
  >(GetComponentElementsWhereGql, options)
}
export type GetComponentElementsWhereQueryHookResult = ReturnType<
  typeof useGetComponentElementsWhereQuery
>
export type GetComponentElementsWhereLazyQueryHookResult = ReturnType<
  typeof useGetComponentElementsWhereLazyQuery
>
export type GetComponentElementsWhereQueryResult = Apollo.QueryResult<
  GetComponentElementsWhereQuery,
  GetComponentElementsWhereQueryVariables
>
export function refetchGetComponentElementsWhereQuery(
  variables?: GetComponentElementsWhereQueryVariables,
) {
  return { query: GetComponentElementsWhereGql, variables: variables }
}
export const UpdateComponentElementGql = gql`
  mutation UpdateComponentElement(
    $componentElementId: uuid!
    $input: component_element_set_input!
  ) {
    update_component_element_by_pk(
      pk_columns: { id: $componentElementId }
      _set: $input
    ) {
      ...__ComponentElement
    }
  }
  ${__ComponentElementFragmentDoc}
`
export type UpdateComponentElementMutationFn = Apollo.MutationFunction<
  UpdateComponentElementMutation,
  UpdateComponentElementMutationVariables
>

/**
 * __useUpdateComponentElementMutation__
 *
 * To run a mutation, you first call `useUpdateComponentElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComponentElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComponentElementMutation, { data, loading, error }] = useUpdateComponentElementMutation({
 *   variables: {
 *      componentElementId: // value for 'componentElementId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateComponentElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateComponentElementMutation,
    UpdateComponentElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateComponentElementMutation,
    UpdateComponentElementMutationVariables
  >(UpdateComponentElementGql, options)
}
export type UpdateComponentElementMutationHookResult = ReturnType<
  typeof useUpdateComponentElementMutation
>
export type UpdateComponentElementMutationResult =
  Apollo.MutationResult<UpdateComponentElementMutation>
export type UpdateComponentElementMutationOptions = Apollo.BaseMutationOptions<
  UpdateComponentElementMutation,
  UpdateComponentElementMutationVariables
>
export const CreateComponentGql = gql`
  mutation CreateComponent($input: component_insert_input!) {
    insert_component_one(object: $input) {
      ...LibraryExplorer__Component
    }
  }
  ${LibraryExplorer__ComponentFragmentDoc}
`
export type CreateComponentMutationFn = Apollo.MutationFunction<
  CreateComponentMutation,
  CreateComponentMutationVariables
>

/**
 * __useCreateComponentMutation__
 *
 * To run a mutation, you first call `useCreateComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComponentMutation, { data, loading, error }] = useCreateComponentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateComponentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateComponentMutation,
    CreateComponentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateComponentMutation,
    CreateComponentMutationVariables
  >(CreateComponentGql, options)
}
export type CreateComponentMutationHookResult = ReturnType<
  typeof useCreateComponentMutation
>
export type CreateComponentMutationResult =
  Apollo.MutationResult<CreateComponentMutation>
export type CreateComponentMutationOptions = Apollo.BaseMutationOptions<
  CreateComponentMutation,
  CreateComponentMutationVariables
>
export const DeleteAllComponentsGql = gql`
  mutation DeleteAllComponents {
    delete_component(where: {}) {
      affected_rows
    }
  }
`
export type DeleteAllComponentsMutationFn = Apollo.MutationFunction<
  DeleteAllComponentsMutation,
  DeleteAllComponentsMutationVariables
>

/**
 * __useDeleteAllComponentsMutation__
 *
 * To run a mutation, you first call `useDeleteAllComponentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllComponentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAllComponentsMutation, { data, loading, error }] = useDeleteAllComponentsMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteAllComponentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAllComponentsMutation,
    DeleteAllComponentsMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteAllComponentsMutation,
    DeleteAllComponentsMutationVariables
  >(DeleteAllComponentsGql, options)
}
export type DeleteAllComponentsMutationHookResult = ReturnType<
  typeof useDeleteAllComponentsMutation
>
export type DeleteAllComponentsMutationResult =
  Apollo.MutationResult<DeleteAllComponentsMutation>
export type DeleteAllComponentsMutationOptions = Apollo.BaseMutationOptions<
  DeleteAllComponentsMutation,
  DeleteAllComponentsMutationVariables
>
export const DeleteComponentGql = gql`
  mutation DeleteComponent($componentId: uuid!) {
    delete_component_by_pk(id: $componentId) {
      ...LibraryExplorer__Component
    }
  }
  ${LibraryExplorer__ComponentFragmentDoc}
`
export type DeleteComponentMutationFn = Apollo.MutationFunction<
  DeleteComponentMutation,
  DeleteComponentMutationVariables
>

/**
 * __useDeleteComponentMutation__
 *
 * To run a mutation, you first call `useDeleteComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteComponentMutation, { data, loading, error }] = useDeleteComponentMutation({
 *   variables: {
 *      componentId: // value for 'componentId'
 *   },
 * });
 */
export function useDeleteComponentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteComponentMutation,
    DeleteComponentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteComponentMutation,
    DeleteComponentMutationVariables
  >(DeleteComponentGql, options)
}
export type DeleteComponentMutationHookResult = ReturnType<
  typeof useDeleteComponentMutation
>
export type DeleteComponentMutationResult =
  Apollo.MutationResult<DeleteComponentMutation>
export type DeleteComponentMutationOptions = Apollo.BaseMutationOptions<
  DeleteComponentMutation,
  DeleteComponentMutationVariables
>
export const DeleteComponentsWhereGql = gql`
  mutation DeleteComponentsWhere($where: component_bool_exp!) {
    delete_component(where: $where) {
      returning {
        ...__Component
      }
    }
  }
  ${__ComponentFragmentDoc}
`
export type DeleteComponentsWhereMutationFn = Apollo.MutationFunction<
  DeleteComponentsWhereMutation,
  DeleteComponentsWhereMutationVariables
>

/**
 * __useDeleteComponentsWhereMutation__
 *
 * To run a mutation, you first call `useDeleteComponentsWhereMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteComponentsWhereMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteComponentsWhereMutation, { data, loading, error }] = useDeleteComponentsWhereMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteComponentsWhereMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteComponentsWhereMutation,
    DeleteComponentsWhereMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteComponentsWhereMutation,
    DeleteComponentsWhereMutationVariables
  >(DeleteComponentsWhereGql, options)
}
export type DeleteComponentsWhereMutationHookResult = ReturnType<
  typeof useDeleteComponentsWhereMutation
>
export type DeleteComponentsWhereMutationResult =
  Apollo.MutationResult<DeleteComponentsWhereMutation>
export type DeleteComponentsWhereMutationOptions = Apollo.BaseMutationOptions<
  DeleteComponentsWhereMutation,
  DeleteComponentsWhereMutationVariables
>
export const GetComponentGql = gql`
  query GetComponent($componentId: uuid!) {
    component_by_pk(id: $componentId) {
      ...__Component
    }
  }
  ${__ComponentFragmentDoc}
`

/**
 * __useGetComponentQuery__
 *
 * To run a query within a React component, call `useGetComponentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentQuery({
 *   variables: {
 *      componentId: // value for 'componentId'
 *   },
 * });
 */
export function useGetComponentQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetComponentQuery,
    GetComponentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetComponentQuery, GetComponentQueryVariables>(
    GetComponentGql,
    options,
  )
}
export function useGetComponentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentQuery,
    GetComponentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetComponentQuery, GetComponentQueryVariables>(
    GetComponentGql,
    options,
  )
}
export type GetComponentQueryHookResult = ReturnType<
  typeof useGetComponentQuery
>
export type GetComponentLazyQueryHookResult = ReturnType<
  typeof useGetComponentLazyQuery
>
export type GetComponentQueryResult = Apollo.QueryResult<
  GetComponentQuery,
  GetComponentQueryVariables
>
export function refetchGetComponentQuery(
  variables?: GetComponentQueryVariables,
) {
  return { query: GetComponentGql, variables: variables }
}
export const GetComponentDetailGql = gql`
  query GetComponentDetail($componentId: uuid!) {
    component_by_pk(id: $componentId) {
      ...__Component
    }
  }
  ${__ComponentFragmentDoc}
`

/**
 * __useGetComponentDetailQuery__
 *
 * To run a query within a React component, call `useGetComponentDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentDetailQuery({
 *   variables: {
 *      componentId: // value for 'componentId'
 *   },
 * });
 */
export function useGetComponentDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetComponentDetailQuery,
    GetComponentDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetComponentDetailQuery,
    GetComponentDetailQueryVariables
  >(GetComponentDetailGql, options)
}
export function useGetComponentDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentDetailQuery,
    GetComponentDetailQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetComponentDetailQuery,
    GetComponentDetailQueryVariables
  >(GetComponentDetailGql, options)
}
export type GetComponentDetailQueryHookResult = ReturnType<
  typeof useGetComponentDetailQuery
>
export type GetComponentDetailLazyQueryHookResult = ReturnType<
  typeof useGetComponentDetailLazyQuery
>
export type GetComponentDetailQueryResult = Apollo.QueryResult<
  GetComponentDetailQuery,
  GetComponentDetailQueryVariables
>
export function refetchGetComponentDetailQuery(
  variables?: GetComponentDetailQueryVariables,
) {
  return { query: GetComponentDetailGql, variables: variables }
}
export const GetComponentsGql = gql`
  query GetComponents {
    component {
      ...__Component
    }
  }
  ${__ComponentFragmentDoc}
`

/**
 * __useGetComponentsQuery__
 *
 * To run a query within a React component, call `useGetComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetComponentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetComponentsQuery,
    GetComponentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetComponentsQuery, GetComponentsQueryVariables>(
    GetComponentsGql,
    options,
  )
}
export function useGetComponentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentsQuery,
    GetComponentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetComponentsQuery, GetComponentsQueryVariables>(
    GetComponentsGql,
    options,
  )
}
export type GetComponentsQueryHookResult = ReturnType<
  typeof useGetComponentsQuery
>
export type GetComponentsLazyQueryHookResult = ReturnType<
  typeof useGetComponentsLazyQuery
>
export type GetComponentsQueryResult = Apollo.QueryResult<
  GetComponentsQuery,
  GetComponentsQueryVariables
>
export function refetchGetComponentsQuery(
  variables?: GetComponentsQueryVariables,
) {
  return { query: GetComponentsGql, variables: variables }
}
export const UpdateComponentGql = gql`
  mutation UpdateComponent($componentId: uuid!, $input: component_set_input!) {
    update_component_by_pk(pk_columns: { id: $componentId }, _set: $input) {
      ...LibraryExplorer__Component
    }
  }
  ${LibraryExplorer__ComponentFragmentDoc}
`
export type UpdateComponentMutationFn = Apollo.MutationFunction<
  UpdateComponentMutation,
  UpdateComponentMutationVariables
>

/**
 * __useUpdateComponentMutation__
 *
 * To run a mutation, you first call `useUpdateComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateComponentMutation, { data, loading, error }] = useUpdateComponentMutation({
 *   variables: {
 *      componentId: // value for 'componentId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateComponentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateComponentMutation,
    UpdateComponentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateComponentMutation,
    UpdateComponentMutationVariables
  >(UpdateComponentGql, options)
}
export type UpdateComponentMutationHookResult = ReturnType<
  typeof useUpdateComponentMutation
>
export type UpdateComponentMutationResult =
  Apollo.MutationResult<UpdateComponentMutation>
export type UpdateComponentMutationOptions = Apollo.BaseMutationOptions<
  UpdateComponentMutation,
  UpdateComponentMutationVariables
>
export const CreateLambdaGql = gql`
  mutation CreateLambda($input: [lambda_insert_input!]!) {
    insert_lambda(objects: $input) {
      returning {
        id
        libraryId
        name
        body
      }
    }
  }
`
export type CreateLambdaMutationFn = Apollo.MutationFunction<
  CreateLambdaMutation,
  CreateLambdaMutationVariables
>

/**
 * __useCreateLambdaMutation__
 *
 * To run a mutation, you first call `useCreateLambdaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLambdaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLambdaMutation, { data, loading, error }] = useCreateLambdaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLambdaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLambdaMutation,
    CreateLambdaMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateLambdaMutation,
    CreateLambdaMutationVariables
  >(CreateLambdaGql, options)
}
export type CreateLambdaMutationHookResult = ReturnType<
  typeof useCreateLambdaMutation
>
export type CreateLambdaMutationResult =
  Apollo.MutationResult<CreateLambdaMutation>
export type CreateLambdaMutationOptions = Apollo.BaseMutationOptions<
  CreateLambdaMutation,
  CreateLambdaMutationVariables
>
export const DeleteLambdaGql = gql`
  mutation DeleteLambda($id: uuid!) {
    delete_lambda(where: { id: { _eq: $id } }) {
      returning {
        id
        name
        body
      }
    }
  }
`
export type DeleteLambdaMutationFn = Apollo.MutationFunction<
  DeleteLambdaMutation,
  DeleteLambdaMutationVariables
>

/**
 * __useDeleteLambdaMutation__
 *
 * To run a mutation, you first call `useDeleteLambdaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLambdaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLambdaMutation, { data, loading, error }] = useDeleteLambdaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLambdaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLambdaMutation,
    DeleteLambdaMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteLambdaMutation,
    DeleteLambdaMutationVariables
  >(DeleteLambdaGql, options)
}
export type DeleteLambdaMutationHookResult = ReturnType<
  typeof useDeleteLambdaMutation
>
export type DeleteLambdaMutationResult =
  Apollo.MutationResult<DeleteLambdaMutation>
export type DeleteLambdaMutationOptions = Apollo.BaseMutationOptions<
  DeleteLambdaMutation,
  DeleteLambdaMutationVariables
>
export const ExecuteLambdaGql = gql`
  mutation ExecuteLambda($lambda: LambdaInput!, $payload: String!) {
    executeLambda(lambda: $lambda, payload: $payload) {
      payload
    }
  }
`
export type ExecuteLambdaMutationFn = Apollo.MutationFunction<
  ExecuteLambdaMutation,
  ExecuteLambdaMutationVariables
>

/**
 * __useExecuteLambdaMutation__
 *
 * To run a mutation, you first call `useExecuteLambdaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExecuteLambdaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [executeLambdaMutation, { data, loading, error }] = useExecuteLambdaMutation({
 *   variables: {
 *      lambda: // value for 'lambda'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useExecuteLambdaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExecuteLambdaMutation,
    ExecuteLambdaMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ExecuteLambdaMutation,
    ExecuteLambdaMutationVariables
  >(ExecuteLambdaGql, options)
}
export type ExecuteLambdaMutationHookResult = ReturnType<
  typeof useExecuteLambdaMutation
>
export type ExecuteLambdaMutationResult =
  Apollo.MutationResult<ExecuteLambdaMutation>
export type ExecuteLambdaMutationOptions = Apollo.BaseMutationOptions<
  ExecuteLambdaMutation,
  ExecuteLambdaMutationVariables
>
export const GetLambdaByIdGql = gql`
  query GetLambdaById($id: uuid!) {
    lambda(where: { id: { _eq: $id } }) {
      body
      id
      libraryId
      name
    }
  }
`

/**
 * __useGetLambdaByIdQuery__
 *
 * To run a query within a React component, call `useGetLambdaByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLambdaByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLambdaByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLambdaByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLambdaByIdQuery,
    GetLambdaByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLambdaByIdQuery, GetLambdaByIdQueryVariables>(
    GetLambdaByIdGql,
    options,
  )
}
export function useGetLambdaByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLambdaByIdQuery,
    GetLambdaByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLambdaByIdQuery, GetLambdaByIdQueryVariables>(
    GetLambdaByIdGql,
    options,
  )
}
export type GetLambdaByIdQueryHookResult = ReturnType<
  typeof useGetLambdaByIdQuery
>
export type GetLambdaByIdLazyQueryHookResult = ReturnType<
  typeof useGetLambdaByIdLazyQuery
>
export type GetLambdaByIdQueryResult = Apollo.QueryResult<
  GetLambdaByIdQuery,
  GetLambdaByIdQueryVariables
>
export function refetchGetLambdaByIdQuery(
  variables?: GetLambdaByIdQueryVariables,
) {
  return { query: GetLambdaByIdGql, variables: variables }
}
export const GetLambdasGql = gql`
  query GetLambdas {
    lambda {
      body
      id
      libraryId
      name
    }
  }
`

/**
 * __useGetLambdasQuery__
 *
 * To run a query within a React component, call `useGetLambdasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLambdasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLambdasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLambdasQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLambdasQuery,
    GetLambdasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLambdasQuery, GetLambdasQueryVariables>(
    GetLambdasGql,
    options,
  )
}
export function useGetLambdasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLambdasQuery,
    GetLambdasQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLambdasQuery, GetLambdasQueryVariables>(
    GetLambdasGql,
    options,
  )
}
export type GetLambdasQueryHookResult = ReturnType<typeof useGetLambdasQuery>
export type GetLambdasLazyQueryHookResult = ReturnType<
  typeof useGetLambdasLazyQuery
>
export type GetLambdasQueryResult = Apollo.QueryResult<
  GetLambdasQuery,
  GetLambdasQueryVariables
>
export function refetchGetLambdasQuery(variables?: GetLambdasQueryVariables) {
  return { query: GetLambdasGql, variables: variables }
}
export const GetLambdasByLibraryIdGql = gql`
  query GetLambdasByLibraryId($libraryId: uuid!) {
    lambda(where: { libraryId: { _eq: $libraryId } }) {
      body
      id
      libraryId
      name
    }
  }
`

/**
 * __useGetLambdasByLibraryIdQuery__
 *
 * To run a query within a React component, call `useGetLambdasByLibraryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLambdasByLibraryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLambdasByLibraryIdQuery({
 *   variables: {
 *      libraryId: // value for 'libraryId'
 *   },
 * });
 */
export function useGetLambdasByLibraryIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLambdasByLibraryIdQuery,
    GetLambdasByLibraryIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetLambdasByLibraryIdQuery,
    GetLambdasByLibraryIdQueryVariables
  >(GetLambdasByLibraryIdGql, options)
}
export function useGetLambdasByLibraryIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLambdasByLibraryIdQuery,
    GetLambdasByLibraryIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetLambdasByLibraryIdQuery,
    GetLambdasByLibraryIdQueryVariables
  >(GetLambdasByLibraryIdGql, options)
}
export type GetLambdasByLibraryIdQueryHookResult = ReturnType<
  typeof useGetLambdasByLibraryIdQuery
>
export type GetLambdasByLibraryIdLazyQueryHookResult = ReturnType<
  typeof useGetLambdasByLibraryIdLazyQuery
>
export type GetLambdasByLibraryIdQueryResult = Apollo.QueryResult<
  GetLambdasByLibraryIdQuery,
  GetLambdasByLibraryIdQueryVariables
>
export function refetchGetLambdasByLibraryIdQuery(
  variables?: GetLambdasByLibraryIdQueryVariables,
) {
  return { query: GetLambdasByLibraryIdGql, variables: variables }
}
export const UpdateLambdaGql = gql`
  mutation UpdateLambda($id: uuid!, $body: String, $name: String) {
    update_lambda(
      where: { id: { _eq: $id } }
      _set: { body: $body, name: $name }
    ) {
      returning {
        id
        libraryId
        name
        body
      }
    }
  }
`
export type UpdateLambdaMutationFn = Apollo.MutationFunction<
  UpdateLambdaMutation,
  UpdateLambdaMutationVariables
>

/**
 * __useUpdateLambdaMutation__
 *
 * To run a mutation, you first call `useUpdateLambdaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLambdaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLambdaMutation, { data, loading, error }] = useUpdateLambdaMutation({
 *   variables: {
 *      id: // value for 'id'
 *      body: // value for 'body'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateLambdaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLambdaMutation,
    UpdateLambdaMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateLambdaMutation,
    UpdateLambdaMutationVariables
  >(UpdateLambdaGql, options)
}
export type UpdateLambdaMutationHookResult = ReturnType<
  typeof useUpdateLambdaMutation
>
export type UpdateLambdaMutationResult =
  Apollo.MutationResult<UpdateLambdaMutation>
export type UpdateLambdaMutationOptions = Apollo.BaseMutationOptions<
  UpdateLambdaMutation,
  UpdateLambdaMutationVariables
>
export const GetFirstLibraryGql = gql`
  query GetFirstLibrary {
    library(limit: 1) {
      ...__Library
    }
  }
  ${__LibraryFragmentDoc}
`

/**
 * __useGetFirstLibraryQuery__
 *
 * To run a query within a React component, call `useGetFirstLibraryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFirstLibraryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFirstLibraryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFirstLibraryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFirstLibraryQuery,
    GetFirstLibraryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetFirstLibraryQuery, GetFirstLibraryQueryVariables>(
    GetFirstLibraryGql,
    options,
  )
}
export function useGetFirstLibraryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFirstLibraryQuery,
    GetFirstLibraryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetFirstLibraryQuery,
    GetFirstLibraryQueryVariables
  >(GetFirstLibraryGql, options)
}
export type GetFirstLibraryQueryHookResult = ReturnType<
  typeof useGetFirstLibraryQuery
>
export type GetFirstLibraryLazyQueryHookResult = ReturnType<
  typeof useGetFirstLibraryLazyQuery
>
export type GetFirstLibraryQueryResult = Apollo.QueryResult<
  GetFirstLibraryQuery,
  GetFirstLibraryQueryVariables
>
export function refetchGetFirstLibraryQuery(
  variables?: GetFirstLibraryQueryVariables,
) {
  return { query: GetFirstLibraryGql, variables: variables }
}
export const GetLibraryGql = gql`
  query GetLibrary($libraryId: uuid!) {
    library_by_pk(id: $libraryId) {
      ...__Library
    }
  }
  ${__LibraryFragmentDoc}
`

/**
 * __useGetLibraryQuery__
 *
 * To run a query within a React component, call `useGetLibraryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLibraryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLibraryQuery({
 *   variables: {
 *      libraryId: // value for 'libraryId'
 *   },
 * });
 */
export function useGetLibraryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLibraryQuery,
    GetLibraryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLibraryQuery, GetLibraryQueryVariables>(
    GetLibraryGql,
    options,
  )
}
export function useGetLibraryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLibraryQuery,
    GetLibraryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLibraryQuery, GetLibraryQueryVariables>(
    GetLibraryGql,
    options,
  )
}
export type GetLibraryQueryHookResult = ReturnType<typeof useGetLibraryQuery>
export type GetLibraryLazyQueryHookResult = ReturnType<
  typeof useGetLibraryLazyQuery
>
export type GetLibraryQueryResult = Apollo.QueryResult<
  GetLibraryQuery,
  GetLibraryQueryVariables
>
export function refetchGetLibraryQuery(variables?: GetLibraryQueryVariables) {
  return { query: GetLibraryGql, variables: variables }
}
export const CreateLibraryGql = gql`
  mutation CreateLibrary($data: library_insert_input!) {
    insert_library_one(object: $data) {
      ...__Library
    }
  }
  ${__LibraryFragmentDoc}
`
export type CreateLibraryMutationFn = Apollo.MutationFunction<
  CreateLibraryMutation,
  CreateLibraryMutationVariables
>

/**
 * __useCreateLibraryMutation__
 *
 * To run a mutation, you first call `useCreateLibraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLibraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLibraryMutation, { data, loading, error }] = useCreateLibraryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLibraryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLibraryMutation,
    CreateLibraryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateLibraryMutation,
    CreateLibraryMutationVariables
  >(CreateLibraryGql, options)
}
export type CreateLibraryMutationHookResult = ReturnType<
  typeof useCreateLibraryMutation
>
export type CreateLibraryMutationResult =
  Apollo.MutationResult<CreateLibraryMutation>
export type CreateLibraryMutationOptions = Apollo.BaseMutationOptions<
  CreateLibraryMutation,
  CreateLibraryMutationVariables
>
export const DeleteLibraryGql = gql`
  mutation DeleteLibrary($libraryId: uuid!) {
    delete_library_by_pk(id: $libraryId) {
      id
    }
  }
`
export type DeleteLibraryMutationFn = Apollo.MutationFunction<
  DeleteLibraryMutation,
  DeleteLibraryMutationVariables
>

/**
 * __useDeleteLibraryMutation__
 *
 * To run a mutation, you first call `useDeleteLibraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLibraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLibraryMutation, { data, loading, error }] = useDeleteLibraryMutation({
 *   variables: {
 *      libraryId: // value for 'libraryId'
 *   },
 * });
 */
export function useDeleteLibraryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteLibraryMutation,
    DeleteLibraryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteLibraryMutation,
    DeleteLibraryMutationVariables
  >(DeleteLibraryGql, options)
}
export type DeleteLibraryMutationHookResult = ReturnType<
  typeof useDeleteLibraryMutation
>
export type DeleteLibraryMutationResult =
  Apollo.MutationResult<DeleteLibraryMutation>
export type DeleteLibraryMutationOptions = Apollo.BaseMutationOptions<
  DeleteLibraryMutation,
  DeleteLibraryMutationVariables
>
export const DeleteUserLibrariesGql = gql`
  mutation DeleteUserLibraries($userId: String!) {
    delete_library(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
  }
`
export type DeleteUserLibrariesMutationFn = Apollo.MutationFunction<
  DeleteUserLibrariesMutation,
  DeleteUserLibrariesMutationVariables
>

/**
 * __useDeleteUserLibrariesMutation__
 *
 * To run a mutation, you first call `useDeleteUserLibrariesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserLibrariesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserLibrariesMutation, { data, loading, error }] = useDeleteUserLibrariesMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserLibrariesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserLibrariesMutation,
    DeleteUserLibrariesMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteUserLibrariesMutation,
    DeleteUserLibrariesMutationVariables
  >(DeleteUserLibrariesGql, options)
}
export type DeleteUserLibrariesMutationHookResult = ReturnType<
  typeof useDeleteUserLibrariesMutation
>
export type DeleteUserLibrariesMutationResult =
  Apollo.MutationResult<DeleteUserLibrariesMutation>
export type DeleteUserLibrariesMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserLibrariesMutation,
  DeleteUserLibrariesMutationVariables
>
export const LibraryExplorerGql = gql`
  query LibraryExplorer {
    library {
      id
      name
      components {
        ...LibraryExplorer__Component
      }
      atoms {
        ...LibraryExplorer__Atom
      }
    }
  }
  ${LibraryExplorer__ComponentFragmentDoc}
  ${LibraryExplorer__AtomFragmentDoc}
`

/**
 * __useLibraryExplorerQuery__
 *
 * To run a query within a React component, call `useLibraryExplorerQuery` and pass it any options that fit your needs.
 * When your component renders, `useLibraryExplorerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLibraryExplorerQuery({
 *   variables: {
 *   },
 * });
 */
export function useLibraryExplorerQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LibraryExplorerQuery,
    LibraryExplorerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LibraryExplorerQuery, LibraryExplorerQueryVariables>(
    LibraryExplorerGql,
    options,
  )
}
export function useLibraryExplorerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LibraryExplorerQuery,
    LibraryExplorerQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    LibraryExplorerQuery,
    LibraryExplorerQueryVariables
  >(LibraryExplorerGql, options)
}
export type LibraryExplorerQueryHookResult = ReturnType<
  typeof useLibraryExplorerQuery
>
export type LibraryExplorerLazyQueryHookResult = ReturnType<
  typeof useLibraryExplorerLazyQuery
>
export type LibraryExplorerQueryResult = Apollo.QueryResult<
  LibraryExplorerQuery,
  LibraryExplorerQueryVariables
>
export function refetchLibraryExplorerQuery(
  variables?: LibraryExplorerQueryVariables,
) {
  return { query: LibraryExplorerGql, variables: variables }
}
export const UpdateLibraryGql = gql`
  mutation UpdateLibrary($input: library_set_input!, $libraryId: uuid!) {
    update_library_by_pk(_set: $input, pk_columns: { id: $libraryId }) {
      ...__Library
    }
  }
  ${__LibraryFragmentDoc}
`
export type UpdateLibraryMutationFn = Apollo.MutationFunction<
  UpdateLibraryMutation,
  UpdateLibraryMutationVariables
>

/**
 * __useUpdateLibraryMutation__
 *
 * To run a mutation, you first call `useUpdateLibraryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLibraryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLibraryMutation, { data, loading, error }] = useUpdateLibraryMutation({
 *   variables: {
 *      input: // value for 'input'
 *      libraryId: // value for 'libraryId'
 *   },
 * });
 */
export function useUpdateLibraryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLibraryMutation,
    UpdateLibraryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateLibraryMutation,
    UpdateLibraryMutationVariables
  >(UpdateLibraryGql, options)
}
export type UpdateLibraryMutationHookResult = ReturnType<
  typeof useUpdateLibraryMutation
>
export type UpdateLibraryMutationResult =
  Apollo.MutationResult<UpdateLibraryMutation>
export type UpdateLibraryMutationOptions = Apollo.BaseMutationOptions<
  UpdateLibraryMutation,
  UpdateLibraryMutationVariables
>
export const CreatePageGql = gql`
  mutation CreatePage($data: page_insert_input!) {
    insert_page_one(object: $data) {
      ...App__Page
    }
  }
  ${App__PageFragmentDoc}
`
export type CreatePageMutationFn = Apollo.MutationFunction<
  CreatePageMutation,
  CreatePageMutationVariables
>

/**
 * __useCreatePageMutation__
 *
 * To run a mutation, you first call `useCreatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageMutation, { data, loading, error }] = useCreatePageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePageMutation,
    CreatePageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(
    CreatePageGql,
    options,
  )
}
export type CreatePageMutationHookResult = ReturnType<
  typeof useCreatePageMutation
>
export type CreatePageMutationResult = Apollo.MutationResult<CreatePageMutation>
export type CreatePageMutationOptions = Apollo.BaseMutationOptions<
  CreatePageMutation,
  CreatePageMutationVariables
>
export const DeletePageGql = gql`
  mutation DeletePage($pageId: uuid!) {
    delete_page_by_pk(id: $pageId) {
      ...App__Page
    }
  }
  ${App__PageFragmentDoc}
`
export type DeletePageMutationFn = Apollo.MutationFunction<
  DeletePageMutation,
  DeletePageMutationVariables
>

/**
 * __useDeletePageMutation__
 *
 * To run a mutation, you first call `useDeletePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageMutation, { data, loading, error }] = useDeletePageMutation({
 *   variables: {
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useDeletePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePageMutation,
    DeletePageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeletePageMutation, DeletePageMutationVariables>(
    DeletePageGql,
    options,
  )
}
export type DeletePageMutationHookResult = ReturnType<
  typeof useDeletePageMutation
>
export type DeletePageMutationResult = Apollo.MutationResult<DeletePageMutation>
export type DeletePageMutationOptions = Apollo.BaseMutationOptions<
  DeletePageMutation,
  DeletePageMutationVariables
>
export const GetPageGql = gql`
  query GetPage($pageId: uuid!) {
    page_by_pk(id: $pageId) {
      ...App__Page
    }
  }
  ${App__PageFragmentDoc}
`

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useGetPageQuery(
  baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(
    GetPageGql,
    options,
  )
}
export function useGetPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPageQuery,
    GetPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(
    GetPageGql,
    options,
  )
}
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>
export type GetPageQueryResult = Apollo.QueryResult<
  GetPageQuery,
  GetPageQueryVariables
>
export function refetchGetPageQuery(variables?: GetPageQueryVariables) {
  return { query: GetPageGql, variables: variables }
}
export const GetPagesListGql = gql`
  query GetPagesList($appId: uuid!) {
    app_by_pk(id: $appId) {
      pages {
        id
        name
      }
    }
  }
`

/**
 * __useGetPagesListQuery__
 *
 * To run a query within a React component, call `useGetPagesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesListQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetPagesListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPagesListQuery,
    GetPagesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPagesListQuery, GetPagesListQueryVariables>(
    GetPagesListGql,
    options,
  )
}
export function useGetPagesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPagesListQuery,
    GetPagesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPagesListQuery, GetPagesListQueryVariables>(
    GetPagesListGql,
    options,
  )
}
export type GetPagesListQueryHookResult = ReturnType<
  typeof useGetPagesListQuery
>
export type GetPagesListLazyQueryHookResult = ReturnType<
  typeof useGetPagesListLazyQuery
>
export type GetPagesListQueryResult = Apollo.QueryResult<
  GetPagesListQuery,
  GetPagesListQueryVariables
>
export function refetchGetPagesListQuery(
  variables?: GetPagesListQueryVariables,
) {
  return { query: GetPagesListGql, variables: variables }
}
export const CreatePageElementGql = gql`
  mutation CreatePageElement($input: page_element_insert_input!) {
    insert_page_element_one(object: $input) {
      ...Page__PageElement
    }
  }
  ${Page__PageElementFragmentDoc}
`
export type CreatePageElementMutationFn = Apollo.MutationFunction<
  CreatePageElementMutation,
  CreatePageElementMutationVariables
>

/**
 * __useCreatePageElementMutation__
 *
 * To run a mutation, you first call `useCreatePageElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageElementMutation, { data, loading, error }] = useCreatePageElementMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePageElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePageElementMutation,
    CreatePageElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreatePageElementMutation,
    CreatePageElementMutationVariables
  >(CreatePageElementGql, options)
}
export type CreatePageElementMutationHookResult = ReturnType<
  typeof useCreatePageElementMutation
>
export type CreatePageElementMutationResult =
  Apollo.MutationResult<CreatePageElementMutation>
export type CreatePageElementMutationOptions = Apollo.BaseMutationOptions<
  CreatePageElementMutation,
  CreatePageElementMutationVariables
>
export const DeletePageElementGql = gql`
  mutation DeletePageElement($pageElementId: uuid!) {
    delete_page_element_by_pk(id: $pageElementId) {
      ...Page__PageElement
    }
  }
  ${Page__PageElementFragmentDoc}
`
export type DeletePageElementMutationFn = Apollo.MutationFunction<
  DeletePageElementMutation,
  DeletePageElementMutationVariables
>

/**
 * __useDeletePageElementMutation__
 *
 * To run a mutation, you first call `useDeletePageElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePageElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePageElementMutation, { data, loading, error }] = useDeletePageElementMutation({
 *   variables: {
 *      pageElementId: // value for 'pageElementId'
 *   },
 * });
 */
export function useDeletePageElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePageElementMutation,
    DeletePageElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeletePageElementMutation,
    DeletePageElementMutationVariables
  >(DeletePageElementGql, options)
}
export type DeletePageElementMutationHookResult = ReturnType<
  typeof useDeletePageElementMutation
>
export type DeletePageElementMutationResult =
  Apollo.MutationResult<DeletePageElementMutation>
export type DeletePageElementMutationOptions = Apollo.BaseMutationOptions<
  DeletePageElementMutation,
  DeletePageElementMutationVariables
>
export const GetPageElementGql = gql`
  query GetPageElement($pageElementId: uuid!) {
    page_element_by_pk(id: $pageElementId) {
      ...Page__PageElement
    }
  }
  ${Page__PageElementFragmentDoc}
`

/**
 * __useGetPageElementQuery__
 *
 * To run a query within a React component, call `useGetPageElementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageElementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageElementQuery({
 *   variables: {
 *      pageElementId: // value for 'pageElementId'
 *   },
 * });
 */
export function useGetPageElementQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPageElementQuery,
    GetPageElementQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPageElementQuery, GetPageElementQueryVariables>(
    GetPageElementGql,
    options,
  )
}
export function useGetPageElementLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPageElementQuery,
    GetPageElementQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPageElementQuery, GetPageElementQueryVariables>(
    GetPageElementGql,
    options,
  )
}
export type GetPageElementQueryHookResult = ReturnType<
  typeof useGetPageElementQuery
>
export type GetPageElementLazyQueryHookResult = ReturnType<
  typeof useGetPageElementLazyQuery
>
export type GetPageElementQueryResult = Apollo.QueryResult<
  GetPageElementQuery,
  GetPageElementQueryVariables
>
export function refetchGetPageElementQuery(
  variables?: GetPageElementQueryVariables,
) {
  return { query: GetPageElementGql, variables: variables }
}
export const UpdatePageElementGql = gql`
  mutation UpdatePageElement($id: uuid!, $input: page_element_set_input) {
    update_page_element_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...Page__PageElement
    }
  }
  ${Page__PageElementFragmentDoc}
`
export type UpdatePageElementMutationFn = Apollo.MutationFunction<
  UpdatePageElementMutation,
  UpdatePageElementMutationVariables
>

/**
 * __useUpdatePageElementMutation__
 *
 * To run a mutation, you first call `useUpdatePageElementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageElementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageElementMutation, { data, loading, error }] = useUpdatePageElementMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePageElementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePageElementMutation,
    UpdatePageElementMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdatePageElementMutation,
    UpdatePageElementMutationVariables
  >(UpdatePageElementGql, options)
}
export type UpdatePageElementMutationHookResult = ReturnType<
  typeof useUpdatePageElementMutation
>
export type UpdatePageElementMutationResult =
  Apollo.MutationResult<UpdatePageElementMutation>
export type UpdatePageElementMutationOptions = Apollo.BaseMutationOptions<
  UpdatePageElementMutation,
  UpdatePageElementMutationVariables
>
export const UpdatePageGql = gql`
  mutation UpdatePage($input: page_set_input!, $pageId: uuid!) {
    update_page_by_pk(_set: $input, pk_columns: { id: $pageId }) {
      ...App__Page
    }
  }
  ${App__PageFragmentDoc}
`
export type UpdatePageMutationFn = Apollo.MutationFunction<
  UpdatePageMutation,
  UpdatePageMutationVariables
>

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      pageId: // value for 'pageId'
 *   },
 * });
 */
export function useUpdatePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePageMutation,
    UpdatePageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(
    UpdatePageGql,
    options,
  )
}
export type UpdatePageMutationHookResult = ReturnType<
  typeof useUpdatePageMutation
>
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<
  UpdatePageMutation,
  UpdatePageMutationVariables
>
export const CreatePropTypeCGql = gql`
  mutation CreatePropTypeC($data: prop_type_c_insert_input!) {
    insert_prop_type_c_one(object: $data) {
      id
    }
  }
`
export type CreatePropTypeCMutationFn = Apollo.MutationFunction<
  CreatePropTypeCMutation,
  CreatePropTypeCMutationVariables
>

/**
 * __useCreatePropTypeCMutation__
 *
 * To run a mutation, you first call `useCreatePropTypeCMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropTypeCMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropTypeCMutation, { data, loading, error }] = useCreatePropTypeCMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePropTypeCMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePropTypeCMutation,
    CreatePropTypeCMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreatePropTypeCMutation,
    CreatePropTypeCMutationVariables
  >(CreatePropTypeCGql, options)
}
export type CreatePropTypeCMutationHookResult = ReturnType<
  typeof useCreatePropTypeCMutation
>
export type CreatePropTypeCMutationResult =
  Apollo.MutationResult<CreatePropTypeCMutation>
export type CreatePropTypeCMutationOptions = Apollo.BaseMutationOptions<
  CreatePropTypeCMutation,
  CreatePropTypeCMutationVariables
>
export const DeletePropTypeCGql = gql`
  mutation DeletePropTypeC($propTypeCId: uuid!) {
    delete_prop_type_c_by_pk(id: $propTypeCId) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollectionFragmentDoc}
`
export type DeletePropTypeCMutationFn = Apollo.MutationFunction<
  DeletePropTypeCMutation,
  DeletePropTypeCMutationVariables
>

/**
 * __useDeletePropTypeCMutation__
 *
 * To run a mutation, you first call `useDeletePropTypeCMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePropTypeCMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePropTypeCMutation, { data, loading, error }] = useDeletePropTypeCMutation({
 *   variables: {
 *      propTypeCId: // value for 'propTypeCId'
 *   },
 * });
 */
export function useDeletePropTypeCMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePropTypeCMutation,
    DeletePropTypeCMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeletePropTypeCMutation,
    DeletePropTypeCMutationVariables
  >(DeletePropTypeCGql, options)
}
export type DeletePropTypeCMutationHookResult = ReturnType<
  typeof useDeletePropTypeCMutation
>
export type DeletePropTypeCMutationResult =
  Apollo.MutationResult<DeletePropTypeCMutation>
export type DeletePropTypeCMutationOptions = Apollo.BaseMutationOptions<
  DeletePropTypeCMutation,
  DeletePropTypeCMutationVariables
>
export const GetPropTypeCGql = gql`
  query GetPropTypeC($propTypeCId: uuid!) {
    prop_type_c_by_pk(id: $propTypeCId) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollectionFragmentDoc}
`

/**
 * __useGetPropTypeCQuery__
 *
 * To run a query within a React component, call `useGetPropTypeCQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropTypeCQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropTypeCQuery({
 *   variables: {
 *      propTypeCId: // value for 'propTypeCId'
 *   },
 * });
 */
export function useGetPropTypeCQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPropTypeCQuery,
    GetPropTypeCQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPropTypeCQuery, GetPropTypeCQueryVariables>(
    GetPropTypeCGql,
    options,
  )
}
export function useGetPropTypeCLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPropTypeCQuery,
    GetPropTypeCQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPropTypeCQuery, GetPropTypeCQueryVariables>(
    GetPropTypeCGql,
    options,
  )
}
export type GetPropTypeCQueryHookResult = ReturnType<
  typeof useGetPropTypeCQuery
>
export type GetPropTypeCLazyQueryHookResult = ReturnType<
  typeof useGetPropTypeCLazyQuery
>
export type GetPropTypeCQueryResult = Apollo.QueryResult<
  GetPropTypeCQuery,
  GetPropTypeCQueryVariables
>
export function refetchGetPropTypeCQuery(
  variables?: GetPropTypeCQueryVariables,
) {
  return { query: GetPropTypeCGql, variables: variables }
}
export const GetPropTypeCListGql = gql`
  query GetPropTypeCList($where: prop_type_c_bool_exp) {
    prop_type_c(where: $where) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollectionFragmentDoc}
`

/**
 * __useGetPropTypeCListQuery__
 *
 * To run a query within a React component, call `useGetPropTypeCListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropTypeCListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropTypeCListQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPropTypeCListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPropTypeCListQuery,
    GetPropTypeCListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPropTypeCListQuery, GetPropTypeCListQueryVariables>(
    GetPropTypeCListGql,
    options,
  )
}
export function useGetPropTypeCListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPropTypeCListQuery,
    GetPropTypeCListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPropTypeCListQuery,
    GetPropTypeCListQueryVariables
  >(GetPropTypeCListGql, options)
}
export type GetPropTypeCListQueryHookResult = ReturnType<
  typeof useGetPropTypeCListQuery
>
export type GetPropTypeCListLazyQueryHookResult = ReturnType<
  typeof useGetPropTypeCListLazyQuery
>
export type GetPropTypeCListQueryResult = Apollo.QueryResult<
  GetPropTypeCListQuery,
  GetPropTypeCListQueryVariables
>
export function refetchGetPropTypeCListQuery(
  variables?: GetPropTypeCListQueryVariables,
) {
  return { query: GetPropTypeCListGql, variables: variables }
}
export const UpdatePropTypeCGql = gql`
  mutation UpdatePropTypeC(
    $input: prop_type_c_set_input!
    $propTypeCId: uuid!
  ) {
    update_prop_type_c_by_pk(_set: $input, pk_columns: { id: $propTypeCId }) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollectionFragmentDoc}
`
export type UpdatePropTypeCMutationFn = Apollo.MutationFunction<
  UpdatePropTypeCMutation,
  UpdatePropTypeCMutationVariables
>

/**
 * __useUpdatePropTypeCMutation__
 *
 * To run a mutation, you first call `useUpdatePropTypeCMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropTypeCMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropTypeCMutation, { data, loading, error }] = useUpdatePropTypeCMutation({
 *   variables: {
 *      input: // value for 'input'
 *      propTypeCId: // value for 'propTypeCId'
 *   },
 * });
 */
export function useUpdatePropTypeCMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePropTypeCMutation,
    UpdatePropTypeCMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdatePropTypeCMutation,
    UpdatePropTypeCMutationVariables
  >(UpdatePropTypeCGql, options)
}
export type UpdatePropTypeCMutationHookResult = ReturnType<
  typeof useUpdatePropTypeCMutation
>
export type UpdatePropTypeCMutationResult =
  Apollo.MutationResult<UpdatePropTypeCMutation>
export type UpdatePropTypeCMutationOptions = Apollo.BaseMutationOptions<
  UpdatePropTypeCMutation,
  UpdatePropTypeCMutationVariables
>
export const UpsertPropTypeCGql = gql`
  mutation UpsertPropTypeC($object: prop_type_c_insert_input!) {
    insert_prop_type_c(
      objects: [$object]
      on_conflict: { constraint: prop_type_c_pkey, update_columns: [label] }
    ) {
      affected_rows
    }
  }
`
export type UpsertPropTypeCMutationFn = Apollo.MutationFunction<
  UpsertPropTypeCMutation,
  UpsertPropTypeCMutationVariables
>

/**
 * __useUpsertPropTypeCMutation__
 *
 * To run a mutation, you first call `useUpsertPropTypeCMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPropTypeCMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPropTypeCMutation, { data, loading, error }] = useUpsertPropTypeCMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpsertPropTypeCMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertPropTypeCMutation,
    UpsertPropTypeCMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpsertPropTypeCMutation,
    UpsertPropTypeCMutationVariables
  >(UpsertPropTypeCGql, options)
}
export type UpsertPropTypeCMutationHookResult = ReturnType<
  typeof useUpsertPropTypeCMutation
>
export type UpsertPropTypeCMutationResult =
  Apollo.MutationResult<UpsertPropTypeCMutation>
export type UpsertPropTypeCMutationOptions = Apollo.BaseMutationOptions<
  UpsertPropTypeCMutation,
  UpsertPropTypeCMutationVariables
>
export const CreatePageElementPropGql = gql`
  mutation CreatePageElementProp($propInput: prop_insert_input!) {
    insert_prop_one(object: $propInput) {
      ...PropCollection__Prop
    }
  }
  ${PropCollection__PropFragmentDoc}
`
export type CreatePageElementPropMutationFn = Apollo.MutationFunction<
  CreatePageElementPropMutation,
  CreatePageElementPropMutationVariables
>

/**
 * __useCreatePageElementPropMutation__
 *
 * To run a mutation, you first call `useCreatePageElementPropMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePageElementPropMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPageElementPropMutation, { data, loading, error }] = useCreatePageElementPropMutation({
 *   variables: {
 *      propInput: // value for 'propInput'
 *   },
 * });
 */
export function useCreatePageElementPropMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePageElementPropMutation,
    CreatePageElementPropMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreatePageElementPropMutation,
    CreatePageElementPropMutationVariables
  >(CreatePageElementPropGql, options)
}
export type CreatePageElementPropMutationHookResult = ReturnType<
  typeof useCreatePageElementPropMutation
>
export type CreatePageElementPropMutationResult =
  Apollo.MutationResult<CreatePageElementPropMutation>
export type CreatePageElementPropMutationOptions = Apollo.BaseMutationOptions<
  CreatePageElementPropMutation,
  CreatePageElementPropMutationVariables
>
export const CreatePropGql = gql`
  mutation CreateProp($input: prop_insert_input!) {
    insert_prop_one(object: $input) {
      id
    }
  }
`
export type CreatePropMutationFn = Apollo.MutationFunction<
  CreatePropMutation,
  CreatePropMutationVariables
>

/**
 * __useCreatePropMutation__
 *
 * To run a mutation, you first call `useCreatePropMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropMutation, { data, loading, error }] = useCreatePropMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePropMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePropMutation,
    CreatePropMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePropMutation, CreatePropMutationVariables>(
    CreatePropGql,
    options,
  )
}
export type CreatePropMutationHookResult = ReturnType<
  typeof useCreatePropMutation
>
export type CreatePropMutationResult = Apollo.MutationResult<CreatePropMutation>
export type CreatePropMutationOptions = Apollo.BaseMutationOptions<
  CreatePropMutation,
  CreatePropMutationVariables
>
export const PageElementPropGql = gql`
  query PageElementProp($pageElementId: uuid!) {
    page_element_by_pk(id: $pageElementId) {
      ...Page__PageElement
    }
  }
  ${Page__PageElementFragmentDoc}
`

/**
 * __usePageElementPropQuery__
 *
 * To run a query within a React component, call `usePageElementPropQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageElementPropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageElementPropQuery({
 *   variables: {
 *      pageElementId: // value for 'pageElementId'
 *   },
 * });
 */
export function usePageElementPropQuery(
  baseOptions: Apollo.QueryHookOptions<
    PageElementPropQuery,
    PageElementPropQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PageElementPropQuery, PageElementPropQueryVariables>(
    PageElementPropGql,
    options,
  )
}
export function usePageElementPropLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PageElementPropQuery,
    PageElementPropQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    PageElementPropQuery,
    PageElementPropQueryVariables
  >(PageElementPropGql, options)
}
export type PageElementPropQueryHookResult = ReturnType<
  typeof usePageElementPropQuery
>
export type PageElementPropLazyQueryHookResult = ReturnType<
  typeof usePageElementPropLazyQuery
>
export type PageElementPropQueryResult = Apollo.QueryResult<
  PageElementPropQuery,
  PageElementPropQueryVariables
>
export function refetchPageElementPropQuery(
  variables?: PageElementPropQueryVariables,
) {
  return { query: PageElementPropGql, variables: variables }
}
export const UpdatePropGql = gql`
  mutation UpdateProp($input: prop_set_input!, $propId: uuid!) {
    update_prop_by_pk(pk_columns: { id: $propId }, _set: $input) {
      id
      ...PropCollection__Prop
    }
  }
  ${PropCollection__PropFragmentDoc}
`
export type UpdatePropMutationFn = Apollo.MutationFunction<
  UpdatePropMutation,
  UpdatePropMutationVariables
>

/**
 * __useUpdatePropMutation__
 *
 * To run a mutation, you first call `useUpdatePropMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropMutation, { data, loading, error }] = useUpdatePropMutation({
 *   variables: {
 *      input: // value for 'input'
 *      propId: // value for 'propId'
 *   },
 * });
 */
export function useUpdatePropMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePropMutation,
    UpdatePropMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdatePropMutation, UpdatePropMutationVariables>(
    UpdatePropGql,
    options,
  )
}
export type UpdatePropMutationHookResult = ReturnType<
  typeof useUpdatePropMutation
>
export type UpdatePropMutationResult = Apollo.MutationResult<UpdatePropMutation>
export type UpdatePropMutationOptions = Apollo.BaseMutationOptions<
  UpdatePropMutation,
  UpdatePropMutationVariables
>
export const UpdatePropValueGql = gql`
  mutation UpdatePropValue($propValueId: uuid!, $input: prop_value_set_input!) {
    update_prop_value_by_pk(pk_columns: { id: $propValueId }, _set: $input) {
      ...Prop__PropValue
    }
  }
  ${Prop__PropValueFragmentDoc}
`
export type UpdatePropValueMutationFn = Apollo.MutationFunction<
  UpdatePropValueMutation,
  UpdatePropValueMutationVariables
>

/**
 * __useUpdatePropValueMutation__
 *
 * To run a mutation, you first call `useUpdatePropValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropValueMutation, { data, loading, error }] = useUpdatePropValueMutation({
 *   variables: {
 *      propValueId: // value for 'propValueId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePropValueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePropValueMutation,
    UpdatePropValueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdatePropValueMutation,
    UpdatePropValueMutationVariables
  >(UpdatePropValueGql, options)
}
export type UpdatePropValueMutationHookResult = ReturnType<
  typeof useUpdatePropValueMutation
>
export type UpdatePropValueMutationResult =
  Apollo.MutationResult<UpdatePropValueMutation>
export type UpdatePropValueMutationOptions = Apollo.BaseMutationOptions<
  UpdatePropValueMutation,
  UpdatePropValueMutationVariables
>
export const GetStyleGql = gql`
  query GetStyle($styleId: uuid!) {
    style_by_pk(id: $styleId) {
      id
      name
      library_id
    }
  }
`

/**
 * __useGetStyleQuery__
 *
 * To run a query within a React component, call `useGetStyleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStyleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStyleQuery({
 *   variables: {
 *      styleId: // value for 'styleId'
 *   },
 * });
 */
export function useGetStyleQuery(
  baseOptions: Apollo.QueryHookOptions<GetStyleQuery, GetStyleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStyleQuery, GetStyleQueryVariables>(
    GetStyleGql,
    options,
  )
}
export function useGetStyleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStyleQuery,
    GetStyleQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStyleQuery, GetStyleQueryVariables>(
    GetStyleGql,
    options,
  )
}
export type GetStyleQueryHookResult = ReturnType<typeof useGetStyleQuery>
export type GetStyleLazyQueryHookResult = ReturnType<
  typeof useGetStyleLazyQuery
>
export type GetStyleQueryResult = Apollo.QueryResult<
  GetStyleQuery,
  GetStyleQueryVariables
>
export function refetchGetStyleQuery(variables?: GetStyleQueryVariables) {
  return { query: GetStyleGql, variables: variables }
}
export const CreateStyleGql = gql`
  mutation CreateStyle($data: style_insert_input!) {
    insert_style_one(object: $data) {
      id
    }
  }
`
export type CreateStyleMutationFn = Apollo.MutationFunction<
  CreateStyleMutation,
  CreateStyleMutationVariables
>

/**
 * __useCreateStyleMutation__
 *
 * To run a mutation, you first call `useCreateStyleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStyleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStyleMutation, { data, loading, error }] = useCreateStyleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStyleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateStyleMutation,
    CreateStyleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateStyleMutation, CreateStyleMutationVariables>(
    CreateStyleGql,
    options,
  )
}
export type CreateStyleMutationHookResult = ReturnType<
  typeof useCreateStyleMutation
>
export type CreateStyleMutationResult =
  Apollo.MutationResult<CreateStyleMutation>
export type CreateStyleMutationOptions = Apollo.BaseMutationOptions<
  CreateStyleMutation,
  CreateStyleMutationVariables
>
export const DeleteStyleGql = gql`
  mutation DeleteStyle($styleId: uuid!) {
    delete_style_by_pk(id: $styleId) {
      id
    }
  }
`
export type DeleteStyleMutationFn = Apollo.MutationFunction<
  DeleteStyleMutation,
  DeleteStyleMutationVariables
>

/**
 * __useDeleteStyleMutation__
 *
 * To run a mutation, you first call `useDeleteStyleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStyleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStyleMutation, { data, loading, error }] = useDeleteStyleMutation({
 *   variables: {
 *      styleId: // value for 'styleId'
 *   },
 * });
 */
export function useDeleteStyleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteStyleMutation,
    DeleteStyleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteStyleMutation, DeleteStyleMutationVariables>(
    DeleteStyleGql,
    options,
  )
}
export type DeleteStyleMutationHookResult = ReturnType<
  typeof useDeleteStyleMutation
>
export type DeleteStyleMutationResult =
  Apollo.MutationResult<DeleteStyleMutation>
export type DeleteStyleMutationOptions = Apollo.BaseMutationOptions<
  DeleteStyleMutation,
  DeleteStyleMutationVariables
>
export const GetStylesListGql = gql`
  query GetStylesList {
    style {
      id
      library_id
      name
    }
  }
`

/**
 * __useGetStylesListQuery__
 *
 * To run a query within a React component, call `useGetStylesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStylesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStylesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStylesListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStylesListQuery,
    GetStylesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStylesListQuery, GetStylesListQueryVariables>(
    GetStylesListGql,
    options,
  )
}
export function useGetStylesListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStylesListQuery,
    GetStylesListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetStylesListQuery, GetStylesListQueryVariables>(
    GetStylesListGql,
    options,
  )
}
export type GetStylesListQueryHookResult = ReturnType<
  typeof useGetStylesListQuery
>
export type GetStylesListLazyQueryHookResult = ReturnType<
  typeof useGetStylesListLazyQuery
>
export type GetStylesListQueryResult = Apollo.QueryResult<
  GetStylesListQuery,
  GetStylesListQueryVariables
>
export function refetchGetStylesListQuery(
  variables?: GetStylesListQueryVariables,
) {
  return { query: GetStylesListGql, variables: variables }
}
export const UpdateStyleGql = gql`
  mutation UpdateStyle($input: style_set_input!, $styleId: uuid!) {
    update_style_by_pk(_set: $input, pk_columns: { id: $styleId }) {
      id
      name
    }
  }
`
export type UpdateStyleMutationFn = Apollo.MutationFunction<
  UpdateStyleMutation,
  UpdateStyleMutationVariables
>

/**
 * __useUpdateStyleMutation__
 *
 * To run a mutation, you first call `useUpdateStyleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStyleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStyleMutation, { data, loading, error }] = useUpdateStyleMutation({
 *   variables: {
 *      input: // value for 'input'
 *      styleId: // value for 'styleId'
 *   },
 * });
 */
export function useUpdateStyleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateStyleMutation,
    UpdateStyleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateStyleMutation, UpdateStyleMutationVariables>(
    UpdateStyleGql,
    options,
  )
}
export type UpdateStyleMutationHookResult = ReturnType<
  typeof useUpdateStyleMutation
>
export type UpdateStyleMutationResult =
  Apollo.MutationResult<UpdateStyleMutation>
export type UpdateStyleMutationOptions = Apollo.BaseMutationOptions<
  UpdateStyleMutation,
  UpdateStyleMutationVariables
>
export const UpsertUserGql = gql`
  mutation UpsertUser($userId: String!) {
    insert_user(
      objects: [{ id: $userId }]
      on_conflict: { constraint: users_pkey, update_columns: [] }
    ) {
      affected_rows
    }
  }
`
export type UpsertUserMutationFn = Apollo.MutationFunction<
  UpsertUserMutation,
  UpsertUserMutationVariables
>

/**
 * __useUpsertUserMutation__
 *
 * To run a mutation, you first call `useUpsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserMutation, { data, loading, error }] = useUpsertUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpsertUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertUserMutation,
    UpsertUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpsertUserMutation, UpsertUserMutationVariables>(
    UpsertUserGql,
    options,
  )
}
export type UpsertUserMutationHookResult = ReturnType<
  typeof useUpsertUserMutation
>
export type UpsertUserMutationResult = Apollo.MutationResult<UpsertUserMutation>
export type UpsertUserMutationOptions = Apollo.BaseMutationOptions<
  UpsertUserMutation,
  UpsertUserMutationVariables
>
export const LibraryExplorer__Atom = gql`
  fragment LibraryExplorer__Atom on atom {
    id
    type {
      id
      label
    }
  }
`
export const __Tag = gql`
  fragment __Tag on tag {
    id
    category_id
    label
    library_id
  }
`
export const Library__Category = gql`
  fragment Library__Category on category {
    id
    name
    tags {
      ...__Tag
    }
  }
  ${__Tag}
`
export const LibraryExplorer__Component = gql`
  fragment LibraryExplorer__Component on component {
    id
    label
  }
`
export const Library__Lambda = gql`
  fragment Library__Lambda on lambda {
    id
    body
    name
  }
`
export const __Library = gql`
  fragment __Library on library {
    id
    name
  }
`
export const ComponentElement__Hoc = gql`
  fragment ComponentElement__Hoc on hoc {
    id
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${__Tag}
`
export const ValueType = gql`
  fragment ValueType on value_type {
    description
    value
  }
`
export const PropTypeCollection__PropType = gql`
  fragment PropTypeCollection__PropType on prop_type {
    id
    key
    prop_type_c_id
    is_array
    type {
      ...ValueType
    }
    value_type
  }
  ${ValueType}
`
export const Prop__PropValue = gql`
  fragment Prop__PropValue on prop_value {
    id
    prop_id
    tags {
      tag {
        ...__Tag
      }
    }
    type
    typeEntity {
      ...ValueType
    }
    value
  }
  ${__Tag}
  ${ValueType}
`
export const PropCollection__Prop = gql`
  fragment PropCollection__Prop on prop {
    id
    prop_c_id
    type {
      ...PropTypeCollection__PropType
    }
    values {
      ...Prop__PropValue
    }
  }
  ${PropTypeCollection__PropType}
  ${Prop__PropValue}
`
export const PropCollection = gql`
  fragment PropCollection on prop_c {
    id
    label
    libary_id
    props {
      ...PropCollection__Prop
    }
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${PropCollection__Prop}
  ${__Tag}
`
export const Library__Style = gql`
  fragment Library__Style on style {
    id
    name
    propCollection {
      ...PropCollection
    }
  }
  ${PropCollection}
`
export const __AtomType = gql`
  fragment __AtomType on atom_type {
    id
    label
  }
`
export const PropTypeCollection = gql`
  fragment PropTypeCollection on prop_type_c {
    id
    label
    library_id
    propTypes {
      ...PropTypeCollection__PropType
    }
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${PropTypeCollection__PropType}
  ${__Tag}
`
export const __Atom = gql`
  fragment __Atom on atom {
    id
    type {
      ...__AtomType
    }
    props {
      ...PropTypeCollection
    }
    styles {
      style {
        ...Library__Style
      }
    }
    tags {
      tag {
        ...__Tag
      }
    }
  }
  ${__AtomType}
  ${PropTypeCollection}
  ${Library__Style}
  ${__Tag}
`
export const __ComponentElement = gql`
  fragment __ComponentElement on component_element {
    id
    label
    hocs {
      hoc {
        ...ComponentElement__Hoc
      }
    }
    props {
      ...PropCollection
    }
    styles {
      style {
        ...Library__Style
      }
    }
    atom {
      ...__Atom
    }
  }
  ${ComponentElement__Hoc}
  ${PropCollection}
  ${Library__Style}
  ${__Atom}
`
export const PageElement__ComponentLink = gql`
  fragment PageElement__ComponentLink on component_link {
    id
    order
    props
    source_component_element_id
    target_component_element_id
  }
`
export const __Component = gql`
  fragment __Component on component {
    id
    label
    elements {
      ...__ComponentElement
    }
    links {
      ...PageElement__ComponentLink
    }
  }
  ${__ComponentElement}
  ${PageElement__ComponentLink}
`
export const Page__PageElement = gql`
  fragment Page__PageElement on page_element {
    id
    name
    page_id
    component {
      ...__Component
    }
    props {
      ...PropCollection
    }
  }
  ${__Component}
  ${PropCollection}
`
export const Page__PageLink = gql`
  fragment Page__PageLink on page_link {
    id
    order
    props
    source_page_element_id
    source_component_element_id
    target_page_element_id
  }
`
export const App__Page = gql`
  fragment App__Page on page {
    id
    name
    app_id
    elements {
      ...Page__PageElement
    }
    links {
      ...Page__PageLink
    }
  }
  ${Page__PageElement}
  ${Page__PageLink}
`
export const User__App = gql`
  fragment User__App on app {
    id
    user_id
    name
    pages {
      ...App__Page
    }
  }
  ${App__Page}
`
export const __User = gql`
  fragment __User on user {
    id
    name
    apps {
      ...User__App
    }
  }
  ${User__App}
`
export const DeleteUserApps = gql`
  mutation DeleteUserApps($userId: String!) {
    delete_app(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
  }
`
export const GetAppPage = gql`
  query GetAppPage($appId: uuid!, $pageId: uuid!) {
    app_by_pk(id: $appId) {
      ...User__App
    }
    page_by_pk(id: $pageId) {
      ...App__Page
    }
  }
  ${User__App}
  ${App__Page}
`
export const CreateApp = gql`
  mutation CreateApp($input: app_insert_input!) {
    insert_app_one(object: $input) {
      ...User__App
    }
  }
  ${User__App}
`
export const DeleteApp = gql`
  mutation DeleteApp($id: uuid!) {
    delete_app_by_pk(id: $id) {
      ...User__App
    }
  }
  ${User__App}
`
export const GetApp = gql`
  query GetApp($appId: uuid!) {
    app_by_pk(id: $appId) {
      ...User__App
    }
  }
  ${User__App}
`
export const GetAppsList = gql`
  query GetAppsList {
    app {
      ...User__App
    }
  }
  ${User__App}
`
export const GetAppsListForUser = gql`
  query GetAppsListForUser($userId: String!) {
    app(where: { user_id: { _eq: $userId } }) {
      ...User__App
    }
  }
  ${User__App}
`
export const GetFirstApp = gql`
  query GetFirstApp {
    app(limit: 1) {
      id
      name
      pages {
        id
        name
      }
    }
  }
`
export const EditApp = gql`
  mutation EditApp($input: app_set_input!, $id: uuid!) {
    update_app_by_pk(_set: $input, pk_columns: { id: $id }) {
      name
    }
  }
`
export const CreateAtomType = gql`
  mutation CreateAtomType($input: atom_type_insert_input!) {
    insert_atom_type_one(object: $input) {
      ...__AtomType
    }
  }
  ${__AtomType}
`
export const DeleteAtomTypesWhere = gql`
  mutation DeleteAtomTypesWhere($where: atom_type_bool_exp!) {
    delete_atom_type(where: $where) {
      returning {
        ...__AtomType
      }
    }
  }
  ${__AtomType}
`
export const GetAtomType = gql`
  query GetAtomType($atomTypeId: uuid!) {
    atom_type_by_pk(id: $atomTypeId) {
      ...__AtomType
    }
  }
  ${__AtomType}
`
export const GetAtomTypes = gql`
  query GetAtomTypes {
    atom_type {
      ...__AtomType
    }
  }
  ${__AtomType}
`
export const GetAtomTypesWhere = gql`
  query GetAtomTypesWhere($where: atom_type_bool_exp!) {
    atom_type(where: $where) {
      ...__AtomType
    }
  }
  ${__AtomType}
`
export const UpdateAtomType = gql`
  mutation UpdateAtomType($input: atom_type_set_input!, $atomTypeId: uuid!) {
    update_atom_type_by_pk(_set: $input, pk_columns: { id: $atomTypeId }) {
      ...__AtomType
    }
  }
  ${__AtomType}
`
export const CreateAtom = gql`
  mutation CreateAtom($data: atom_insert_input!) {
    insert_atom_one(object: $data) {
      ...LibraryExplorer__Atom
    }
  }
  ${LibraryExplorer__Atom}
`
export const DeleteAllAtoms = gql`
  mutation DeleteAllAtoms {
    delete_atom(where: {}) {
      affected_rows
    }
  }
`
export const DeleteAtom = gql`
  mutation DeleteAtom($atomId: uuid!) {
    delete_atom_by_pk(id: $atomId) {
      ...LibraryExplorer__Atom
    }
  }
  ${LibraryExplorer__Atom}
`
export const DeleteAtomsWhere = gql`
  mutation DeleteAtomsWhere($where: atom_bool_exp!) {
    delete_atom(where: $where) {
      returning {
        ...__Atom
      }
    }
  }
  ${__Atom}
`
export const GetAtom = gql`
  query GetAtom($atomId: uuid!) {
    atom_by_pk(id: $atomId) {
      ...__Atom
    }
  }
  ${__Atom}
`
export const GetAtomsList = gql`
  query GetAtomsList {
    atom {
      ...__Atom
    }
  }
  ${__Atom}
`
export const GetAtomsTypes = gql`
  query GetAtomsTypes {
    atom_type {
      ...__AtomType
    }
  }
  ${__AtomType}
`
export const GetAtomsWhere = gql`
  query GetAtomsWhere($where: atom_bool_exp!) {
    atom(where: $where) {
      ...__Atom
    }
  }
  ${__Atom}
`
export const UpdateAtom = gql`
  mutation UpdateAtom($input: atom_set_input!, $atomId: uuid!) {
    update_atom_by_pk(_set: $input, pk_columns: { id: $atomId }) {
      ...LibraryExplorer__Atom
    }
  }
  ${LibraryExplorer__Atom}
`
export const AddChildComponentElement = gql`
  mutation AddChildComponentElement($data: component_link_insert_input!) {
    insert_component_link_one(object: $data) {
      ...PageElement__ComponentLink
    }
  }
  ${PageElement__ComponentLink}
`
export const CreateComponentElement = gql`
  mutation CreateComponentElement($input: component_element_insert_input!) {
    insert_component_element_one(object: $input) {
      ...__ComponentElement
    }
  }
  ${__ComponentElement}
`
export const CreateComponentLink = gql`
  mutation CreateComponentLink($input: component_link_insert_input!) {
    insert_component_link_one(object: $input) {
      ...PageElement__ComponentLink
    }
  }
  ${PageElement__ComponentLink}
`
export const DeleteComponentElements = gql`
  mutation DeleteComponentElements($where: component_element_bool_exp!) {
    delete_component_element(where: $where) {
      returning {
        ...__ComponentElement
      }
    }
  }
  ${__ComponentElement}
`
export const GetComponentElement = gql`
  query GetComponentElement($componentElementId: uuid!) {
    component_element_by_pk(id: $componentElementId) {
      ...__ComponentElement
    }
  }
  ${__ComponentElement}
`
export const GetComponentElementsWhere = gql`
  query GetComponentElementsWhere($where: component_element_bool_exp!) {
    component_element(where: $where) {
      ...__ComponentElement
    }
  }
  ${__ComponentElement}
`
export const UpdateComponentElement = gql`
  mutation UpdateComponentElement(
    $componentElementId: uuid!
    $input: component_element_set_input!
  ) {
    update_component_element_by_pk(
      pk_columns: { id: $componentElementId }
      _set: $input
    ) {
      ...__ComponentElement
    }
  }
  ${__ComponentElement}
`
export const CreateComponent = gql`
  mutation CreateComponent($input: component_insert_input!) {
    insert_component_one(object: $input) {
      ...LibraryExplorer__Component
    }
  }
  ${LibraryExplorer__Component}
`
export const DeleteAllComponents = gql`
  mutation DeleteAllComponents {
    delete_component(where: {}) {
      affected_rows
    }
  }
`
export const DeleteComponent = gql`
  mutation DeleteComponent($componentId: uuid!) {
    delete_component_by_pk(id: $componentId) {
      ...LibraryExplorer__Component
    }
  }
  ${LibraryExplorer__Component}
`
export const DeleteComponentsWhere = gql`
  mutation DeleteComponentsWhere($where: component_bool_exp!) {
    delete_component(where: $where) {
      returning {
        ...__Component
      }
    }
  }
  ${__Component}
`
export const GetComponent = gql`
  query GetComponent($componentId: uuid!) {
    component_by_pk(id: $componentId) {
      ...__Component
    }
  }
  ${__Component}
`
export const GetComponentDetail = gql`
  query GetComponentDetail($componentId: uuid!) {
    component_by_pk(id: $componentId) {
      ...__Component
    }
  }
  ${__Component}
`
export const GetComponents = gql`
  query GetComponents {
    component {
      ...__Component
    }
  }
  ${__Component}
`
export const UpdateComponent = gql`
  mutation UpdateComponent($componentId: uuid!, $input: component_set_input!) {
    update_component_by_pk(pk_columns: { id: $componentId }, _set: $input) {
      ...LibraryExplorer__Component
    }
  }
  ${LibraryExplorer__Component}
`
export const CreateLambda = gql`
  mutation CreateLambda($input: [lambda_insert_input!]!) {
    insert_lambda(objects: $input) {
      returning {
        id
        libraryId
        name
        body
      }
    }
  }
`
export const DeleteLambda = gql`
  mutation DeleteLambda($id: uuid!) {
    delete_lambda(where: { id: { _eq: $id } }) {
      returning {
        id
        name
        body
      }
    }
  }
`
export const ExecuteLambda = gql`
  mutation ExecuteLambda($lambda: LambdaInput!, $payload: String!) {
    executeLambda(lambda: $lambda, payload: $payload) {
      payload
    }
  }
`
export const GetLambdaById = gql`
  query GetLambdaById($id: uuid!) {
    lambda(where: { id: { _eq: $id } }) {
      body
      id
      libraryId
      name
    }
  }
`
export const GetLambdas = gql`
  query GetLambdas {
    lambda {
      body
      id
      libraryId
      name
    }
  }
`
export const GetLambdasByLibraryId = gql`
  query GetLambdasByLibraryId($libraryId: uuid!) {
    lambda(where: { libraryId: { _eq: $libraryId } }) {
      body
      id
      libraryId
      name
    }
  }
`
export const UpdateLambda = gql`
  mutation UpdateLambda($id: uuid!, $body: String, $name: String) {
    update_lambda(
      where: { id: { _eq: $id } }
      _set: { body: $body, name: $name }
    ) {
      returning {
        id
        libraryId
        name
        body
      }
    }
  }
`
export const GetFirstLibrary = gql`
  query GetFirstLibrary {
    library(limit: 1) {
      ...__Library
    }
  }
  ${__Library}
`
export const GetLibrary = gql`
  query GetLibrary($libraryId: uuid!) {
    library_by_pk(id: $libraryId) {
      ...__Library
    }
  }
  ${__Library}
`
export const CreateLibrary = gql`
  mutation CreateLibrary($data: library_insert_input!) {
    insert_library_one(object: $data) {
      ...__Library
    }
  }
  ${__Library}
`
export const DeleteLibrary = gql`
  mutation DeleteLibrary($libraryId: uuid!) {
    delete_library_by_pk(id: $libraryId) {
      id
    }
  }
`
export const DeleteUserLibraries = gql`
  mutation DeleteUserLibraries($userId: String!) {
    delete_library(where: { user_id: { _eq: $userId } }) {
      affected_rows
    }
  }
`
export const LibraryExplorer = gql`
  query LibraryExplorer {
    library {
      id
      name
      components {
        ...LibraryExplorer__Component
      }
      atoms {
        ...LibraryExplorer__Atom
      }
    }
  }
  ${LibraryExplorer__Component}
  ${LibraryExplorer__Atom}
`
export const UpdateLibrary = gql`
  mutation UpdateLibrary($input: library_set_input!, $libraryId: uuid!) {
    update_library_by_pk(_set: $input, pk_columns: { id: $libraryId }) {
      ...__Library
    }
  }
  ${__Library}
`
export const CreatePage = gql`
  mutation CreatePage($data: page_insert_input!) {
    insert_page_one(object: $data) {
      ...App__Page
    }
  }
  ${App__Page}
`
export const DeletePage = gql`
  mutation DeletePage($pageId: uuid!) {
    delete_page_by_pk(id: $pageId) {
      ...App__Page
    }
  }
  ${App__Page}
`
export const GetPage = gql`
  query GetPage($pageId: uuid!) {
    page_by_pk(id: $pageId) {
      ...App__Page
    }
  }
  ${App__Page}
`
export const GetPagesList = gql`
  query GetPagesList($appId: uuid!) {
    app_by_pk(id: $appId) {
      pages {
        id
        name
      }
    }
  }
`
export const CreatePageElement = gql`
  mutation CreatePageElement($input: page_element_insert_input!) {
    insert_page_element_one(object: $input) {
      ...Page__PageElement
    }
  }
  ${Page__PageElement}
`
export const DeletePageElement = gql`
  mutation DeletePageElement($pageElementId: uuid!) {
    delete_page_element_by_pk(id: $pageElementId) {
      ...Page__PageElement
    }
  }
  ${Page__PageElement}
`
export const GetPageElement = gql`
  query GetPageElement($pageElementId: uuid!) {
    page_element_by_pk(id: $pageElementId) {
      ...Page__PageElement
    }
  }
  ${Page__PageElement}
`
export const UpdatePageElement = gql`
  mutation UpdatePageElement($id: uuid!, $input: page_element_set_input) {
    update_page_element_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...Page__PageElement
    }
  }
  ${Page__PageElement}
`
export const UpdatePage = gql`
  mutation UpdatePage($input: page_set_input!, $pageId: uuid!) {
    update_page_by_pk(_set: $input, pk_columns: { id: $pageId }) {
      ...App__Page
    }
  }
  ${App__Page}
`
export const CreatePropTypeC = gql`
  mutation CreatePropTypeC($data: prop_type_c_insert_input!) {
    insert_prop_type_c_one(object: $data) {
      id
    }
  }
`
export const DeletePropTypeC = gql`
  mutation DeletePropTypeC($propTypeCId: uuid!) {
    delete_prop_type_c_by_pk(id: $propTypeCId) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollection}
`
export const GetPropTypeC = gql`
  query GetPropTypeC($propTypeCId: uuid!) {
    prop_type_c_by_pk(id: $propTypeCId) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollection}
`
export const GetPropTypeCList = gql`
  query GetPropTypeCList($where: prop_type_c_bool_exp) {
    prop_type_c(where: $where) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollection}
`
export const UpdatePropTypeC = gql`
  mutation UpdatePropTypeC(
    $input: prop_type_c_set_input!
    $propTypeCId: uuid!
  ) {
    update_prop_type_c_by_pk(_set: $input, pk_columns: { id: $propTypeCId }) {
      ...PropTypeCollection
    }
  }
  ${PropTypeCollection}
`
export const UpsertPropTypeC = gql`
  mutation UpsertPropTypeC($object: prop_type_c_insert_input!) {
    insert_prop_type_c(
      objects: [$object]
      on_conflict: { constraint: prop_type_c_pkey, update_columns: [label] }
    ) {
      affected_rows
    }
  }
`
export const CreatePageElementProp = gql`
  mutation CreatePageElementProp($propInput: prop_insert_input!) {
    insert_prop_one(object: $propInput) {
      ...PropCollection__Prop
    }
  }
  ${PropCollection__Prop}
`
export const CreateProp = gql`
  mutation CreateProp($input: prop_insert_input!) {
    insert_prop_one(object: $input) {
      id
    }
  }
`
export const PageElementProp = gql`
  query PageElementProp($pageElementId: uuid!) {
    page_element_by_pk(id: $pageElementId) {
      ...Page__PageElement
    }
  }
  ${Page__PageElement}
`
export const UpdateProp = gql`
  mutation UpdateProp($input: prop_set_input!, $propId: uuid!) {
    update_prop_by_pk(pk_columns: { id: $propId }, _set: $input) {
      id
      ...PropCollection__Prop
    }
  }
  ${PropCollection__Prop}
`
export const UpdatePropValue = gql`
  mutation UpdatePropValue($propValueId: uuid!, $input: prop_value_set_input!) {
    update_prop_value_by_pk(pk_columns: { id: $propValueId }, _set: $input) {
      ...Prop__PropValue
    }
  }
  ${Prop__PropValue}
`
export const GetStyle = gql`
  query GetStyle($styleId: uuid!) {
    style_by_pk(id: $styleId) {
      id
      name
      library_id
    }
  }
`
export const CreateStyle = gql`
  mutation CreateStyle($data: style_insert_input!) {
    insert_style_one(object: $data) {
      id
    }
  }
`
export const DeleteStyle = gql`
  mutation DeleteStyle($styleId: uuid!) {
    delete_style_by_pk(id: $styleId) {
      id
    }
  }
`
export const GetStylesList = gql`
  query GetStylesList {
    style {
      id
      library_id
      name
    }
  }
`
export const UpdateStyle = gql`
  mutation UpdateStyle($input: style_set_input!, $styleId: uuid!) {
    update_style_by_pk(_set: $input, pk_columns: { id: $styleId }) {
      id
      name
    }
  }
`
export const UpsertUser = gql`
  mutation UpsertUser($userId: String!) {
    insert_user(
      objects: [{ id: $userId }]
      on_conflict: { constraint: users_pkey, update_columns: [] }
    ) {
      affected_rows
    }
  }
`
