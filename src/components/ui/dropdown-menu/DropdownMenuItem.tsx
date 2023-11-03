"use client"

import { forwardRef } from "react"
import { Item } from "@radix-ui/react-dropdown-menu"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Item>
type Props = React.PropsWithWithInset<
  React.ComponentPropsWithoutRef<typeof Item>
>

export const DropdownMenuItem = forwardRef<Ref, Props>(
  ({ className, withInset, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        "px-2 py-1.5",
        {
          "pl-8": withInset,
        },
        "text-sm",
        "relative",
        "flex items-center",
        "rounded-sm",
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
    />
  )
)

DropdownMenuItem.displayName = Item.displayName
