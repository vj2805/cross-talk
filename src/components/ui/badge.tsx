import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/utilities/string"

const variants = cva(
  cn(
    "px-2.5 py-0.5",
    "text-xs font-semibold",
    "border rounded-full",
    "focus:outline-none",
    "focus:ring-2 focus:ring-ring focus:ring-offset-2",
    "inline-flex items-center",
    "transition-colors"
  ),
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: cn(
          "bg-primary hover:bg-primary/80",
          "text-primary-foreground",
          "border-transparent"
        ),
        destructive: cn(
          "bg-destructive hover:bg-destructive/80",
          "text-destructive-foreground",
          "border-transparent"
        ),
        outline: "text-foreground",
        secondary: cn(
          "bg-secondary hover:bg-secondary/80",
          "text-secondary-foreground",
          "border-transparent"
        ),
      },
    },
  }
)

export const Badge = React.forwardRef<
  React.ElementRef<"div">,
  React.PropsWithVariant<React.ComponentPropsWithoutRef<"div">, typeof variants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={variants({ className, variant })}
    {...props}
  />
))
Badge.displayName = Badge.name
