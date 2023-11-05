import { createContext } from "@utilities"

type FormItemId = string

export const [FormItemIdProvider, useFormItemId] =
  createContext<FormItemId>("FormItemId")
