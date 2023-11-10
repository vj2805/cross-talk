import { getPricingTiers } from "@/services/pricing"
import { cn } from "@/utilities/string"
import { PricingCard } from "./PricingCard"

interface PricingCardsProps {
  redirect: boolean
}

export const PricingCards: React.FC<PricingCardsProps> = async ({
  redirect,
}) => {
  const pricingTiers = await getPricingTiers()
  return (
    <div
      className={cn(
        "mx-auto",
        "max-w-md lg:max-w-4xl",
        "grid grid-cols-1 lg:grid-cols-2 gap-8"
      )}
    >
      {pricingTiers.map(tier => (
        <PricingCard
          key={tier.id}
          tier={tier}
          redirect={redirect}
        />
      ))}
    </div>
  )
}
