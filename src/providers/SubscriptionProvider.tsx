"use client"

import { useSyncSubscription } from "../hooks/useSyncSubscription"

export const SubscriptionProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  useSyncSubscription()
  return props.children
}
