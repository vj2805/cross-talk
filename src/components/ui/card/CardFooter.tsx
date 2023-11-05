import { forwardRef } from "react"
import { cn } from "@utilities"

type Ref = React.ElementRef<"footer">
type Props = React.ComponentPropsWithoutRef<"footer">

export const CardFooter = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn("p-6 pt-0", "flex items-center", className)}
      {...props}
    />
  )
)

CardFooter.displayName = "Card/Footer"
