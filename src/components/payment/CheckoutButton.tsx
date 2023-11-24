"use client"

import { ManageSubscriptionButton } from "@/components/subscription/ManageSubscriptionButton"
import { ErrorAlert, Spinner } from "@/components/ui"
import { useCreateCheckout } from "@/hooks/useCreateCheckout"
import { useIsPro } from "@/hooks/useIsPro"
import { useRequiredUser } from "@/hooks/useRequiredUser"
import { cn } from "@/utilities/string"

interface CheckoutButtonProps {
  priceId: string
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId }) => {
  const [user, isUserLoading, userError] = useRequiredUser()
  const [isPro, isSubscriptionLoading, subscriptionError] = useIsPro()
  const [createCheckout, isProcessing] = useCreateCheckout()

  if (isUserLoading) {
    return <Spinner />
  }

  if (userError || subscriptionError) {
    return <ErrorAlert error={[userError, subscriptionError]} />
  }

  return (
    <div className="flex flex-col space-y-2">
      {isPro && (
        <>
          <hr className="mt-5" />
          <p className="pt-5 text-center text-xs text-indigo-600">
            You are subscribed to PRO
          </p>
        </>
      )}
      <div
        className={cn(
          "mt-8 flex",
          "block",
          "px-3.5 py-2",
          "bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-500/50",
          "text-center text-sm font-semibold leading-6 text-white disabled:text-white",
          "rounded-md",
          "shadow-sm",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
          "cursor-pointer disabled:cursor-default",
          "disabled:opacity-80"
        )}
      >
        {isSubscriptionLoading || isProcessing ? (
          <Spinner />
        ) : isPro ? (
          <ManageSubscriptionButton />
        ) : (
          <form
            className="flex"
            onSubmit={() => createCheckout(user.id, priceId)}
          >
            <button className="flex-1">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  )
}
