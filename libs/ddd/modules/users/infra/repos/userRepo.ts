import { User } from '../../domain/user'
import { UserEmail } from '../../domain/user-email'

export interface IUserRepo {
  exists(userEmail: UserEmail): Promise<boolean>
  getUserByUserId(userId: string): Promise<User>
  getUserByEmail(userEmail: UserEmail | string): Promise<User>
  save(user: User): Promise<void>
}
