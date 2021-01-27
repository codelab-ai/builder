import { JSONSchema7 } from 'json-schema'
import React, { useState } from 'react'
import { JsonSchemaForm } from '../../../../../frontend/src/components/form/JsonSchemaForm'
import { RegisterUserInputSchema } from '../../../../user/src/core/application/useCases/registerUser'
import { RegisterUserInput } from '../../../../user/src/core/application/useCases/registerUser/RegisterUserInput'
import { useUserMachine } from '../../store'
import { ModalFormProps } from '@codelab/frontend'
import { JsonSchemaFormEvent } from 'libs/frontend/src/components/form/JsonSchemaForm.d'

export const RegisterUserForm = (props: ModalFormProps<RegisterUserInput>) => {
  const user = useUserMachine()

  const [formData, setFormData] = useState<RegisterUserInput>({
    email: '',
    password: '',
  })

  const handleSubmit = ({ data }: JsonSchemaFormEvent<RegisterUserInput>) =>
    user.send({
      type: 'ON_SUBMIT',
      data,
    })

  return (
    <JsonSchemaForm<RegisterUserInput>
      schema={RegisterUserInputSchema as JSONSchema7}
      rjsfFormProps={{
        uiSchema: {
          password: {
            'ui:widget': 'password',
          },
        },
      }}
      formData={formData}
      onChange={({ data }) => setFormData(data)}
      onSubmit={handleSubmit}
      {...props}
    />
  )
}
