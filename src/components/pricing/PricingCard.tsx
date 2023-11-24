import type { PriceTier } from "@/types/PriceTier"
import { cn } from "@/utilities/string"
import { CheckoutButton } from "../payment/CheckoutButton"
import { GetStartedTodayButton } from "../subscription/GetStartedTodayButton"
import { PriceMonthlyView } from "./PriceMonthly"
import { PricingTierFeatureList } from "./PricingTierFeatureList"

interface PricingCardProps {
  tier: PriceTier
  redirect: boolean
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, redirect }) => (
  <div
    className={cn(
      "p-8 sm:p-10",
      {
        "sm:pb-[9.5rem]": !tier.priceMonthly,
      },
      "bg-white",
      "rounded-3xl",
      "shadow-xl",
      "ring-1 ring-gray-900/10",
      "flex flex-col justify-between"
    )}
  >
    <h3 className="text-base font-semibold leading-7 text-cyan-600">
      {tier.id}
    </h3>
    <PriceMonthlyView priceMonthly={tier.priceMonthly} />
    <p className={cn("mt-6", "text-base leading-7 text-gray-600")}>
      {tier.description}
    </p>
    <PricingTierFeatureList features={tier.features} />
    {tier.priceMonthly &&
      (redirect ? (
        <GetStartedTodayButton />
      ) : (
        <CheckoutButton priceId={tier.priceMonthly.id} />
      ))}
  </div>
)
