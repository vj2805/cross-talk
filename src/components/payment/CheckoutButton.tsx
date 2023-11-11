"use client"

import { ManageSubscriptionButton } from "@/components/subscription/ManageSubscriptionButton"
import { Spinner } from "@/components/ui"
import { useCheckout } from "@/hooks/useCheckout"
import { useSubscription } from "@/hooks/useSubscription"
import { useUser } from "@/hooks/useUser"
import { cn } from "@/utilities/string"

interface CheckoutButtonProps {
  priceId: string
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId }) => {
  const user = useUser()
  const subscription = useSubscription()

  const { createCheckout, processing } = useCheckout(user?.id, priceId)

  return (
    <div className="flex flex-col space-y-2">
      <div
        className={cn(
          "mt-8",
          "block",
          "px-3.5 py-2",
          "bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50",
          "text-center text-sm font-semibold leading-6 text-white disabled:text-white",
          "rounded-md",
          "shadow-sm",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
          "cursor-pointer  disabled:cursor-default",
          "disabled:opacity-80"
        )}
      >
        {subscription === undefined || processing ? (
          <Spinner />
        ) : subscription?.status === "active" ? (
          <ManageSubscriptionButton />
        ) : (
          <button onClick={createCheckout}>Subscribe</button>
        )}
      </div>
    </div>
  )
}
