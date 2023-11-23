"use client"

import { useRouter } from "next/navigation"
import { Button, ErrorAlert, Spinner } from "@/components/ui"
import { useIsPro } from "@/hooks/useIsPro"
import { cn } from "@/utilities/string"

export const UpgradeBanner: React.FC = () => {
  const router = useRouter()
  const [isPro, subscriptionStatus, subscriptionError] = useIsPro()

  if (subscriptionStatus === "loading") {
    return <Spinner />
  }

  if (subscriptionStatus === "error") {
    return <ErrorAlert error={subscriptionError} />
  }

  if (isPro) {
    return null
  }

  return (
    <Button
      onClick={() => router.push("/register")}
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
