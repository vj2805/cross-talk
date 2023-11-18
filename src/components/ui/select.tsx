"use client"

import * as React from "react"
import { Check, ChevronDown } from "@/components/ui/icons"
import { cn } from "@/utilities/string"
import { PrimitiveSelect } from "./primitives"

export const Select = PrimitiveSelect.Root

export const SelectGroup = PrimitiveSelect.Group

export const SelectValue = PrimitiveSelect.Value

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <PrimitiveSelect.Trigger
    ref={ref}
    className={cn(
      "h-10 w-full",
      "px-3 py-2",
      "bg-background",
      "text-sm",
      "border border-input rounded-md",
      "ring-offset-background",
      "flex items-center justify-between",
      "placeholder:text-muted-foreground",
      "focus:outline-none",
      "focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:opacity-50",
      "disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    {children}
    <PrimitiveSelect.Icon asChild>
      <ChevronDown className={cn("h-4 w-4", "opacity-50")} />
    </PrimitiveSelect.Icon>
  </PrimitiveSelect.Trigger>
))
SelectTrigger.displayName = PrimitiveSelect.Trigger.displayName

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <PrimitiveSelect.Portal>
    <PrimitiveSelect.Content
      ref={ref}
      className={cn(
        "z-50",
        "min-w-[8rem]",
        "bg-popover",
        "text-popover-foreground",
        "border rounded-md",
        "shadow-md",
        "overflow-hidden",
        "relative",
        "data-[state=open]:animate-in",
        "data-[state=open]:fade-in-0",
        "data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95",
        "data-[side=top]:slide-in-from-bottom-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        position === "popper" && [
          "data-[side=top]:-translate-y-1",
          "data-[side=right]:translate-x-1",
          "data-[side=bottom]:translate-y-1",
          "data-[side=left]:-translate-x-1",
        ],
        className
      )}
      position={position}
      {...props}
    >
      <PrimitiveSelect.Viewport
        className={cn(
          "p-1",
          position === "popper" && [
            "h-[var(--radix-select-trigger-height)] w-full",
            "min-w-[var(--radix-select-trigger-width)]",
          ]
        )}
      >
        {children}
      </PrimitiveSelect.Viewport>
    </PrimitiveSelect.Content>
  </PrimitiveSelect.Portal>
))
SelectContent.displayName = PrimitiveSelect.Content.displayName

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Label>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Label>
>(({ className, ...props }, ref) => (
  <PrimitiveSelect.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2", "text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = PrimitiveSelect.Label.displayName

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Item>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Item>
>(({ className, children, ...props }, ref) => (
  <PrimitiveSelect.Item
    ref={ref}
    className={cn(
      "py-1.5 pl-8 pr-2",
      "w-full",
      "text-sm",
      "rounded-sm",
      "outline-none",
      "cursor-default",
      "select-none",
      "relative flex items-center",
      "focus:bg-accent",
      "focus:text-accent-foreground",
      "data-[disabled]:opacity-50",
      "data-[disabled]:pointer-events-none",
      className
    )}
    {...props}
  >
    <span
      className={cn(
        "absolute left-2",
        "h-3.5 w-3.5",
        "flex items-center justify-center"
      )}
    >
      <PrimitiveSelect.ItemIndicator>
        <Check className="h-4 w-4" />
      </PrimitiveSelect.ItemIndicator>
    </span>

    <PrimitiveSelect.ItemText>{children}</PrimitiveSelect.ItemText>
  </PrimitiveSelect.Item>
))
SelectItem.displayName = PrimitiveSelect.Item.displayName

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof PrimitiveSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof PrimitiveSelect.Separator>
>(({ className, ...props }, ref) => (
  <PrimitiveSelect.Separator
    ref={ref}
    className={cn("-mx-1 my-1", "h-px", "bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = PrimitiveSelect.Separator.displayName
