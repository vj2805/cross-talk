import { pricingTiers } from "@/configs/pricingTiers"
import { PricingCard } from "./PricingCard"

interface PricingCardsProps {
  redirect: boolean
}

export function PricingCards({ redirect }: PricingCardsProps) {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
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
