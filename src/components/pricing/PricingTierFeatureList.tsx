import { CheckIcon } from "lucide-react"
import { cn } from "@/utilities/shadcn"
import type { PricingTier } from "@/services/getPricingTiers"

interface PricingTierFeatureListProps {
  features: PricingTier["features"]
}

export const PricingTierFeatureList: React.FC<PricingTierFeatureListProps> = ({
  features,
}) => (
  <ul
    role="list"
    className={cn("mt-10", "space-y-4", "text-sm leading-6 text-gray-900")}
  >
    {features.map(feature => (
      <li
        key={feature}
        className="flex gap-x-3"
      >
        <CheckIcon
          aria-hidden
          className={cn("h-6 w-5", "flex-none", "text-cyan-600")}
        />
        {feature}
      </li>
    ))}
  </ul>
)
