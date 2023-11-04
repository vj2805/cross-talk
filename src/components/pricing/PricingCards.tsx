import { getPricingTiers } from "@/services/getPricingTiers"
import { cn } from "@/services/shadcn"
import { PricingCard } from "./PricingCard"

interface PricingCardsProps {
  redirect: boolean
}

export const PricingCards: React.FC<PricingCardsProps> = ({ redirect }) => (
  <div
    className={cn(
      "mx-auto",
      "max-w-md lg:max-w-4xl",
      "grid grid-cols-1 lg:grid-cols-2 gap-8"
    )}
  >
    {getPricingTiers().map(tier => (
      <PricingCard
        key={tier.id}
        tier={tier}
        redirect={redirect}
      />
    ))}
  </div>
)
