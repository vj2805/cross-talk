export class UserError extends Error {
  name = "User Error"
  constructor(code: UserErrorCode) {
    super(code)
  }
}

export type UserErrorCode = "User is NOT signed in!"
