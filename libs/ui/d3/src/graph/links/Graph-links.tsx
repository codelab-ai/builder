import { Selection } from 'd3'
import { D3Link, D3Node } from '../Graph.i'

interface LinkHandlers {
  onClick: (...args: any) => any
}

// Parent could be any time
type LinkSelection = Selection<SVGGElement, D3Link, any, D3Link>

export const enterLinks = (
  selection: LinkSelection,
  { onClick }: LinkHandlers,
) => {
  /**
   * Group
   */
  selection.attr('class', (d: D3Link) => `Link Link--${d.id}`)

  /**
   * Add link to connect nodes
   */
  selection
    .append('path')
    .attr('class', 'Link-path')
    .attr('id', (d) => `edge_path_${d.id}`)
    .attr('stroke', 'gray')
    .attr('stroke-width', '1px')
    // .attr('fill', 'none')
    .attr('marker-mid', (d: D3Link) => `url(#arrow_${d.id})`)
    .style('cursor', 'pointer')

  /**
   * Append thicker path for easier mouse click
   */
  // selection
  //   .append('path')
  //   .attr('class', 'Link-hover')
  //   .attr('stroke', 'transparent')
  //   .attr('stroke-width', '6px')
  //   .attr('fill', 'none')
  //   .style('cursor', 'pointer')

  /**
   * Add label text
   */
  selection
    .append('text')
    .attr('class', 'Link-label')
    .attr('text-anchor', 'middle')
    .attr('x', 0)
    .attr('dy', 12)
    .attr('fill', 'gray')
    .attr('font-size', 12)
    .style('user-select', 'none')
    .style('cursor', 'pointer')
    .append('textPath')
    // .attr('startOffset', '50%')
    // This will put text above path
    .attr('xlink:href', (d: D3Link) => `#edge_path_${d.id}`)
    .attr('startOffset', '40%')
    .text((d: D3Link) => d.label ?? '')

  /**
   * Add dom handlers
   */
  selection.on('click', (e, link) => {
    if (!onClick) {
      return
    }

    onClick(e, link)
  })
  // selection.on('click', handleClickLink(d3Hooks).bind(selection))
  // .on('mouseover', handleMouseoverLink.bind(selection))
  // .on('mouseout', handleMouseoutLink.bind(selection))
}

export const updateLinks = (selection: LinkSelection, links = []) => {
  const addEdge = (d: D3Link) => {
    // TODO
    // if (!has(d, 'target.id')) return ''
    const target = d.target as D3Node
    const source = d.source as D3Node
    // const divider = d?.biDirection ? 1 / 2 : 0
    const targetX = target?.x ?? 0
    const sourceX = source?.x ?? 0
    const targetY = target?.y ?? 0
    const sourceY = source?.y ?? 0
    const [dX, dY] = [targetX - sourceX, targetY - sourceY]

    const [x1, y1, x2, y2] = [
      sourceX + dX * 0,
      sourceY + dY * 0,
      // sourceX + dX * divider,
      // sourceY + dY * divider,
      targetX,
      targetY,
    ]

    const dx = x2 - x1
    const dy = y2 - y1
    // const dr = 50

    // if (d.target.id === d.source.id) {
    //   const xRotation = -45
    //   const largeArc = 0
    //   // Change sweep to change orientation of loop.
    //   const sweep = 1

    //   return `M${x1},${y1} A${dr},${dr} ${xRotation},${largeArc},${sweep} ${x2},${y2}`
    // }

    return `M${x1},${y1} L${x1 + dx / 2},${y1 + dy / 2}  L${x2},${y2}`
  }

  const updateEdgeLabel = (d: D3Link) => {
    // if (d.target.id) {
    //   return ''
    // }
    // const { x, y, width, height } = elements[i].getBBox()
    // const rotate =
    //   d.target.x < d.source.x
    //     ? `rotate(180 ${x + width / 2} ${y + height / 2})`
    //     : 'rotate(0)'
    // return rotate
    return null
  }

  selection.select('path.Link-path').attr('d', addEdge)
  selection.select('path.Link-hover').attr('d', addEdge)
  selection
    .select('text.Link-label')
    .attr('transform', updateEdgeLabel.bind(selection))
}
