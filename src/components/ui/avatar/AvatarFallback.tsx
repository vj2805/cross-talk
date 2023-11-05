"use client"

import { forwardRef } from "react"
import { Fallback } from "@radix-ui/react-avatar"
import { cn } from "@utilities"

type Ref = React.ElementRef<typeof Fallback>
type Props = React.ComponentPropsWithoutRef<typeof Fallback>

export const AvatarFallback = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={cn(
        "h-full w-full",
        "bg-muted",
        "rounded-full",
        "flex items-center justify-center",
        className
      )}
      {...props}
    />
  )
)

AvatarFallback.displayName = Fallback.displayName
