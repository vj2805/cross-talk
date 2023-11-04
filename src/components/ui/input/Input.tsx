import { forwardRef } from "react"
import { cn } from "@/services/shadcn"

type Ref = React.ElementRef<"input">
type Props = React.ComponentPropsWithoutRef<"input">

export const Input = forwardRef<Ref, Props>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-10 w-full",
        "px-3 py-2",
        "bg-background file:bg-transparent",
        "text-sm file:text-sm file:font-medium placeholder:text-muted-foreground",
        "border file:border-0 border-input rounded-md",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        "flex",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)

Input.displayName = "Input"
