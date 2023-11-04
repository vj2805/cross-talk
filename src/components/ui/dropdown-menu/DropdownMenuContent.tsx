"use client"

import { forwardRef } from "react"
import { Content, Portal } from "@radix-ui/react-dropdown-menu"
import { cn } from "@/services/shadcn"

type Ref = React.ElementRef<typeof Content>
type Props = React.ComponentPropsWithoutRef<typeof Content>

export const DropdownMenuContent = forwardRef<Ref, Props>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Portal>
      <Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50",
          "min-w-[8rem]",
          "p-1",
          "bg-popover",
          "text-popover-foreground",
          "border rounded-md",
          "shadow-md",
          "overflow-hidden",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      />
    </Portal>
  )
)

DropdownMenuContent.displayName = Content.displayName
