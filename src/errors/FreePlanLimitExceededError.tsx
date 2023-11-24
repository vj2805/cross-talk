import { NextLink, ToastAction } from "@/components/ui"
import type {
  chatsQuota,
  messagesQuota,
  participantsQuota,
} from "@/configs/quota"
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
  | `${typeof chatsQuota} chats per user`
  | `${typeof messagesQuota} messages per chat`
  | `${typeof participantsQuota} users per chat`
