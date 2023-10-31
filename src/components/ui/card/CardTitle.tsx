import * as React from "react"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"h3">
type Props = React.ComponentPropsWithoutRef<"h3">

export const CardHeaderTitle = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)

CardHeaderTitle.displayName = "Card/Title"
