"use client"

import { forwardRef } from "react"
import { SubContent } from "@radix-ui/react-dropdown-menu"
import { cn } from "@utilities"

type Ref = React.ElementRef<typeof SubContent>
type Props = React.ComponentPropsWithoutRef<typeof SubContent>

export const DropdownMenuSubMenuContent = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <SubContent
      ref={ref}
      className={cn(
        "z-50",
        "min-w-[8rem]",
        "p-1",
        "bg-popover",
        "text-popover-foreground",
        "border rounded-md",
        "shadow-lg",
        "overflow-hidden",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
        "data-[side=left]:slide-in-from-right-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2",
        className
      )}
      {...props}
    />
  )
)

DropdownMenuSubMenuContent.displayName = SubContent.displayName
