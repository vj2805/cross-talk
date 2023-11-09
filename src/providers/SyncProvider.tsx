"use client"

import { SubscriptionProvider } from "./SubscriptionProvider"
import { SyncedLanguagesProvider } from "./SyncedLanguagesProvider"
import { SyncedUserProvider } from "./SyncedUserProvider"

export const SyncProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  return (
    <SyncedUserProvider>
      <SubscriptionProvider>
        <SyncedLanguagesProvider>{props.children}</SyncedLanguagesProvider>
      </SubscriptionProvider>
    </SyncedUserProvider>
  )
}
