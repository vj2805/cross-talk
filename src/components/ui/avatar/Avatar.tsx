"use client"

import { forwardRef } from "react"
import { Root } from "@radix-ui/react-avatar"
import { cn } from "@utilities"

type Ref = React.ElementRef<typeof Root>
type Props = React.ComponentPropsWithoutRef<typeof Root>

export const Avatar = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "shrink-0",
      "h-10 w-10",
      "rounded-full",
      "relative",
      "flex overflow-hidden",
      className
    )}
    {...props}
  />
))

Avatar.displayName = Root.displayName
