import { Slot } from "@radix-ui/react-slot"
import { useId } from "react"
import { Controller, FormProvider, useFormContext } from "react-hook-form"

import { Label as BaseLabel } from "@/components/ui/Label"
import { createContext } from "@/utilities/createContext"
import { cn } from "@/utilities/shadcn"

import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form"

type FormProps<
  TFieldValues extends FieldValues,
  TContext,
  TTransformedValues extends FieldValues | undefined,
> = React.ComponentProps<
  typeof FormProvider<TFieldValues, TContext, TTransformedValues>
>

function Form<
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(props: FormProps<TFieldValues, TContext, TTransformedValues>) {
  return <FormProvider {...props} />
}
Form.displayName = "Form"

type FieldName<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = TName

const [FieldNameProvider, useFieldName] = createContext<FieldName>("FieldName")

function Field<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerProps<TFieldValues, TName>) {
  return (
    <FieldNameProvider value={props.name}>
      <Controller {...props} />
    </FieldNameProvider>
  )
}
Field.displayName = "Form/Field"

const useFormField = () => {
  const { getFieldState, formState } = useFormContext()
  return getFieldState(useFieldName(), formState)
}

const [ItemIdProvider, useItemId] = createContext<string>("ItemId")

type ItemProps = React.ComponentPropsWithoutRef<"div">

function Item({ className, ...props }: ItemProps) {
  return (
    <ItemIdProvider value={useId()}>
      <div
        className={cn("space-y-2", className)}
        {...props}
      />
    </ItemIdProvider>
  )
}
Item.displayName = "Form/Field/Item"

type LabelProps = React.ComponentProps<typeof BaseLabel>

function Label({ className, ...props }: LabelProps) {
  const { error } = useFormField()
  return (
    <BaseLabel
      className={cn(error && "text-destructive", className)}
      htmlFor={useItemId()}
      {...props}
    />
  )
}
Label.displayName = "Form/Field/Item/Label"

const Control = (props: React.ComponentPropsWithoutRef<typeof Slot>) => {
  const itemId = useItemId()
  const { error } = useFormField()
  const ariaDescribedBy = !error
    ? `${itemId}-description`
    : `${itemId}-description ${itemId}-message`
  return (
    <Slot
      id={itemId}
      aria-describedby={ariaDescribedBy}
      aria-invalid={!!error}
      {...props}
    />
  )
}
Control.displayName = "Form/Field/Item/Control"

type DescriptionProps = React.ComponentPropsWithoutRef<"p">

function Description({ className, ...props }: DescriptionProps) {
  const itemId = useItemId()
  return (
    <p
      id={`${itemId}-description`}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
Description.displayName = "Form/Field/Item/Description"

type MessageProps = React.ComponentPropsWithoutRef<"p">

function Message({ className, children, ...props }: MessageProps) {
  const itemId = useItemId()
  const { error } = useFormField()

  const body = error ? error.message : children

  if (!body) {
    return null
  }

  return (
    <p
      id={`${itemId}-message`}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
}
Message.displayName = "FormMessage"

Item.Label = Label
Item.Control = Control
Item.Description = Description
Item.Message = Message

Field.Item = Item

Form.Field = Field
