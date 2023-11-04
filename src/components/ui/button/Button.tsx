import { forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/services/shadcn"
import { buttonVariants } from "./variants"

type Ref = React.ElementRef<"button">
type Props = React.PropsWithVariant<
  React.PropsWithAsChild<React.ComponentPropsWithoutRef<"button">>,
  typeof buttonVariants
>

export const Button = forwardRef<Ref, Props>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
