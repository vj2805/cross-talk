"use client"

import { forwardRef } from "react"
import { ItemIndicator, RadioItem } from "@radix-ui/react-dropdown-menu"
import { Circle } from "@icons"
import { cn } from "@utilities"

type Ref = React.ElementRef<typeof RadioItem>
type Props = React.ComponentPropsWithoutRef<typeof RadioItem>

export const DropdownMenuRadioItem = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <RadioItem
      ref={ref}
      className={cn(
        "py-1.5 pl-8 pr-2",
        "flex items-center",
        "text-sm",
        "rounded-sm",
        "relative",
        "outline-none",
        "select-none",
        "cursor-default",
        "transition-colors",
        "focus:bg-accent",
        "focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </ItemIndicator>
      </span>
      {children}
    </RadioItem>
  )
)

DropdownMenuRadioItem.displayName = RadioItem.displayName
