export interface PricingTier {
  description: string
  features: string[]
  href: string
  id: string
  priceMonthly?: PriceMonthly
}

interface PriceMonthly {
  cost: string
  id: string
}
