import objectMapper from 'object-mapper'
import { GraphA } from '@codelab/shared/interface/graph-v2'
import { ApolloQueryMapper } from '@codelab/shared/interface/mapper'
import { GraphsQueryResult } from '@codelab/state/apollo'

/**
 * Maps from apollo query results to EntityA
 */
export const queryToGraphA: ApolloQueryMapper<GraphsQueryResult, GraphA> = (
  original,
) => {
  const graphMapper = {
    id: 'id',
    label: 'label',
    vertices: 'vertices',
    edges: 'edges',
  }

  const resultsMapper = {
    'data.graph': {
      key: 'data',
      transform: (sourceValue: Array<any>) => {
        return sourceValue.map((graph) => {
          return objectMapper(graph, graphMapper)
        })
      },
    },
  }

  return objectMapper(original, resultsMapper)
}
