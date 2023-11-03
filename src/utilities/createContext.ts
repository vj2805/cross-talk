import React from "react"

export const createContext = <T>(displayName: string) => {
  const Context = React.createContext<Uncertain<T>>(undefined)
  const Provider = Context.Provider
  const useContext = () => {
    const context = React.useContext(Context)
    if (context === undefined) {
      throw new Error(`${displayName}Context must be used with its provider!`)
    }
    return context
  }
  return [Provider, useContext] as const
}
