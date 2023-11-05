"use client"

import { forwardRef } from "react"
import { SubTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronRight } from "@icons"
import { cn } from "@utilities"

type Ref = React.ElementRef<typeof SubTrigger>
type Props = React.PropsWithWithInset<
  React.ComponentPropsWithoutRef<typeof SubTrigger>
>

export const DropdownMenuSubTrigger = forwardRef<Ref, Props>(
  ({ className, withInset, children, ...props }, ref) => (
    <SubTrigger
      ref={ref}
      className={cn(
        "px-2 py-1.5",
        {
          "pl-8": withInset,
        },
        "flex items-center",
        "text-sm",
        "rounded-sm",
        "outline-none",
        "cursor-default",
        "select-none",
        "focus:bg-accent data-[state=open]:bg-accent",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className={cn("ml-auto", "h-4 w-4")} />
    </SubTrigger>
  )
)

DropdownMenuSubTrigger.displayName = SubTrigger.displayName
