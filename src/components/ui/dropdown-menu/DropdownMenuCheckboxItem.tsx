"use client"

import { forwardRef } from "react"
import { CheckboxItem, ItemIndicator } from "@radix-ui/react-dropdown-menu"
import { Check } from "lucide-react"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof CheckboxItem>
type Props = React.ComponentPropsWithoutRef<typeof CheckboxItem>

export const DropdownMenuCheckboxItem = forwardRef<Ref, Props>(
  ({ className, children, checked, ...props }, ref) => (
    <CheckboxItem
      ref={ref}
      className={cn(
        "py-1.5 pl-8 pr-2",
        "flex items-center",
        "rounded-sm",
        "relative",
        "text-sm",
        "outline-none",
        "transition-colors",
        "cursor-default",
        "select-none",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none",
        "data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span
        className={cn(
          "absolute left-2",
          "h-3.5 w-3.5",
          "flex items-center justify-center"
        )}
      >
        <ItemIndicator>
          <Check className="h-4 w-4" />
        </ItemIndicator>
      </span>
      {children}
    </CheckboxItem>
  )
)

DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName
