import { forwardRef, useId } from "react"
import { cn } from "@/utilities/shadcn"
import { FormItemIdProvider } from "./useFormItemId"

type Ref = React.ElementRef<"div">
type Props = React.ComponentPropsWithoutRef<"div">

export const FormItem = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <FormItemIdProvider value={useId()}>
      <div
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      />
    </FormItemIdProvider>
  )
)

FormItem.displayName = "Form/Item"
