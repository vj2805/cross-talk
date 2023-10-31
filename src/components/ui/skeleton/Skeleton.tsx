import { forwardRef } from "react"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"div">
type Props = React.ComponentPropsWithoutRef<"div">

export const Skeleton = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
)

Skeleton.displayName = "Skeleton"
