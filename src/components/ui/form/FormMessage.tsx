import { forwardRef } from "react"
import { cn } from "@utilities"
import { useFormField } from "./useFormField"
import { useFormItemId } from "./useFormItemId"

type Ref = React.ElementRef<"p">
type Props = React.ComponentPropsWithoutRef<"p">

export const FormMessage = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => {
    const { error } = useFormField()
    const formItemId = useFormItemId()

    const body = error ? error.message : children

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={`${formItemId}:message`}
        className={cn("text-sm font-medium text-destructive", className)}
        {...props}
      >
        {body}
      </p>
    )
  }
)

FormMessage.displayName = "Form/Message"
