import { CircleBackdrop, PricingCards, SignInRequiredAlert } from "@/components"
import { getServerUser } from "@/services/auth"
import { cn } from "@/utilities/string"

export default async function RegisterPage() {
  const user = await getServerUser()

  if (!user) {
    return <SignInRequiredAlert />
  }

  return (
    <div
      className={cn(
        "isolate",
        "h-full",
        "pb-40",
        "bg-gray-900",
        "overflow-hidden"
      )}
    >
      <div
        className={cn(
          "mx-auto",
          "max-w-7xl",
          "px-6 pb-12 pt-16 lg:px-8",
          "text-white text-center"
        )}
      >
        <div className={cn("mx-auto", "max-w-4xl")}>
          <p
            className={cn(
              "mt-2",
              "text-4xl font-bold tracking-tight sm:text-5xl"
            )}
          >
            Let&apos;s handle your Membership {user.name?.split(" ")[0]}
          </p>
        </div>
        <div className="relative">
          <CircleBackdrop />
        </div>
      </div>
      <PricingCards redirect={false} />
    </div>
  )
}
