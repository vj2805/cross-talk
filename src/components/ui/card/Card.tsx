import { forwardRef } from "react"
import { cn } from "@utilities"

type Ref = React.ElementRef<"section">
type Props = React.ComponentPropsWithoutRef<"section">

export const Card = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-card",
      "text-card-foreground",
      "border rounded-lg",
      "shadow-sm",
      className
    )}
    {...props}
  />
))

Card.displayName = "Card"
