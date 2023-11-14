import { ToastableError } from "./ToastableError"

export class SendingInviteToUnregisteredUser extends ToastableError {
  name = "User not found!"
  constructor() {
    super(
      "Please enter an email address of a registered user OR resend the invitation once they have signed up!"
    )
  }
}
