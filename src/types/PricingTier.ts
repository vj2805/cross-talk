export type PricingTier = {
  description: string
  features: string[]
  href: string
  id: string
  priceMonthly?: {
    cost: string
    id: string
  }
}
