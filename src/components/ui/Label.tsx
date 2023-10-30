"use client"

import * as PrimitiveLabel from "@radix-ui/react-label"

import { cn } from "@/utilities/shadcn"

type LabelProps = React.ComponentPropsWithoutRef<typeof PrimitiveLabel.Root>

export function Label({ className, ...props }: LabelProps) {
  return (
    <PrimitiveLabel.Root
      className={cn(
        "text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}
Label.displayName = PrimitiveLabel.Root.displayName
