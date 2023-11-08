"use client"

import { useEffect } from "react"
import { getPricingTiers } from "@services/subscription"
import { setPricingTiers } from "@stores/subscription"

export const SyncedPricingTiersProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useEffect(() => {
    async function fetchPricingTiers() {
      const pricingTiers = await getPricingTiers()
      setPricingTiers(pricingTiers)
    }
    fetchPricingTiers()
  }, [])

  return props.children
}
