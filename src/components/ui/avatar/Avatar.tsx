"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof AvatarPrimitive.Root>
type Props = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>

export const Avatar = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
)

Avatar.displayName = AvatarPrimitive.Root.displayName
