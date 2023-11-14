"use client"

import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { NextLink, ToastAction, showErrorToast } from "./ui"
import type { FreePlanLimitExceededErrorCode } from "@/errors/FreePlanLimitExceededError"

export function showFreePlanLimitExceededToast(
  code: FreePlanLimitExceededErrorCode
) {
  return showErrorToast(new FreePlanLimitExceededError(code), {
    action: (
      <ToastAction
        asChild
        altText="Upgrade"
      >
        <NextLink
          prefetch={false}
          href="/subscribe"
        >
          Upgrade to PRO
        </NextLink>
      </ToastAction>
    ),
  })
}
