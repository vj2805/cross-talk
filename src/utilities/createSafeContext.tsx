import React from "react"

const NONE = Symbol("NONE")

export function createSafeContext<T>(displayName: string) {
  const Context = React.createContext<T | typeof NONE>(NONE)

  function Provider(props: Required<React.ProviderProps<T>>) {
    return <Context.Provider {...props} />
  }

  function useContext() {
    const context = React.useContext(Context)
    if (context === NONE) {
      throw Error(
        `useSafe${displayName}Context must be used with its provider!`
      )
    }
    return context
  }

  return [Provider, useContext] as const
}
