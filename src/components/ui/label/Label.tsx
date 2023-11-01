"use client"

import { forwardRef } from "react"
import { Root } from "@radix-ui/react-label"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Root>
type Props = React.ComponentPropsWithoutRef<typeof Root>

export const Label = forwardRef<Ref, Props>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))

Label.displayName = Root.displayName
