"use client"

import { useRouter } from "@hooks"
import { useIsPro, useSubscription } from "@providers"
import { cn } from "@utilities"
import { Button } from "@ui"

export const UpgradeBanner: React.FC = () => {
  const router = useRouter()
  const subscription = useSubscription()
  const isPro = useIsPro()

  if (subscription === undefined || isPro) {
    return null
  }

  return (
    <Button
      onClick={() => router.push("/subscribe")}
      className={cn(
        "w-full",
        "p-2",
        "bg-gradient-to-r from-cyan-500 to-indigo-600",
        "text-center text-white",
        "rounded-none",
        "hover:shadow-md",
        "hover:opacity-90"
      )}
    >
      Upgrade to PRO to unlock all features!
    </Button>
  )
}
