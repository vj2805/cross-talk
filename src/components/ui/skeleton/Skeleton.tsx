import { forwardRef } from "react"
import { cn } from "@utilities"

type Ref = React.ElementRef<"div">
type Props = React.ComponentPropsWithoutRef<"div">

export const Skeleton = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("bg-muted", "rounded-md", "animate-pulse", className)}
      {...props}
    />
  )
)

Skeleton.displayName = "Skeleton"
