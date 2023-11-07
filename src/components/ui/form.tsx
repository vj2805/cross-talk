"use client"

import * as React from "react"
import { cn } from "@/utilities/shadcn"
import { PrimitiveForm, PrimitiveSlot } from "./builtins"
import { Label } from "./label"

export const Form = PrimitiveForm.FormProvider

type FormFieldContextValue<
  TFieldValues extends PrimitiveForm.FieldValues = PrimitiveForm.FieldValues,
  TName extends
    PrimitiveForm.FieldPath<TFieldValues> = PrimitiveForm.FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext =
  React.createContext<Uncertain<FormFieldContextValue>>(undefined)

export const FormField = <
  TFieldValues extends PrimitiveForm.FieldValues = PrimitiveForm.FieldValues,
  TName extends
    PrimitiveForm.FieldPath<TFieldValues> = PrimitiveForm.FieldPath<TFieldValues>,
>({
  ...props
}: PrimitiveForm.ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <PrimitiveForm.Controller {...props} />
    </FormFieldContext.Provider>
  )
}

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { getFieldState, formState } = PrimitiveForm.useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  const itemContext = React.useContext(FormItemContext)

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name: fieldContext.name,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext =
  React.createContext<Uncertain<FormItemContextValue>>(undefined)

export const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

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
FormLabel.displayName = "FormLabel"

export const FormControl = React.forwardRef<
  React.ElementRef<typeof PrimitiveSlot.Slot>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSlot.Slot>
>(({ ...props }, ref) => {
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
FormControl.displayName = "FormControl"

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"
