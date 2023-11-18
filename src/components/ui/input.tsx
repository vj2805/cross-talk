import * as React from "react"
import { cn } from "@/utilities/string"

export const Input = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-10 w-full",
        "px-3 py-2",
        "bg-background",
        "text-sm",
        "border border-input rounded-md",
        "ring-offset-background",
        "flex",
        "file:bg-transparent",
        "file:text-sm file:font-medium",
        "file:border-0",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = Input.name
