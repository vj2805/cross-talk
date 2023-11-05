import { forwardRef } from "react"
import { cn } from "@utilities"
import { useFormField } from "./useFormField"

type Ref = React.ElementRef<"p">
type Props = React.ComponentPropsWithoutRef<"p">

export const FormDescription = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    const formItemId = useFormField()
    return (
      <p
        ref={ref}
        id={`${formItemId}:description`}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    )
  }
)

FormDescription.displayName = "Form/Description"
