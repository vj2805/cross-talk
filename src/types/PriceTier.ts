import type { Model } from "./Model"

export interface PriceTier extends Model {
  description: string
  features: string[]
  href: string
  priceMonthly?: PriceMonthly
}

export interface PriceMonthly extends Model {
  cost: string
}
