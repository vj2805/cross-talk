"use client"

import { forwardRef } from "react"
import { Fallback } from "@radix-ui/react-avatar"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Fallback>
type Props = React.ComponentPropsWithoutRef<typeof Fallback>

export const AvatarFallback = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
)

AvatarFallback.displayName = Fallback.displayName
