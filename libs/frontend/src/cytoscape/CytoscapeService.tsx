import cytoscape, {
  Core,
  EdgeDefinition,
  NodeDataDefinition,
  NodeDefinition,
  NodeSingular,
} from 'cytoscape'
import { GraphFragmentsFragment } from '@codelab/generated'

export class CytoscapeService {
  /**
   * Hydrate to cytoscape from graph data
   */
  static fromGraph({ vertices, edges }: GraphFragmentsFragment): Core {
    return cytoscape({
      headless: true,
      elements: {
        nodes: vertices.map<NodeDefinition>(({ id, type, props, parent }) => ({
          data: {
            id,
            parent: parent?.id,
            type,
            props,
          },
        })),
        edges: edges.map<EdgeDefinition>(({ id, source, target }) => ({
          data: {
            id,
            source,
            target,
          },
        })),
      },
    })
  }

  static bfs(vertex: NodeSingular): NodeDataDefinition {
    // All info on `vertex.data`
    // console.log(vertex.data(), vertex.json())

    const outgoingVertices = vertex.outgoers().nodes()

    // const [Component, props] = elementParameterFactory(vertex.data())

    return {
      ...vertex.data(),
      // Add component here
      // Component: React.createElement(Component, props),
      children: outgoingVertices.reduce(
        (nodes: Array<NodeDataDefinition>, outgoingVertex: NodeSingular) => [
          ...nodes,
          CytoscapeService.bfs(outgoingVertex),
        ],
        [],
      ),
    }
  }
}
