"use client"

import { forwardRef } from "react"
import { Root } from "@radix-ui/react-avatar"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Root>
type Props = React.ComponentPropsWithoutRef<typeof Root>

export const Avatar = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))

Avatar.displayName = Root.displayName
