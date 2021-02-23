/*
 * Factory takes grid definition and generates ObjectFieldGridTemplate
 * Grid definition follows fields hierarchy(nested grid definitions are supported).
 * Definition suppors all antd ColProps + 1 extra-prop called 'order'
 */

import { ObjectFieldTemplateProps } from '@rjsf/core'
import { Col, Row } from 'antd'
import { ColProps } from 'antd/lib/col'
import React from 'react'
import {
  DecoratorsMap,
  gridDetailsName,
} from '@codelab/tools/generators/json-schema'

interface GridCellDetails extends ColProps {
  order?: number
}
type ObjectFieldTemplateProperty = ObjectFieldTemplateProps['properties'][number]
type Path = Array<string>

const getIdSchema = (p: ObjectFieldTemplateProperty): string => {
  return p.content.props.idSchema.$id
}

const parseIdSchema = (idSchema: string, separator = '_'): Array<string> => {
  return idSchema.split(separator)
}

const generatePathToGridDetailsByIdSchema = (
  idSchema: string,
): Array<string> => {
  // we cut the first step (='root') because it is special mark for internal needs of rjsf
  const pathSteps = parseIdSchema(idSchema).slice(1)

  return [...pathSteps, gridDetailsName]
}

const getFieldByPath = (obj: {}, path: Path): any | null => {
  if (obj === undefined) {
    return null
  }

  let subtree: any = obj

  for (const fieldName of path) {
    subtree = subtree[fieldName]
    if (subtree === undefined) {
      return null
    }
  }

  return subtree
}

const getGridDetailsFromPropertiesSchema = (
  p: ObjectFieldTemplateProperty,
  decoratorSettings: DecoratorsMap | undefined,
): GridCellDetails | null => {
  if (decoratorSettings === undefined) {
    return null
  }

  const pathStepsToGridDecorator = generatePathToGridDetailsByIdSchema(
    getIdSchema(p),
  )

  const gridDecoratorParams = getFieldByPath(
    decoratorSettings,
    pathStepsToGridDecorator,
  )

  return gridDecoratorParams
}

interface IIdSchemaToGridDetailsMap {
  [idSchema: string]: GridCellDetails
}

const getIdSchemaToGridDetailsMap = (
  properties: Array<ObjectFieldTemplateProperty>,
  decoratorsSettings: DecoratorsMap | undefined,
): IIdSchemaToGridDetailsMap => {
  return decoratorsSettings === undefined
    ? {}
    : (properties
        .map(
          (p) =>
            [
              getIdSchema(p),
              getGridDetailsFromPropertiesSchema(p, decoratorsSettings),
            ] as [string, GridCellDetails | null],
        )
        .filter((gridDetail: [string, GridCellDetails | null]) => {
          return gridDetail[1] !== null
        }) as Array<[string, GridCellDetails]>).reduce(
        (acc, curr) => ({
          ...acc,
          [curr[0]]: curr[1],
        }),
        {} as IIdSchemaToGridDetailsMap,
      )
}

export const ObjectFieldGridTemplateFactory = (
  decoratorSettings: DecoratorsMap | undefined = undefined,
) => (props: ObjectFieldTemplateProps) => {
  const IdSchemaToGridDetailsMap = getIdSchemaToGridDetailsMap(
    props.properties,
    decoratorSettings,
  )

  const [properties, gridProperties] = props.properties.reduce(
    (acc: any, curr: ObjectFieldTemplateProperty) => {
      return IdSchemaToGridDetailsMap[getIdSchema(curr)] === undefined
        ? [[...acc[0], curr], acc[1]]
        : [acc[0], [...acc[1], curr]]
    },
    [[], []] as [
      Array<ObjectFieldTemplateProperty>,
      Array<ObjectFieldTemplateProperty>,
    ],
  )

  gridProperties.sort(
    (a: ObjectFieldTemplateProperty, b: ObjectFieldTemplateProperty) =>
      (IdSchemaToGridDetailsMap[getIdSchema(a)].order as number) -
      (IdSchemaToGridDetailsMap[getIdSchema(b)].order as number),
  )

  return (
    <div>
      {props.title}
      {props.description}
      <Row style={{ width: '100%' }}>
        {gridProperties.map((p: any) => {
          const { order, ...colProps } = IdSchemaToGridDetailsMap[
            getIdSchema(p)
          ]

          return (
            <Col {...colProps} key={p.name}>
              {p.content}
            </Col>
          )
        })}
      </Row>
      {properties.map((p: any) => (
        <div className="property-wrapper" key={p.name}>
          {p.content}
        </div>
      ))}
    </div>
  )
}
