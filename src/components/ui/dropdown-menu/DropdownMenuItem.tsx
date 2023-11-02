"use client"

import { forwardRef } from "react"
import { Item } from "@radix-ui/react-dropdown-menu"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Item>
type Props = Local.PropsWithWithInset<
  React.ComponentPropsWithoutRef<typeof Item>
>

export const DropdownMenuItem = forwardRef<Ref, Props>(
  ({ className, withInset, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        withInset && "pl-8",
        className
      )}
      {...props}
    />
  )
)

DropdownMenuItem.displayName = Item.displayName
