import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { useFormField } from "./useFormField"
import { useFormItemId } from "./useFormItemId"

type Ref = React.ElementRef<typeof Slot>
type Props = React.ComponentPropsWithoutRef<typeof Slot>

export const FormControl = forwardRef<Ref, Props>((props, ref) => {
  const { error } = useFormField()
  const formItemId = useFormItemId()
  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formItemId}:description`
          : `${formItemId}:description ${formItemId}:message`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})

FormControl.displayName = "Form/Control"
