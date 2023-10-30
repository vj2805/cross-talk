import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/utilities/shadcn"

import { variants } from "./variants"

import type { VariantProps } from "class-variance-authority"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof variants> & {
    asChild?: boolean
  }

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button"
  return (
    <Component
      className={cn(variants({ className, size, variant }))}
      {...props}
    />
  )
}
Button.displayName = "Button"
