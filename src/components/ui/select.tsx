"use client"

import * as React from "react"
import { Check, ChevronDown } from "@icons"
import { cn } from "@/utilities/shadcn"
import { PrimitiveSelect } from "./builtins"

const Select = PrimitiveSelect.Root

const SelectGroup = PrimitiveSelect.Group

const SelectValue = PrimitiveSelect.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <PrimitiveSelect.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <PrimitiveSelect.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </PrimitiveSelect.Icon>
  </PrimitiveSelect.Trigger>
))
SelectTrigger.displayName = PrimitiveSelect.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <PrimitiveSelect.Portal>
    <PrimitiveSelect.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <PrimitiveSelect.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </PrimitiveSelect.Viewport>
    </PrimitiveSelect.Content>
  </PrimitiveSelect.Portal>
))
SelectContent.displayName = PrimitiveSelect.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Label>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Label>
>(({ className, ...props }, ref) => (
  <PrimitiveSelect.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = PrimitiveSelect.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Item>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Item>
>(({ className, children, ...props }, ref) => (
  <PrimitiveSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <PrimitiveSelect.ItemIndicator>
        <Check className="h-4 w-4" />
      </PrimitiveSelect.ItemIndicator>
    </span>

    <PrimitiveSelect.ItemText>{children}</PrimitiveSelect.ItemText>
  </PrimitiveSelect.Item>
))
SelectItem.displayName = PrimitiveSelect.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Separator>
>(({ className, ...props }, ref) => (
  <PrimitiveSelect.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = PrimitiveSelect.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
