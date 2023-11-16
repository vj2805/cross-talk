import { NextLink, ToastAction } from "@/components/ui"
import { ToastableError } from "./ToastableError"

export class FreePlanLimitExceededError extends ToastableError {
  name = "Free Plan Limit Exceeded!"
  action = (
    <ToastAction
      altText="Upgrade"
      asChild
    >
      <NextLink
        prefetch={false}
        href="/subscribe"
      >
        Upgrade to PRO
      </NextLink>
    </ToastAction>
  )
  constructor(code: FreePlanLimitExceededErrorCode) {
    super(
      `You have exceeded the limit of ${code} for the FREE plan. Please upgrade to PRO`
    )
  }
}

export type FreePlanLimitExceededErrorCode =
  | "25 messages"
  | "no of users in a single chat"
