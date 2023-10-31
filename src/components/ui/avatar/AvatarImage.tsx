"use client"
import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof AvatarPrimitive.Image>
type Props = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

export const AvatarImage = React.forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
)

AvatarImage.displayName = AvatarPrimitive.Image.displayName
