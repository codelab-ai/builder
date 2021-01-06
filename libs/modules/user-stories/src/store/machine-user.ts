import { Machine } from 'xstate'
import {
  registerUserService,
  registerUserState,
} from '../useCases/registerUser'
import { userLoginState } from '../useCases/userLogin'
import { userLoginServices } from '../useCases/userLogin/UserLoginServices'
import { userSignOutServices, userSignOutState } from '../useCases/userSignout'

export const createUserMachine = () => {
  const services = {
    ...userSignOutServices,
    ...userLoginServices,
    ...registerUserService,
  }

  return Machine(
    {
      id: 'user',
      initial: 'guest',
      context: {
        userData: undefined, // This is used to know: 1. Is the user authenticated? (!userData => not authenticated) and which user is authenticated (e.g. userData.username)
      },
      states: {
        guest: {
          id: 'guest',
          initial: 'idle',
          states: {
            idle: {
              id: 'userIdle',
              on: {
                SIGN_UP: {
                  target: 'signingUp',
                },
                LOGIN: {
                  target: 'loggingIn',
                },
              },
            },
            signingUp: registerUserState,
            loggingIn: userLoginState,
          },
        },
        authenticated: {
          initial: 'idle',
          id: 'authenticated',
          states: {
            idle: {
              on: {
                SIGN_OUT: {
                  target: 'signingOut',
                },
              },
            },
            signingOut: userSignOutState,
          },
        },
      },
    },
    {
      services,
    },
  )
}
