import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

import type { PropsWithAsChild, PropsWithVariant } from "@/types/globals"
import { cn } from "@/utilities/shadcn"

import { buttonVariants } from "./buttonVariants"

type Ref = React.ElementRef<"button">
type Props = PropsWithVariant<
  PropsWithAsChild<React.ComponentPropsWithoutRef<"button">>,
  typeof buttonVariants
>

export const Button = React.forwardRef<Ref, Props>(
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
