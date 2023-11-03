import { getPricingTiers } from "@/services/getPricingTiers"
import { PricingCard } from "./PricingCard"

interface PricingCardsProps {
  redirect: boolean
}

export const PricingCards: React.FC<PricingCardsProps> = ({ redirect }) => (
  <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
    {getPricingTiers().map(tier => (
      <PricingCard
        key={tier.id}
        tier={tier}
        redirect={redirect}
      />
    ))}
  </div>
)
