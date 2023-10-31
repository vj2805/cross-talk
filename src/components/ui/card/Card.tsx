import * as React from "react"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"section">
type Props = React.ComponentPropsWithoutRef<"section">

export const Card = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
)

Card.displayName = "Card"
