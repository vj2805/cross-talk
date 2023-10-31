import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"

import { cn } from "@/utilities/shadcn"

import { variants } from "./variants"

import type { VariantProps } from "class-variance-authority"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof variants> & {
    asChild?: boolean
  }

export const Button = forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        ref={ref}
        className={cn(variants({ className, size, variant }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
