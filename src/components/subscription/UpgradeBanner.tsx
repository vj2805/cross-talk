"use client"

import { Button } from "@components/ui"
import { useRouter } from "@hooks/builtins"
import { useIsPro, useSubscription } from "@stores/subscription"
import { cn } from "@utilities/string"

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
        "bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-cyan-500 dark:to-indigo-600",
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
