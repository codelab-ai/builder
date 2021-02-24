import React from 'react'
import { FormAccordion } from './examples/Form-accordion'
import { FormNewGrid } from './examples/Form-new-grid'
import { FormVertexConditional } from './examples/Form-vertex-conditional'
import { CodelabSelectWidget } from './rjsf-widgets/CodelabSelectWidget'
import { JsonSchemaForm } from '@codelab/frontend'
import {
  DemoGridPropsGridFormProps,
  DemoGridPropsSchema,
  DemoTabsPropsFormProps,
  DemoTabsPropsSchema,
  UpdateVertexInputSchema,
  VegaSchema,
} from '@codelab/generated'
import { CreateStyleInput } from 'libs/modules/style/src/core/application/useCases/createStyle/CreateStyleInput'

export default {
  title: 'FormJson',
  parameters: {
    data: {
      VertexFormConditional: UpdateVertexInputSchema,
    },
  },
}

export const SelectableSearchArrayForm = () => {
  const widgets = {
    SelectWidget: CodelabSelectWidget,
  }

  return (
    <JsonSchemaForm<CreateStyleInput>
      initialFormData={{}}
      widgets={widgets}
      schema={VegaSchema}
      onSubmit={() => null}
    />
  )
}

export const ConditionalVertexForm = () => {
  return <FormVertexConditional />
}

export const AccordionForm = () => {
  return <FormAccordion />
}

export const NewGridForm = () => {
  return <FormNewGrid />
}

export const TabsForm = () => {
  return (
    <JsonSchemaForm
      initialFormData={{}}
      onSubmit={() => null}
      schema={DemoTabsPropsSchema}
      {...DemoTabsPropsFormProps}
    />
  )
}

export const GridsForm = () => {
  return (
    <JsonSchemaForm
      initialFormData={{}}
      onSubmit={() => null}
      schema={DemoGridPropsSchema}
      {...DemoGridPropsGridFormProps}
    />
  )
}