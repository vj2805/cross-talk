import type { PriceMonthly } from "./PriceMonthly"
import type { Model } from "./Model"

export interface PriceTier extends Model {
  description: string
  features: string[]
  href: string
  priceMonthly?: PriceMonthly
}
