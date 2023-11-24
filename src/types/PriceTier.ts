import type { Model } from "./Model"
import type { PriceMonthly } from "./PriceMonthly"

export interface PriceTier extends Model {
  description: string
  features: string[]
  href: string
  priceMonthly?: PriceMonthly
}
