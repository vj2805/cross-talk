import { forwardRef } from "react"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"footer">
type Props = React.ComponentPropsWithoutRef<"footer">

export const CardFooter = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)

CardFooter.displayName = "Card/Footer"
