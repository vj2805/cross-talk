"use client"

import * as React from "react"
import { cn } from "@/utilities/string"
import { Label } from "./label"
import { PrimitiveForm, PrimitiveSlot } from "./primitives"

type FormFieldName<
  FieldValues extends PrimitiveForm.FieldValues = PrimitiveForm.FieldValues,
  Name extends
    PrimitiveForm.FieldPath<FieldValues> = PrimitiveForm.FieldPath<FieldValues>,
> = Name

type FormItemId = string

const FormFieldNameContext = React.createContext<FormFieldName | undefined>(
  undefined
)

const FormItemIdContext = React.createContext<FormItemId | undefined>(undefined)

const useFormField = () => {
  const fieldName = React.useContext(FormFieldNameContext)
  if (!fieldName) {
    throw new Error("useFormField should be used within <FormField>")
  }
  const itemId = React.useContext(FormItemIdContext)
  if (!itemId) {
    throw new Error("useFormField should be used within <FormField>")
  }
  const { getFieldState, formState } = PrimitiveForm.useFormContext()
  return {
    formDescriptionId: `${itemId}-description`,
    formItemId: `${itemId}-item`,
    formMessageId: `${itemId}-message`,
    id: itemId,
    name: fieldName,
    ...getFieldState(fieldName, formState),
  }
}

export const Form = PrimitiveForm.FormProvider

export const FormField = <
  FieldValues extends PrimitiveForm.FieldValues = PrimitiveForm.FieldValues,
  Name extends
    PrimitiveForm.FieldPath<FieldValues> = PrimitiveForm.FieldPath<FieldValues>,
>(
  props: PrimitiveForm.ControllerProps<FieldValues, Name>
) => (
  <FormFieldNameContext.Provider value={props.name}>
    <PrimitiveForm.Controller {...props} />
  </FormFieldNameContext.Provider>
)
FormField.displayName = FormField.name

export const FormItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <FormItemIdContext.Provider value={React.useId()}>
    <div
      ref={ref}
      className={cn("space-y-2", className)}
      {...props}
    />
  </FormItemIdContext.Provider>
))
FormItem.displayName = FormItem.name

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()
  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = FormLabel.name

export const FormControl = React.forwardRef<
  React.ElementRef<typeof PrimitiveSlot.Slot>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSlot.Slot>
>((props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()
  return (
    <PrimitiveSlot.Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = FormControl.name

export const FormDescription = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-muted-foreground", "text-sm", className)}
      {...props}
    />
  )
})
FormDescription.displayName = FormDescription.name

export const FormMessage = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error?.message ?? children
  return body ? (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-destructive", "text-sm font-medium", className)}
      {...props}
    >
      {body}
    </p>
  ) : null
})
FormMessage.displayName = FormMessage.name
