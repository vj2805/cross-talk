export class FreePlanLimitExceededError extends Error {
  name = "Free Plan Limit Exceeded!"
  constructor(code: FreePlanLimitExceededErrorCode) {
    super(
      `You have exceeded the limit of ${code} for the FREE plan. Please upgrade to PRO`
    )
  }
}

export type FreePlanLimitExceededErrorCode = "no of users in a single chat"
