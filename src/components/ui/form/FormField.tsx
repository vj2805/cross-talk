import { Controller } from "react-hook-form"
import { FormFieldNameProvider } from "./useFormFieldName"
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form"

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
) => (
  <FormFieldNameProvider value={props.name}>
    <Controller {...props} />
  </FormFieldNameProvider>
)

FormField.displayName = "Form/Field"
