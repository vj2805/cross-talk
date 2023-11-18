export class UserError extends Error {
  name = "User Error"
  constructor(code: UserErrorCode) {
    super(code)
  }
}

export type UserErrorCode = "User does not exist!" | "User is NOT signed in!"
