import { forwardRef } from "react"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"header">
type Props = React.ComponentPropsWithoutRef<"header">

export const CardHeader = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn("p-6", "flex flex-col space-y-1.5", className)}
      {...props}
    />
  )
)

CardHeader.displayName = "Card/Header"
