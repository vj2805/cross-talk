"use client"

import * as PrimitiveCheckbox from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/utilities/shadcn"

type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveCheckbox.Root
>

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <PrimitiveCheckbox.Root
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      <PrimitiveCheckbox.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </PrimitiveCheckbox.Indicator>
    </PrimitiveCheckbox.Root>
  )
}
Checkbox.displayName = PrimitiveCheckbox.Root.displayName
