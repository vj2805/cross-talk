import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/utilities/string"
import { PrimitiveSlot } from "./primitives"

const variants = cva(
  cn(
    "inline-flex items-center justify-center",
    "text-sm font-medium whitespace-nowrap",
    "disabled:opacity-50",
    "rounded-md",
    "focus-visible:outline-none",
    "ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "transition-colors"
  ),
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: cn("h-10", "px-4 py-2"),
        icon: cn("aspect-square h-10 py-2"),
        lg: cn("h-11", "px-8", "rounded-md"),
        sm: cn("h-9", "px-3", "rounded-md"),
      },
      variant: {
        default: cn(
          "bg-primary hover:bg-primary/90",
          "text-primary-foreground"
        ),
        destructive: cn(
          "bg-destructive hover:bg-destructive/90",
          "text-destructive-foreground"
        ),
        ghost: cn("hover:bg-accent", "hover:text-accent-foreground"),
        link: cn("text-primary", "underline-offset-4 hover:underline"),
        outline: cn(
          "bg-background hover:bg-accent",
          "hover:text-accent-foreground",
          "border border-input"
        ),
        secondary: cn(
          "bg-secondary hover:bg-secondary/80",
          "text-secondary-foreground"
        ),
      },
    },
  }
)

export const Button = React.forwardRef<
  React.ElementRef<"button">,
  React.PropsWithVariant<
    React.PropsWithAsChild<React.ComponentPropsWithoutRef<"button">>,
    typeof variants
  >
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Component = asChild ? PrimitiveSlot.Slot : "button"
  return (
    <Component
      className={variants({ className, size, variant })}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = Button.name
