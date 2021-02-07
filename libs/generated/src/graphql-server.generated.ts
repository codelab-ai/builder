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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export type Edge = {
  __typename?: 'Edge'
  id: Scalars['String']
  source: Scalars['String']
  type?: Maybe<Scalars['String']>
  target: Scalars['String']
  props?: Maybe<Scalars['JSONObject']>
  order: Scalars['Float']
}

export type Vertex = {
  __typename?: 'Vertex'
  id: Scalars['String']
  type?: Maybe<Scalars['String']>
  props?: Maybe<Scalars['JSONObject']>
  graph?: Maybe<Graph>
  parent?: Maybe<Vertex>
  children: Array<Vertex>
}

export type Graph = {
  __typename?: 'Graph'
  id: Scalars['String']
  type?: Maybe<Scalars['String']>
  props?: Maybe<Scalars['JSONObject']>
  label: Scalars['String']
  vertices: Array<Vertex>
  edges: Array<Edge>
  tree: Scalars['JSONObject']
}

export type Page = {
  __typename?: 'Page'
  id: Scalars['String']
  title: Scalars['String']
  graphs: Array<Graph>
}

export type App = {
  __typename?: 'App'
  id: Scalars['String']
  title: Scalars['String']
  pages: Array<Page>
}

export type User = {
  __typename?: 'User'
  id: Scalars['String']
  email: Scalars['String']
  accessToken: Scalars['String']
  apps: Array<App>
}

export type Query = {
  __typename?: 'Query'
  getApp?: Maybe<App>
  getApps: Array<App>
  getBuilder: Builder
  getGraph: Graph
  getLayout: Layout
  getMe: User
  getPage: Page
  getPages: Array<Page>
  getVertex?: Maybe<Vertex>
}

export type QueryGetAppArgs = {
  input: GetAppInput
}

export type QueryGetGraphArgs = {
  input: GetGraphInput
}

export type QueryGetPageArgs = {
  input: GetPageInput
}

export type QueryGetPagesArgs = {
  input: GetPagesInput
}

export type QueryGetVertexArgs = {
  input: GetVertexInput
}

export type GetAppInput = {
  appId: Scalars['String']
}

export type GetGraphInput = {
  id?: Maybe<Scalars['String']>
}

export type GetVertexInput = {
  id: Scalars['String']
}

export type GetPagesInput = {
  appId: Scalars['String']
}

export type GetPageInput = {
  pageId: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  addChildVertex: Vertex
  createApp: App
  createGraph: Graph
  createPage: Page
  deleteApp: App
  deletePage: Page
  deleteUser: User
  deleteVertex: Vertex
  loginUser: User
  modeVertex: Vertex
  registerUser: User
  setBuilder: Builder
  setLayout: Layout
  updateApp: App
  updateEdge: Edge
  updatePage: Page
  updateUser: User
  updateVertex: Vertex
}

export type MutationAddChildVertexArgs = {
  input: AddChildVertexInput
}

export type MutationCreateAppArgs = {
  input: CreateAppInput
}

export type MutationCreateGraphArgs = {
  input: CreateGraphInput
}

export type MutationCreatePageArgs = {
  input: CreatePageInput
}

export type MutationDeleteAppArgs = {
  input: DeleteAppInput
}

export type MutationDeletePageArgs = {
  input: DeletePageInput
}

export type MutationDeleteUserArgs = {
  input: DeleteUserInput
}

export type MutationDeleteVertexArgs = {
  input: DeleteVertexInput
}

export type MutationLoginUserArgs = {
  input: LoginUserInput
}

export type MutationModeVertexArgs = {
  input: MoveVertexInput
}

export type MutationRegisterUserArgs = {
  input: RegisterUserInput
}

export type MutationSetBuilderArgs = {
  input: SetBuilderInput
}

export type MutationSetLayoutArgs = {
  input: SetLayoutInput
}

export type MutationUpdateAppArgs = {
  input: UpdateAppInput
}

export type MutationUpdateEdgeArgs = {
  input: UpdateEdgeInput
}

export type MutationUpdatePageArgs = {
  input: UpdatePageInput
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type MutationUpdateVertexArgs = {
  input: UpdateVertexInput
}

export type CreateAppInput = {
  title: Scalars['String']
}

export type UpdateAppInput = {
  id: Scalars['String']
  title: Scalars['String']
}

export type DeleteAppInput = {
  id: Scalars['String']
}

export type DeleteUserInput = {
  email: Scalars['String']
}

export type UpdateUserInput = {
  id: Scalars['String']
  email: Scalars['String']
}

export type RegisterUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type LoginUserInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type CreateGraphInput = {
  label: Scalars['String']
}

export type AddChildVertexInput = {
  parentVertexId?: Maybe<Scalars['String']>
  vertex: CreateVertexInput
  order?: Maybe<Scalars['Float']>
}

export type CreateVertexInput = {
  type: Scalars['String']
  props?: Maybe<Scalars['JSONObject']>
}

export type MoveVertexInput = {
  currentVertexId: Scalars['String']
  parentVertexId: Scalars['String']
}

export type UpdateVertexInput = {
  vertexId: Scalars['String']
  type?: Maybe<Scalars['String']>
  props?: Maybe<Scalars['JSONObject']>
}

export type DeleteVertexInput = {
  vertexId: Scalars['String']
}

export type UpdateEdgeInput = {
  id: Scalars['String']
  order: Scalars['Float']
  type: Scalars['String']
  source: Scalars['String']
  target: Scalars['String']
}

export type CreatePageInput = {
  title: Scalars['String']
  appId: Scalars['String']
}

export type UpdatePageInput = {
  title?: Maybe<Scalars['String']>
  pageId: Scalars['String']
}

export type DeletePageInput = {
  pageId: Scalars['String']
}

export type PositionInput = {
  x: Scalars['Int']
  y: Scalars['Int']
}

export type SetBuilderInput = {
  position?: Maybe<PositionInput>
  windowPosition?: Maybe<PositionInput>
  component?: Maybe<Scalars['String']>
}

export type SetLayoutInput = {
  tab?: Maybe<LayoutTab>
  pane?: Maybe<LayoutPane>
  paneVisibility?: Maybe<LayoutPaneVisibility>
}

export type Layout = {
  __typename?: 'Layout'
  tab: LayoutTab
  pane: LayoutPane
  paneVisibility: LayoutPaneVisibility
}

export type Builder = {
  __typename?: 'Builder'
  position: Position
  windowPosition: Position
  component?: Maybe<Scalars['String']>
  isDragging: Scalars['Boolean']
}

export type Position = {
  __typename?: 'Position'
  x: Scalars['Int']
  y: Scalars['Int']
}

export enum LayoutTab {
  Component = 'Component',
  Page = 'Page',
  Tree = 'Tree',
}

export enum LayoutPane {
  Main = 'Main',
  Detail = 'Detail',
  Both = 'Both',
  None = 'None',
}

export enum LayoutPaneVisibility {
  Main = 'Main',
  Detail = 'Detail',
  Both = 'Both',
  None = 'None',
}

export type GetBuilderQueryVariables = Exact<{ [key: string]: never }>

export type GetBuilderQuery = { __typename?: 'Query' } & {
  getBuilder: { __typename?: 'Builder' } & BuilderFragmentsFragment
}

export type SetBuilderMutationVariables = Exact<{
  input: SetBuilderInput
}>

export type SetBuilderMutation = { __typename?: 'Mutation' } & {
  setBuilder: { __typename?: 'Builder' } & BuilderFragmentsFragment
}

export type BuilderFragmentsFragment = { __typename?: 'Builder' } & Pick<
  Builder,
  'component' | 'isDragging'
> & {
    position: { __typename?: 'Position' } & PositionFragmentsFragment
    windowPosition: { __typename?: 'Position' } & PositionFragmentsFragment
  }

export type GetLayoutQueryVariables = Exact<{ [key: string]: never }>

export type GetLayoutQuery = { __typename?: 'Query' } & {
  getLayout: { __typename?: 'Layout' } & LayoutFragmentsFragment
}

export type SetLayoutMutationVariables = Exact<{
  input: SetLayoutInput
}>

export type SetLayoutMutation = { __typename?: 'Mutation' } & {
  setLayout: { __typename?: 'Layout' } & LayoutFragmentsFragment
}

export type LayoutFragmentsFragment = { __typename?: 'Layout' } & Pick<
  Layout,
  'tab' | 'pane' | 'paneVisibility'
>

export type PositionFragmentsFragment = { __typename?: 'Position' } & Pick<
  Position,
  'x' | 'y'
>

export type CreateAppMutationVariables = Exact<{
  input: CreateAppInput
}>

export type CreateAppMutation = { __typename?: 'Mutation' } & {
  createApp: { __typename?: 'App' } & Pick<App, 'id' | 'title'>
}

export type DeleteAppMutationVariables = Exact<{
  input: DeleteAppInput
}>

export type DeleteAppMutation = { __typename?: 'Mutation' } & {
  deleteApp: { __typename?: 'App' } & Pick<App, 'id' | 'title'>
}

export type GetAppQueryVariables = Exact<{
  input: GetAppInput
}>

export type GetAppQuery = { __typename?: 'Query' } & {
  getApp?: Maybe<{ __typename?: 'App' } & AppFragmentsFragment>
}

export type GetAppsQueryVariables = Exact<{ [key: string]: never }>

export type GetAppsQuery = { __typename?: 'Query' } & {
  getApps: Array<{ __typename?: 'App' } & AppFragmentsFragment>
}

export type UpdateAppMutationVariables = Exact<{
  input: UpdateAppInput
}>

export type UpdateAppMutation = { __typename?: 'Mutation' } & {
  updateApp: { __typename?: 'App' } & Pick<App, 'id' | 'title'>
}

export type AppFragmentsFragment = { __typename?: 'App' } & Pick<
  App,
  'id' | 'title'
> & { pages: Array<{ __typename?: 'Page' } & PageFragmentsFragment> }

export type AddChildVertexMutationVariables = Exact<{
  input: AddChildVertexInput
}>

export type AddChildVertexMutation = { __typename?: 'Mutation' } & {
  addChildVertex: { __typename?: 'Vertex' } & VertexFragmentsFragment
}

export type CreateGraphMutationVariables = Exact<{
  input: CreateGraphInput
}>

export type CreateGraphMutation = { __typename?: 'Mutation' } & {
  createGraph: { __typename?: 'Graph' } & Pick<Graph, 'id' | 'label'>
}

export type DeleteVertexMutationVariables = Exact<{
  input: DeleteVertexInput
}>

export type DeleteVertexMutation = { __typename?: 'Mutation' } & {
  deleteVertex: { __typename?: 'Vertex' } & VertexFragmentsFragment
}

export type GetGraphQueryVariables = Exact<{
  input: GetGraphInput
}>

export type GetGraphQuery = { __typename?: 'Query' } & {
  getGraph: { __typename?: 'Graph' } & GraphFragmentsFragment
}

export type GetVertexQueryVariables = Exact<{
  input: GetVertexInput
}>

export type GetVertexQuery = { __typename?: 'Query' } & {
  getVertex?: Maybe<{ __typename?: 'Vertex' } & VertexFragmentsFragment>
}

export type MoveVertexMutationVariables = Exact<{
  input: MoveVertexInput
}>

export type MoveVertexMutation = { __typename?: 'Mutation' } & {
  modeVertex: { __typename?: 'Vertex' } & VertexFragmentsFragment
}

export type UpdateEdgeMutationVariables = Exact<{
  input: UpdateEdgeInput
}>

export type UpdateEdgeMutation = { __typename?: 'Mutation' } & {
  updateEdge: { __typename?: 'Edge' } & EdgeFragmentsFragment
}

export type UpdateVertexMutationVariables = Exact<{
  input: UpdateVertexInput
}>

export type UpdateVertexMutation = { __typename?: 'Mutation' } & {
  updateVertex: { __typename?: 'Vertex' } & VertexFragmentsFragment
}

export type EdgeFragmentsFragment = { __typename?: 'Edge' } & Pick<
  Edge,
  'id' | 'type' | 'props' | 'source' | 'target'
>

export type GraphFragmentsFragment = { __typename?: 'Graph' } & Pick<
  Graph,
  'id' | 'type' | 'label'
> & {
    vertices: Array<{ __typename?: 'Vertex' } & VertexFragmentsFragment>
    edges: Array<{ __typename?: 'Edge' } & EdgeFragmentsFragment>
  }

export type VertexFragmentsFragment = { __typename?: 'Vertex' } & Pick<
  Vertex,
  'id' | 'type' | 'props'
> & {
    parent?: Maybe<{ __typename?: 'Vertex' } & Pick<Vertex, 'id' | 'type'>>
    graph?: Maybe<{ __typename?: 'Graph' } & Pick<Graph, 'id'>>
  }

export type CreatePageMutationVariables = Exact<{
  input: CreatePageInput
}>

export type CreatePageMutation = { __typename?: 'Mutation' } & {
  createPage: { __typename?: 'Page' } & PageFragmentsFragment
}

export type DeletePageMutationVariables = Exact<{
  input: DeletePageInput
}>

export type DeletePageMutation = { __typename?: 'Mutation' } & {
  deletePage: { __typename?: 'Page' } & Pick<Page, 'title'>
}

export type GetPageQueryVariables = Exact<{
  input: GetPageInput
}>

export type GetPageQuery = { __typename?: 'Query' } & {
  getPage: { __typename?: 'Page' } & PageFragmentsFragment
}

export type GetPagesQueryVariables = Exact<{
  input: GetPagesInput
}>

export type GetPagesQuery = { __typename?: 'Query' } & {
  getPages: Array<{ __typename?: 'Page' } & PageFragmentsFragment>
}

export type UpdatePageMutationVariables = Exact<{
  input: UpdatePageInput
}>

export type UpdatePageMutation = { __typename?: 'Mutation' } & {
  updatePage: { __typename?: 'Page' } & PageFragmentsFragment
}

export type PageFragmentsFragment = { __typename?: 'Page' } & Pick<
  Page,
  'id' | 'title'
> & { graphs: Array<{ __typename?: 'Graph' } & GraphFragmentsFragment> }

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput
}>

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  deleteUser: { __typename?: 'User' } & Pick<User, 'id' | 'email'>
}

export type GetMeQueryVariables = Exact<{ [key: string]: never }>

export type GetMeQuery = { __typename?: 'Query' } & {
  getMe: { __typename?: 'User' } & Pick<User, 'id' | 'email'>
}

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput
}>

export type LoginUserMutation = { __typename?: 'Mutation' } & {
  loginUser: { __typename?: 'User' } & Pick<User, 'email' | 'accessToken'>
}

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput
}>

export type RegisterUserMutation = { __typename?: 'Mutation' } & {
  registerUser: { __typename?: 'User' } & Pick<
    User,
    'id' | 'email' | 'accessToken'
  >
}

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput
}>

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser: { __typename?: 'User' } & Pick<User, 'email'>
}

export type UserFragmentsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'email'
> & { apps: Array<{ __typename?: 'App' } & AppFragmentsFragment> }

export const PositionFragments = gql`
  fragment positionFragments on Position {
    x
    y
  }
`
export const BuilderFragments = gql`
  fragment builderFragments on Builder {
    position {
      ...positionFragments
    }
    windowPosition {
      ...positionFragments
    }
    component
    isDragging
  }
  ${PositionFragments}
`
export const LayoutFragments = gql`
  fragment layoutFragments on Layout {
    tab
    pane
    paneVisibility
  }
`
export const VertexFragments = gql`
  fragment vertexFragments on Vertex {
    id
    type
    props
    parent {
      id
      type
    }
    graph {
      id
    }
  }
`
export const EdgeFragments = gql`
  fragment edgeFragments on Edge {
    id
    type
    props
    source
    target
  }
`
export const GraphFragments = gql`
  fragment graphFragments on Graph {
    id
    type
    label
    vertices {
      ...vertexFragments
    }
    edges {
      ...edgeFragments
    }
  }
  ${VertexFragments}
  ${EdgeFragments}
`
export const PageFragments = gql`
  fragment pageFragments on Page {
    id
    title
    graphs {
      ...graphFragments
    }
  }
  ${GraphFragments}
`
export const AppFragments = gql`
  fragment appFragments on App {
    id
    title
    pages {
      ...pageFragments
    }
  }
  ${PageFragments}
`
export const UserFragments = gql`
  fragment userFragments on User {
    id
    email
    apps {
      ...appFragments
    }
  }
  ${AppFragments}
`
export const GetBuilder = gql`
  query GetBuilder {
    getBuilder @client {
      ...builderFragments
    }
  }
  ${BuilderFragments}
`
export const SetBuilder = gql`
  mutation SetBuilder($input: SetBuilderInput!) {
    setBuilder(input: $input) @client {
      ...builderFragments
    }
  }
  ${BuilderFragments}
`
export const GetLayout = gql`
  query GetLayout {
    getLayout @client {
      ...layoutFragments
    }
  }
  ${LayoutFragments}
`
export const SetLayout = gql`
  mutation SetLayout($input: SetLayoutInput!) {
    setLayout(input: $input) @client {
      ...layoutFragments
    }
  }
  ${LayoutFragments}
`
export const CreateApp = gql`
  mutation CreateApp($input: CreateAppInput!) {
    createApp(input: $input) {
      id
      title
    }
  }
`
export const DeleteApp = gql`
  mutation DeleteApp($input: DeleteAppInput!) {
    deleteApp(input: $input) {
      id
      title
    }
  }
`
export const GetApp = gql`
  query GetApp($input: GetAppInput!) {
    getApp(input: $input) {
      ...appFragments
    }
  }
  ${AppFragments}
`
export const GetApps = gql`
  query GetApps {
    getApps {
      ...appFragments
    }
  }
  ${AppFragments}
`
export const UpdateApp = gql`
  mutation UpdateApp($input: UpdateAppInput!) {
    updateApp(input: $input) {
      id
      title
    }
  }
`
export const AddChildVertex = gql`
  mutation AddChildVertex($input: AddChildVertexInput!) {
    addChildVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragments}
`
export const CreateGraph = gql`
  mutation CreateGraph($input: CreateGraphInput!) {
    createGraph(input: $input) {
      id
      label
    }
  }
`
export const DeleteVertex = gql`
  mutation DeleteVertex($input: DeleteVertexInput!) {
    deleteVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragments}
`
export const GetGraph = gql`
  query GetGraph($input: GetGraphInput!) {
    getGraph(input: $input) {
      ...graphFragments
    }
  }
  ${GraphFragments}
`
export const GetVertex = gql`
  query GetVertex($input: GetVertexInput!) {
    getVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragments}
`
export const MoveVertex = gql`
  mutation MoveVertex($input: MoveVertexInput!) {
    modeVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragments}
`
export const UpdateEdge = gql`
  mutation UpdateEdge($input: UpdateEdgeInput!) {
    updateEdge(input: $input) {
      ...edgeFragments
    }
  }
  ${EdgeFragments}
`
export const UpdateVertex = gql`
  mutation UpdateVertex($input: UpdateVertexInput!) {
    updateVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragments}
`
export const CreatePage = gql`
  mutation CreatePage($input: CreatePageInput!) {
    createPage(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragments}
`
export const DeletePage = gql`
  mutation DeletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      title
    }
  }
`
export const GetPage = gql`
  query GetPage($input: GetPageInput!) {
    getPage(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragments}
`
export const GetPages = gql`
  query GetPages($input: GetPagesInput!) {
    getPages(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragments}
`
export const UpdatePage = gql`
  mutation UpdatePage($input: UpdatePageInput!) {
    updatePage(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragments}
`
export const DeleteUser = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      email
    }
  }
`
export const GetMe = gql`
  query GetMe {
    getMe {
      id
      email
    }
  }
`
export const LoginUser = gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      email
      accessToken
    }
  }
`
export const RegisterUser = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      id
      email
      accessToken
    }
  }
`
export const UpdateUser = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      email
    }
  }
`
export const PositionFragmentsFragmentDoc = gql`
  fragment positionFragments on Position {
    x
    y
  }
`
export const BuilderFragmentsFragmentDoc = gql`
  fragment builderFragments on Builder {
    position {
      ...positionFragments
    }
    windowPosition {
      ...positionFragments
    }
    component
    isDragging
  }
  ${PositionFragmentsFragmentDoc}
`
export const LayoutFragmentsFragmentDoc = gql`
  fragment layoutFragments on Layout {
    tab
    pane
    paneVisibility
  }
`
export const VertexFragmentsFragmentDoc = gql`
  fragment vertexFragments on Vertex {
    id
    type
    props
    parent {
      id
      type
    }
    graph {
      id
    }
  }
`
export const EdgeFragmentsFragmentDoc = gql`
  fragment edgeFragments on Edge {
    id
    type
    props
    source
    target
  }
`
export const GraphFragmentsFragmentDoc = gql`
  fragment graphFragments on Graph {
    id
    type
    label
    vertices {
      ...vertexFragments
    }
    edges {
      ...edgeFragments
    }
  }
  ${VertexFragmentsFragmentDoc}
  ${EdgeFragmentsFragmentDoc}
`
export const PageFragmentsFragmentDoc = gql`
  fragment pageFragments on Page {
    id
    title
    graphs {
      ...graphFragments
    }
  }
  ${GraphFragmentsFragmentDoc}
`
export const AppFragmentsFragmentDoc = gql`
  fragment appFragments on App {
    id
    title
    pages {
      ...pageFragments
    }
  }
  ${PageFragmentsFragmentDoc}
`
export const UserFragmentsFragmentDoc = gql`
  fragment userFragments on User {
    id
    email
    apps {
      ...appFragments
    }
  }
  ${AppFragmentsFragmentDoc}
`
export const GetBuilderGql = gql`
  query GetBuilder {
    getBuilder @client {
      ...builderFragments
    }
  }
  ${BuilderFragmentsFragmentDoc}
`

/**
 * __useGetBuilderQuery__
 *
 * To run a query within a React component, call `useGetBuilderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBuilderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBuilderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBuilderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBuilderQuery,
    GetBuilderQueryVariables
  >,
) {
  return Apollo.useQuery<GetBuilderQuery, GetBuilderQueryVariables>(
    GetBuilderGql,
    baseOptions,
  )
}
export function useGetBuilderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBuilderQuery,
    GetBuilderQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetBuilderQuery, GetBuilderQueryVariables>(
    GetBuilderGql,
    baseOptions,
  )
}
export type GetBuilderQueryHookResult = ReturnType<typeof useGetBuilderQuery>
export type GetBuilderLazyQueryHookResult = ReturnType<
  typeof useGetBuilderLazyQuery
>
export type GetBuilderQueryResult = Apollo.QueryResult<
  GetBuilderQuery,
  GetBuilderQueryVariables
>
export const SetBuilderGql = gql`
  mutation SetBuilder($input: SetBuilderInput!) {
    setBuilder(input: $input) @client {
      ...builderFragments
    }
  }
  ${BuilderFragmentsFragmentDoc}
`
export type SetBuilderMutationFn = Apollo.MutationFunction<
  SetBuilderMutation,
  SetBuilderMutationVariables
>

/**
 * __useSetBuilderMutation__
 *
 * To run a mutation, you first call `useSetBuilderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetBuilderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setBuilderMutation, { data, loading, error }] = useSetBuilderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetBuilderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetBuilderMutation,
    SetBuilderMutationVariables
  >,
) {
  return Apollo.useMutation<SetBuilderMutation, SetBuilderMutationVariables>(
    SetBuilderGql,
    baseOptions,
  )
}
export type SetBuilderMutationHookResult = ReturnType<
  typeof useSetBuilderMutation
>
export type SetBuilderMutationResult = Apollo.MutationResult<SetBuilderMutation>
export type SetBuilderMutationOptions = Apollo.BaseMutationOptions<
  SetBuilderMutation,
  SetBuilderMutationVariables
>
export const GetLayoutGql = gql`
  query GetLayout {
    getLayout @client {
      ...layoutFragments
    }
  }
  ${LayoutFragmentsFragmentDoc}
`

/**
 * __useGetLayoutQuery__
 *
 * To run a query within a React component, call `useGetLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLayoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLayoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLayoutQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLayoutQuery,
    GetLayoutQueryVariables
  >,
) {
  return Apollo.useQuery<GetLayoutQuery, GetLayoutQueryVariables>(
    GetLayoutGql,
    baseOptions,
  )
}
export function useGetLayoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLayoutQuery,
    GetLayoutQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetLayoutQuery, GetLayoutQueryVariables>(
    GetLayoutGql,
    baseOptions,
  )
}
export type GetLayoutQueryHookResult = ReturnType<typeof useGetLayoutQuery>
export type GetLayoutLazyQueryHookResult = ReturnType<
  typeof useGetLayoutLazyQuery
>
export type GetLayoutQueryResult = Apollo.QueryResult<
  GetLayoutQuery,
  GetLayoutQueryVariables
>
export const SetLayoutGql = gql`
  mutation SetLayout($input: SetLayoutInput!) {
    setLayout(input: $input) @client {
      ...layoutFragments
    }
  }
  ${LayoutFragmentsFragmentDoc}
`
export type SetLayoutMutationFn = Apollo.MutationFunction<
  SetLayoutMutation,
  SetLayoutMutationVariables
>

/**
 * __useSetLayoutMutation__
 *
 * To run a mutation, you first call `useSetLayoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetLayoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setLayoutMutation, { data, loading, error }] = useSetLayoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetLayoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SetLayoutMutation,
    SetLayoutMutationVariables
  >,
) {
  return Apollo.useMutation<SetLayoutMutation, SetLayoutMutationVariables>(
    SetLayoutGql,
    baseOptions,
  )
}
export type SetLayoutMutationHookResult = ReturnType<
  typeof useSetLayoutMutation
>
export type SetLayoutMutationResult = Apollo.MutationResult<SetLayoutMutation>
export type SetLayoutMutationOptions = Apollo.BaseMutationOptions<
  SetLayoutMutation,
  SetLayoutMutationVariables
>
export const CreateAppGql = gql`
  mutation CreateApp($input: CreateAppInput!) {
    createApp(input: $input) {
      id
      title
    }
  }
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
  return Apollo.useMutation<CreateAppMutation, CreateAppMutationVariables>(
    CreateAppGql,
    baseOptions,
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
  mutation DeleteApp($input: DeleteAppInput!) {
    deleteApp(input: $input) {
      id
      title
    }
  }
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAppMutation,
    DeleteAppMutationVariables
  >,
) {
  return Apollo.useMutation<DeleteAppMutation, DeleteAppMutationVariables>(
    DeleteAppGql,
    baseOptions,
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
  query GetApp($input: GetAppInput!) {
    getApp(input: $input) {
      ...appFragments
    }
  }
  ${AppFragmentsFragmentDoc}
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAppQuery(
  baseOptions: Apollo.QueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  return Apollo.useQuery<GetAppQuery, GetAppQueryVariables>(
    GetAppGql,
    baseOptions,
  )
}
export function useGetAppLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAppQuery, GetAppQueryVariables>,
) {
  return Apollo.useLazyQuery<GetAppQuery, GetAppQueryVariables>(
    GetAppGql,
    baseOptions,
  )
}
export type GetAppQueryHookResult = ReturnType<typeof useGetAppQuery>
export type GetAppLazyQueryHookResult = ReturnType<typeof useGetAppLazyQuery>
export type GetAppQueryResult = Apollo.QueryResult<
  GetAppQuery,
  GetAppQueryVariables
>
export const GetAppsGql = gql`
  query GetApps {
    getApps {
      ...appFragments
    }
  }
  ${AppFragmentsFragmentDoc}
`

/**
 * __useGetAppsQuery__
 *
 * To run a query within a React component, call `useGetAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAppsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAppsQuery, GetAppsQueryVariables>,
) {
  return Apollo.useQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsGql,
    baseOptions,
  )
}
export function useGetAppsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAppsQuery,
    GetAppsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetAppsQuery, GetAppsQueryVariables>(
    GetAppsGql,
    baseOptions,
  )
}
export type GetAppsQueryHookResult = ReturnType<typeof useGetAppsQuery>
export type GetAppsLazyQueryHookResult = ReturnType<typeof useGetAppsLazyQuery>
export type GetAppsQueryResult = Apollo.QueryResult<
  GetAppsQuery,
  GetAppsQueryVariables
>
export const UpdateAppGql = gql`
  mutation UpdateApp($input: UpdateAppInput!) {
    updateApp(input: $input) {
      id
      title
    }
  }
`
export type UpdateAppMutationFn = Apollo.MutationFunction<
  UpdateAppMutation,
  UpdateAppMutationVariables
>

/**
 * __useUpdateAppMutation__
 *
 * To run a mutation, you first call `useUpdateAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppMutation, { data, loading, error }] = useUpdateAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAppMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAppMutation,
    UpdateAppMutationVariables
  >,
) {
  return Apollo.useMutation<UpdateAppMutation, UpdateAppMutationVariables>(
    UpdateAppGql,
    baseOptions,
  )
}
export type UpdateAppMutationHookResult = ReturnType<
  typeof useUpdateAppMutation
>
export type UpdateAppMutationResult = Apollo.MutationResult<UpdateAppMutation>
export type UpdateAppMutationOptions = Apollo.BaseMutationOptions<
  UpdateAppMutation,
  UpdateAppMutationVariables
>
export const AddChildVertexGql = gql`
  mutation AddChildVertex($input: AddChildVertexInput!) {
    addChildVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragmentsFragmentDoc}
`
export type AddChildVertexMutationFn = Apollo.MutationFunction<
  AddChildVertexMutation,
  AddChildVertexMutationVariables
>

/**
 * __useAddChildVertexMutation__
 *
 * To run a mutation, you first call `useAddChildVertexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChildVertexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChildVertexMutation, { data, loading, error }] = useAddChildVertexMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddChildVertexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddChildVertexMutation,
    AddChildVertexMutationVariables
  >,
) {
  return Apollo.useMutation<
    AddChildVertexMutation,
    AddChildVertexMutationVariables
  >(AddChildVertexGql, baseOptions)
}
export type AddChildVertexMutationHookResult = ReturnType<
  typeof useAddChildVertexMutation
>
export type AddChildVertexMutationResult = Apollo.MutationResult<AddChildVertexMutation>
export type AddChildVertexMutationOptions = Apollo.BaseMutationOptions<
  AddChildVertexMutation,
  AddChildVertexMutationVariables
>
export const CreateGraphGql = gql`
  mutation CreateGraph($input: CreateGraphInput!) {
    createGraph(input: $input) {
      id
      label
    }
  }
`
export type CreateGraphMutationFn = Apollo.MutationFunction<
  CreateGraphMutation,
  CreateGraphMutationVariables
>

/**
 * __useCreateGraphMutation__
 *
 * To run a mutation, you first call `useCreateGraphMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGraphMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGraphMutation, { data, loading, error }] = useCreateGraphMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGraphMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateGraphMutation,
    CreateGraphMutationVariables
  >,
) {
  return Apollo.useMutation<CreateGraphMutation, CreateGraphMutationVariables>(
    CreateGraphGql,
    baseOptions,
  )
}
export type CreateGraphMutationHookResult = ReturnType<
  typeof useCreateGraphMutation
>
export type CreateGraphMutationResult = Apollo.MutationResult<CreateGraphMutation>
export type CreateGraphMutationOptions = Apollo.BaseMutationOptions<
  CreateGraphMutation,
  CreateGraphMutationVariables
>
export const DeleteVertexGql = gql`
  mutation DeleteVertex($input: DeleteVertexInput!) {
    deleteVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragmentsFragmentDoc}
`
export type DeleteVertexMutationFn = Apollo.MutationFunction<
  DeleteVertexMutation,
  DeleteVertexMutationVariables
>

/**
 * __useDeleteVertexMutation__
 *
 * To run a mutation, you first call `useDeleteVertexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVertexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVertexMutation, { data, loading, error }] = useDeleteVertexMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteVertexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteVertexMutation,
    DeleteVertexMutationVariables
  >,
) {
  return Apollo.useMutation<
    DeleteVertexMutation,
    DeleteVertexMutationVariables
  >(DeleteVertexGql, baseOptions)
}
export type DeleteVertexMutationHookResult = ReturnType<
  typeof useDeleteVertexMutation
>
export type DeleteVertexMutationResult = Apollo.MutationResult<DeleteVertexMutation>
export type DeleteVertexMutationOptions = Apollo.BaseMutationOptions<
  DeleteVertexMutation,
  DeleteVertexMutationVariables
>
export const GetGraphGql = gql`
  query GetGraph($input: GetGraphInput!) {
    getGraph(input: $input) {
      ...graphFragments
    }
  }
  ${GraphFragmentsFragmentDoc}
`

/**
 * __useGetGraphQuery__
 *
 * To run a query within a React component, call `useGetGraphQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGraphQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGraphQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGraphQuery(
  baseOptions: Apollo.QueryHookOptions<GetGraphQuery, GetGraphQueryVariables>,
) {
  return Apollo.useQuery<GetGraphQuery, GetGraphQueryVariables>(
    GetGraphGql,
    baseOptions,
  )
}
export function useGetGraphLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGraphQuery,
    GetGraphQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetGraphQuery, GetGraphQueryVariables>(
    GetGraphGql,
    baseOptions,
  )
}
export type GetGraphQueryHookResult = ReturnType<typeof useGetGraphQuery>
export type GetGraphLazyQueryHookResult = ReturnType<
  typeof useGetGraphLazyQuery
>
export type GetGraphQueryResult = Apollo.QueryResult<
  GetGraphQuery,
  GetGraphQueryVariables
>
export const GetVertexGql = gql`
  query GetVertex($input: GetVertexInput!) {
    getVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragmentsFragmentDoc}
`

/**
 * __useGetVertexQuery__
 *
 * To run a query within a React component, call `useGetVertexQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVertexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVertexQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetVertexQuery(
  baseOptions: Apollo.QueryHookOptions<GetVertexQuery, GetVertexQueryVariables>,
) {
  return Apollo.useQuery<GetVertexQuery, GetVertexQueryVariables>(
    GetVertexGql,
    baseOptions,
  )
}
export function useGetVertexLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVertexQuery,
    GetVertexQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetVertexQuery, GetVertexQueryVariables>(
    GetVertexGql,
    baseOptions,
  )
}
export type GetVertexQueryHookResult = ReturnType<typeof useGetVertexQuery>
export type GetVertexLazyQueryHookResult = ReturnType<
  typeof useGetVertexLazyQuery
>
export type GetVertexQueryResult = Apollo.QueryResult<
  GetVertexQuery,
  GetVertexQueryVariables
>
export const MoveVertexGql = gql`
  mutation MoveVertex($input: MoveVertexInput!) {
    modeVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragmentsFragmentDoc}
`
export type MoveVertexMutationFn = Apollo.MutationFunction<
  MoveVertexMutation,
  MoveVertexMutationVariables
>

/**
 * __useMoveVertexMutation__
 *
 * To run a mutation, you first call `useMoveVertexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveVertexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveVertexMutation, { data, loading, error }] = useMoveVertexMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMoveVertexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    MoveVertexMutation,
    MoveVertexMutationVariables
  >,
) {
  return Apollo.useMutation<MoveVertexMutation, MoveVertexMutationVariables>(
    MoveVertexGql,
    baseOptions,
  )
}
export type MoveVertexMutationHookResult = ReturnType<
  typeof useMoveVertexMutation
>
export type MoveVertexMutationResult = Apollo.MutationResult<MoveVertexMutation>
export type MoveVertexMutationOptions = Apollo.BaseMutationOptions<
  MoveVertexMutation,
  MoveVertexMutationVariables
>
export const UpdateEdgeGql = gql`
  mutation UpdateEdge($input: UpdateEdgeInput!) {
    updateEdge(input: $input) {
      ...edgeFragments
    }
  }
  ${EdgeFragmentsFragmentDoc}
`
export type UpdateEdgeMutationFn = Apollo.MutationFunction<
  UpdateEdgeMutation,
  UpdateEdgeMutationVariables
>

/**
 * __useUpdateEdgeMutation__
 *
 * To run a mutation, you first call `useUpdateEdgeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEdgeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEdgeMutation, { data, loading, error }] = useUpdateEdgeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEdgeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEdgeMutation,
    UpdateEdgeMutationVariables
  >,
) {
  return Apollo.useMutation<UpdateEdgeMutation, UpdateEdgeMutationVariables>(
    UpdateEdgeGql,
    baseOptions,
  )
}
export type UpdateEdgeMutationHookResult = ReturnType<
  typeof useUpdateEdgeMutation
>
export type UpdateEdgeMutationResult = Apollo.MutationResult<UpdateEdgeMutation>
export type UpdateEdgeMutationOptions = Apollo.BaseMutationOptions<
  UpdateEdgeMutation,
  UpdateEdgeMutationVariables
>
export const UpdateVertexGql = gql`
  mutation UpdateVertex($input: UpdateVertexInput!) {
    updateVertex(input: $input) {
      ...vertexFragments
    }
  }
  ${VertexFragmentsFragmentDoc}
`
export type UpdateVertexMutationFn = Apollo.MutationFunction<
  UpdateVertexMutation,
  UpdateVertexMutationVariables
>

/**
 * __useUpdateVertexMutation__
 *
 * To run a mutation, you first call `useUpdateVertexMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVertexMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVertexMutation, { data, loading, error }] = useUpdateVertexMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVertexMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateVertexMutation,
    UpdateVertexMutationVariables
  >,
) {
  return Apollo.useMutation<
    UpdateVertexMutation,
    UpdateVertexMutationVariables
  >(UpdateVertexGql, baseOptions)
}
export type UpdateVertexMutationHookResult = ReturnType<
  typeof useUpdateVertexMutation
>
export type UpdateVertexMutationResult = Apollo.MutationResult<UpdateVertexMutation>
export type UpdateVertexMutationOptions = Apollo.BaseMutationOptions<
  UpdateVertexMutation,
  UpdateVertexMutationVariables
>
export const CreatePageGql = gql`
  mutation CreatePage($input: CreatePageInput!) {
    createPage(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragmentsFragmentDoc}
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePageMutation,
    CreatePageMutationVariables
  >,
) {
  return Apollo.useMutation<CreatePageMutation, CreatePageMutationVariables>(
    CreatePageGql,
    baseOptions,
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
  mutation DeletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      title
    }
  }
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePageMutation,
    DeletePageMutationVariables
  >,
) {
  return Apollo.useMutation<DeletePageMutation, DeletePageMutationVariables>(
    DeletePageGql,
    baseOptions,
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
  query GetPage($input: GetPageInput!) {
    getPage(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragmentsFragmentDoc}
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
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPageQuery(
  baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>,
) {
  return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(
    GetPageGql,
    baseOptions,
  )
}
export function useGetPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPageQuery,
    GetPageQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(
    GetPageGql,
    baseOptions,
  )
}
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>
export type GetPageQueryResult = Apollo.QueryResult<
  GetPageQuery,
  GetPageQueryVariables
>
export const GetPagesGql = gql`
  query GetPages($input: GetPagesInput!) {
    getPages(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragmentsFragmentDoc}
`

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPagesQuery(
  baseOptions: Apollo.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>,
) {
  return Apollo.useQuery<GetPagesQuery, GetPagesQueryVariables>(
    GetPagesGql,
    baseOptions,
  )
}
export function useGetPagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPagesQuery,
    GetPagesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(
    GetPagesGql,
    baseOptions,
  )
}
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>
export type GetPagesLazyQueryHookResult = ReturnType<
  typeof useGetPagesLazyQuery
>
export type GetPagesQueryResult = Apollo.QueryResult<
  GetPagesQuery,
  GetPagesQueryVariables
>
export const UpdatePageGql = gql`
  mutation UpdatePage($input: UpdatePageInput!) {
    updatePage(input: $input) {
      ...pageFragments
    }
  }
  ${PageFragmentsFragmentDoc}
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
 *   },
 * });
 */
export function useUpdatePageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePageMutation,
    UpdatePageMutationVariables
  >,
) {
  return Apollo.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(
    UpdatePageGql,
    baseOptions,
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
export const DeleteUserGql = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      email
    }
  }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserGql,
    baseOptions,
  )
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
export const GetMeGql = gql`
  query GetMe {
    getMe {
      id
      email
    }
  }
`

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeGql, baseOptions)
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeGql,
    baseOptions,
  )
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>
export const LoginUserGql = gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      email
      accessToken
    }
  }
`
export type LoginUserMutationFn = Apollo.MutationFunction<
  LoginUserMutation,
  LoginUserMutationVariables
>

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginUserMutation,
    LoginUserMutationVariables
  >,
) {
  return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(
    LoginUserGql,
    baseOptions,
  )
}
export type LoginUserMutationHookResult = ReturnType<
  typeof useLoginUserMutation
>
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<
  LoginUserMutation,
  LoginUserMutationVariables
>
export const RegisterUserGql = gql`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input) {
      id
      email
      accessToken
    }
  }
`
export type RegisterUserMutationFn = Apollo.MutationFunction<
  RegisterUserMutation,
  RegisterUserMutationVariables
>

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >,
) {
  return Apollo.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserGql, baseOptions)
}
export type RegisterUserMutationHookResult = ReturnType<
  typeof useRegisterUserMutation
>
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>
export const UpdateUserGql = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      email
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserGql,
    baseOptions,
  )
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>