import { forwardRef } from "react"
import { cn } from "@/services/shadcn"

type Ref = React.ElementRef<"p">
type Props = React.ComponentPropsWithoutRef<"p">

export const CardDescription = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)

CardDescription.displayName = "Card/Description"
