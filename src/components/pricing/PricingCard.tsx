import { cn } from "@/utilities/shadcn"
import { CheckoutButton } from "../CheckoutButton"
import { PricingTierFeatureList } from "./PricingTierFeatureList"
import { GetStartedTodayButton } from "./GetStartedTodayButton"
import type { PricingTier } from "@/configs/pricingTiers"

interface PricingCardProps {
  tier: PricingTier
  redirect: boolean
}

export function PricingCard({ tier, redirect }: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10",
        {
          "sm:pb-[9.5rem]": !tier.priceMonthly,
        }
      )}
    >
      <h3
        id={tier.id}
        className="text-base font-semibold leading-7 text-cyan-600"
      >
        {tier.id}
      </h3>
      <div className="mt-4 flex items-baseline gap-x-2">
        {tier.priceMonthly ? (
          <>
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              &#8377; {tier.priceMonthly.cost}
            </span>
            <span className="text-base font-semibold leading-7 text-gray-900">
              /month
            </span>
          </>
        ) : (
          <span className="text-5xl font-bold tracking-tight text-gray-900">
            Free
          </span>
        )}
      </div>
      <p className="mt-6 text-base leading-7 text-gray-600">
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
}
