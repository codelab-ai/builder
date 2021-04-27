import React from 'react'
import { CytoscapeService } from '@codelab/frontend/cytoscape'
import { NodeRenderer } from '@codelab/frontend/builder'
import { PageElement__ComponentFragment } from '@codelab/hasura'

type ComponentRendererProps = {
  component: PageElement__ComponentFragment
}

export const ComponentRenderer = ({ component }: ComponentRendererProps) => {
  const cy = CytoscapeService.fromComponent(component)
  const root = CytoscapeService.componentTree(cy)

  return <NodeRenderer node={root} enableOverlays={false} />
}
