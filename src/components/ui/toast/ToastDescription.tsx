import { forwardRef } from "react"
import { Description } from "@radix-ui/react-toast"
import { cn } from "@utilities"

type Ref = React.ElementRef<typeof Description>
type Props = React.ComponentPropsWithoutRef<typeof Description>

export const ToastDescription = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
)

ToastDescription.displayName = Description.displayName
