"use client"

import { createContext, useContext, useState } from "react"
import type { Language } from "@types"

const useLanguageState = () => useState<Language>("en")

const LanguageContext =
  createContext<Uncertain<ReturnType<typeof useLanguageState>>>(undefined)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<
  React.PropsWithRequiredChildren
> = props => {
  return (
    <LanguageContext.Provider value={useLanguageState()}>
      {props.children}
    </LanguageContext.Provider>
  )
}
