import { PricingCards } from "@/components/pricing/PricingCards"
import { CircleBackdrop } from "@/components/backdrops/CircleBackdrop"
import { getSession } from "@/services/getSession"
import { cn } from "@/services/shadcn"

export default async function Register() {
  const session = await getSession()
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
            Let&apos;s handle your Membership{" "}
            {session?.user?.name?.split(" ")[0]}
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
