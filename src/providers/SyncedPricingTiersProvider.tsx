"use client"

import { useEffect } from "react"
import { getPricingTiers } from "@services/pricing"
import { setPricingTiers } from "@stores/pricing"

export const SyncedPricingTiersProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useEffect(() => {
    async function fetchPricingTiers() {
      setPricingTiers(await getPricingTiers())
    }
    fetchPricingTiers()
  }, [])

  return props.children
}
