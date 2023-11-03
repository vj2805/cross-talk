"use client"

import { forwardRef } from "react"
import { ChevronRight } from "lucide-react"
import { SubTrigger } from "@radix-ui/react-dropdown-menu"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof SubTrigger>
type Props = React.PropsWithWithInset<
  React.ComponentPropsWithoutRef<typeof SubTrigger>
>

export const DropdownMenuSubTrigger = forwardRef<Ref, Props>(
  ({ className, withInset, children, ...props }, ref) => (
    <SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        withInset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </SubTrigger>
  )
)

DropdownMenuSubTrigger.displayName = SubTrigger.displayName
