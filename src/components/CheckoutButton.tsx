"use client"

import { useSession } from "next-auth/react"
import { useCheckoutSession } from "@/hooks/useCheckoutSession"
import { cn } from "@/utilities/shadcn"

interface CheckoutButtonProps {
  priceId: string
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId }) => {
  const { data: session } = useSession()
  const { createCheckoutSession, processing } = useCheckoutSession({
    priceId,
    session,
  })

  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={createCheckoutSession}
        className={cn(
          "mt-8 block rounded-md bg-cyan-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm",
          "hover:bg-cyan-400",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
          "cursor-pointer",
          "disabled:opacity-80 disabled:bg-cyan-500/50 disabled:text-white disabled:cursor-default"
        )}
      >
        {processing ? "Processing..." : "Sign Up"}
      </button>
    </div>
  )
}
