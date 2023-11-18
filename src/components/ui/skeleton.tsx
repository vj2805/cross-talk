import * as React from "react"
import { cn } from "@/utilities/string"

export const Skeleton = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("bg-muted", "rounded-md", "animate-pulse", className)}
      {...props}
    />
  )
})
Skeleton.displayName = Skeleton.name
