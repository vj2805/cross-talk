import { cn } from "@/services/shadcn"
import type { PricingTier } from "@/services/getPricingTiers"

interface PriceMonthlyProps {
  priceMonthly: PricingTier["priceMonthly"]
}

export const PriceMonthly: React.FC<PriceMonthlyProps> = ({ priceMonthly }) => (
  <div className={cn("mt-4", "flex items-baseline gap-x-2")}>
    {priceMonthly ? (
      <>
        <span className="text-5xl font-bold tracking-tight text-gray-900">
          &#8377; {priceMonthly.cost}
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
)
