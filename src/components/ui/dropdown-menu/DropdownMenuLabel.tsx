"use client"

import { forwardRef } from "react"
import { Label } from "@radix-ui/react-dropdown-menu"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Label>
type Props = React.PropsWithWithInset<
  React.ComponentPropsWithoutRef<typeof Label>
>

export const DropdownMenuLabel = forwardRef<Ref, Props>(
  ({ className, withInset, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        withInset && "pl-8",
        className
      )}
      {...props}
    />
  )
)

DropdownMenuLabel.displayName = Label.displayName
