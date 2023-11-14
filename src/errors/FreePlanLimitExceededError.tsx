export class FreePlanLimitExceededError extends Toas {
  name = "Free Plan Limit Exceeded!"
  ac
  constructor(code: FreePlanLimitExceededErrorCode) {
    super(
      `You have exceeded the limit of ${code} for the FREE plan. Please upgrade to PRO`
    )
  }
}

export type FreePlanLimitExceededErrorCode = "no of users in a single chat"
