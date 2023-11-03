"use client"

import { forwardRef } from "react"
import { Root, Indicator } from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Root>
type Props = React.ComponentPropsWithoutRef<typeof Root>

export const Checkbox = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(
        "peer",
        "h-4 w-4 shrink-0",
        "border border-primary rounded-sm",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <Indicator
        className={cn("flex items-center justify-center", "text-current")}
      >
        <Check className="h-4 w-4" />
      </Indicator>
    </Root>
  )
)

Checkbox.displayName = Root.displayName
