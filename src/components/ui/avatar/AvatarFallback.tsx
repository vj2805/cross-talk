"use client"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof AvatarPrimitive.Fallback>
type Props = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>

export const AvatarFallback = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
)

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
