import * as React from "react"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"p">
type Props = React.ComponentPropsWithoutRef<"p">

export const CardDescription = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)

CardDescription.displayName = "Card/Description"
