export interface PriceTier {
  description: string
  features: string[]
  href: string
  id: string
  priceMonthly?: PriceMonthly
}

export interface PriceMonthly {
  cost: string
  id: string
}
