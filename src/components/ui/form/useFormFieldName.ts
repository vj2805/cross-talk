import { createContext } from "@/utilities/createContext"
import type { FieldPath, FieldValues } from "react-hook-form"

type FormFieldName<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TName

export const [FormFieldNameProvider, useFormFieldName] =
  createContext<FormFieldName>("FormFieldName")
