"use client"

import { useRouter } from "@hooks"
import { useSubscription } from "@providers"
import { cn } from "@utilities"
import { Button } from "@ui"

export const UpgradeBanner: React.FC = () => {
  const router = useRouter()
  const subscription = useSubscription()

  if (subscription === undefined || subscription) {
    return null
  }

  return (
    <Button
      onClick={() => router.push("/register")}
      className={cn(
        "w-full",
        "px-5",
        "bg-gradient-to-r from-cyan-500 to-indigo-600",
        "text-center text-white",
        "rounded-none",
        "hover:shadow-md",
        "hover:opacity-90"
      )}
    >
      Upgrade to Pro to unlock all features!
    </Button>
  )
}
