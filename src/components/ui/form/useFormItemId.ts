import { createContext } from "@/services/createContext"

type FormItemId = string

export const [FormItemIdProvider, useFormItemId] =
  createContext<FormItemId>("FormItemId")
