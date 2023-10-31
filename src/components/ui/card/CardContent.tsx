import * as React from "react"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"div">
type Props = React.ComponentPropsWithoutRef<"div">

export const CardContent = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
)

CardContent.displayName = "Card/Content"
