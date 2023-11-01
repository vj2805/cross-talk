import { createContext } from "@/utilities/createContext"

type FormItemId = string

export const [FormItemIdProvider, useFormItemId] =
  createContext<FormItemId>("FormItemId")
