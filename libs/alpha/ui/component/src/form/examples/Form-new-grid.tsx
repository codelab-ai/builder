import { Theme as AntDTheme } from '@rjsf/antd'
import { ISubmitEvent, withTheme } from '@rjsf/core'
import { JSONSchema7 } from 'json-schema'
import React from 'react'
import { ObjectGridTemplate } from '../rjsf-templates/ObjectGridTemplate'
import { CodelabFieldTemplate } from '@codelab/alpha/ui/component'

const Form = withTheme(AntDTheme)

export const FormNewGrid = () => {
  const schema: JSONSchema7 = {
    title: 'Todo',
    type: 'object',
    // required: ['password'],
    properties: {
      password: {
        type: 'string',
        title: 'Password',
      },
      firstName: {
        type: 'string',
        title: 'First name',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
      bio: {
        type: 'string',
        title: 'Bio',
      },

      age: {
        type: 'integer',
        title: 'Age',
      },
      address: {
        type: 'object',
        title: 'Address - Object Test',
        properties: {
          streetName: { type: 'string', title: 'Street Name' },
          houseNumber: { type: 'string', title: 'House Number' },
          postalCode: { type: 'string', title: 'Postal Code' },
          phoneNumber: { type: 'string', title: 'Phone Number' },
        },
      },
      arrTest: {
        type: 'array',
        title: 'Array Test With Grid',
        items: {
          type: 'object',
          properties: {
            field1: { type: 'string' },
            field2: { type: 'string' },
          },
        },
      },
    },
  }

  const uiSchema = {
    'ui:ObjectFieldTemplate': ObjectGridTemplate,
    address: {
      'ui:ObjectFieldTemplate': ObjectGridTemplate,
      'ui:spacing': 16,
      span: 20,
      'ui:layout': [
        {
          streetName: { span: 10 },
          houseNumber: { span: 14 },
          postalCode: { span: 12 },
          phoneNumber: { span: 12 },
        },
      ],
    },
    arrTest: {
      span: 20,
      items: {
        'ui:ObjectFieldTemplate': ObjectGridTemplate,
        'ui:spacing': 16,
        'ui:layout': [
          {
            field1: { span: 6 },
            field2: { span: 6 },
          },
        ],
      },
    },
    'ui:spacing': 16,
    'ui:layout': [
      {
        'ui:order': ['lastName', 'firstName'],
        firstName: { span: 6 },
        lastName: { span: 6 },
      },
      {
        bio: { span: 12 },
      },
      {
        age: { span: 6 },
        password: { span: 6 },
      },
    ],
  }

  const onSubmitClicked = ({ formData }: ISubmitEvent<any>) =>
    console.log('Form Data: ', formData)

  return (
    <Form
      formData={{}}
      schema={schema}
      uiSchema={uiSchema}
      FieldTemplate={CodelabFieldTemplate}
      onSubmit={onSubmitClicked}
    />
  )
}