import { IsEmail } from 'class-validator'
import { ValueObject } from '@codelab/ddd/shared/core'

export interface UserEmailProps {
  value: string
}

export class UserEmail extends ValueObject<UserEmailProps> {
  @IsEmail(
    {},
    {
      message: 'Email must be valid',
    },
  )
  declare value: string
}
