import { JwtPayload } from '@codelab/backend/adapters'
import { UpdateUserInput } from './update-user.input'

export class UpdateUserRequest {
  declare input: UpdateUserInput

  declare currentUser?: JwtPayload
}
