import { forwardRef } from "react"
import { Label } from "@/components/ui/label/Label"
import { cn } from "@/utilities/shadcn"
import { useFormField } from "./useFormField"
import { useFormItemId } from "./useFormItemId"

type Ref = React.ElementRef<typeof Label>
type Props = React.ComponentPropsWithoutRef<typeof Label>

export const FormLabel = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    const { error } = useFormField()
    const formItemId = useFormItemId()
    return (
      <Label
        ref={ref}
        className={cn(error && "text-destructive", className)}
        htmlFor={formItemId}
        {...props}
      />
    )
  }
)

FormLabel.displayName = "Form/Label"
