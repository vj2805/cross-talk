"use client"

import { useSession } from "next-auth/react"
import { cn } from "@/utilities/shadcn"

export function CheckoutButton() {
  const { data: session } = useSession()

  function createCheckout() {
    if (!session) {
      return
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={createCheckout}
        className={cn(
          "mt-8 block rounded-md bg-cyan-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm",
          "hover:bg-cyan-400",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500",
          "cursor-pointer",
          "disabled:opacity-80 disabled:bg-cyan-500/50 disabled:text-white disabled:cursor-default"
        )}
      >
        Sign Up
      </button>
    </div>
  )
}
