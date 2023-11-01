"use client"

import { forwardRef } from "react"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<"span">
type Props = React.ComponentPropsWithoutRef<"span">

export const DropdownMenuShortcut = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
        {...props}
      />
    )
  }
)

DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
