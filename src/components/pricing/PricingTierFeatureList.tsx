import { CheckIcon } from "lucide-react"
import type { PricingTier } from "@/configs/pricingTiers"

interface PricingTierFeatureListProps {
  features: PricingTier["features"]
}

export const PricingTierFeatureList: React.FC<PricingTierFeatureListProps> = ({
  features,
}) => (
  <ul
    role="list"
    className="mt-10 space-y-4 text-sm leading-6 text-gray-900"
  >
    {features.map(feature => (
      <li
        key={feature}
        className="flex gap-x-3"
      >
        <CheckIcon
          className="h-6 w-5 flex-none text-cyan-600"
          aria-hidden="true"
        />
        {feature}
      </li>
    ))}
  </ul>
)
