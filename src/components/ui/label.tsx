"use client"

import * as React from "react"
import { cn } from "@/utilities/shadcn"
import { PrimitiveLabel } from "./builtins"

export const Label = React.forwardRef<
  React.ElementRef<typeof PrimitiveLabel.Root>,
  React.ComponentPropsWithoutRef<typeof PrimitiveLabel.Root>
>(({ className, ...props }, ref) => (
  <PrimitiveLabel.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = PrimitiveLabel.Root.displayName
