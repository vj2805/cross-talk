import { NextLink, ToastAction } from "@/components/ui"
import { ErrorWithAction } from "./ErrorWithAction"

export class FreePlanLimitExceededError extends ErrorWithAction {
  name = "Free Plan Limit Exceeded!"
  action = (
    <ToastAction
      altText="Upgrade"
      asChild
    >
      <NextLink
        prefetch={false}
        href="/register"
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
  | "2 users per chat"
  | "3 chats per user"
  | "25 messages per chat"
