export class SendingInviteToUnregisteredUser extends Error {
  name = "User not found!"
  constructor() {
    super(
      "Please enter an email address of a registered user OR resend the invitation once they have signed up!"
    )
  }
}
