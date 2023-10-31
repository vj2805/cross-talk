import { useFormContext } from "react-hook-form"
import { useFormFieldName } from "./useFormFieldName"

export const useFormField = () => {
  const formFieldName = useFormFieldName()
  const { getFieldState, formState } = useFormContext()
  return getFieldState(formFieldName, formState)
}
