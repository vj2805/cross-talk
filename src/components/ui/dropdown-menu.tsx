"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { Check, ChevronRight, Circle } from "@/components/ui/icons"
import { cn } from "@/utilities/string"
import { PrimitiveDropdownMenu } from "./primitives"

const contentVariants = cva(
  cn(
    "z-50",
    "min-w-[8rem]",
    "p-1",
    "bg-popover",
    "text-popover-foreground",
    "border rounded-md",
    "overflow-hidden",
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0",
    "data-[state=closed]:zoom-out-95",
    "data-[side=top]:slide-in-from-bottom-2",
    "data-[side=right]:slide-in-from-left-2",
    "data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2"
  ),
  {
    variants: {
      type: {
        root: "shadow-md",
        sub: "shadow-lg",
      },
    },
  }
)

const itemVariants = cva(
  cn(
    "pr-2 py-1.5",
    "text-sm",
    "rounded-sm",
    "outline-none",
    "cursor-default",
    "select-none",
    "transition-colors",
    "relative flex items-center",
    "focus:bg-accent",
    "focus:text-accent-foreground",
    "data-[disabled]:opacity-50",
    "data-[disabled]:pointer-events-none"
  ),
  {
    defaultVariants: {
      type: "default",
    },
    variants: {
      type: {
        default: "pl-2",
        indented: "pl-8",
      },
    },
  }
)

const itemContainerStyles = cn(
  "absolute left-2",
  "h-3.5 w-3.5",
  "flex items-center justify-center"
)

export const DropdownMenu = PrimitiveDropdownMenu.Root

export const DropdownMenuTrigger = PrimitiveDropdownMenu.Trigger

export const DropdownMenuGroup = PrimitiveDropdownMenu.Group

export const DropdownMenuPortal = PrimitiveDropdownMenu.Portal

export const DropdownMenuSub = PrimitiveDropdownMenu.Sub

export const DropdownMenuRadioGroup = PrimitiveDropdownMenu.RadioGroup

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubTrigger>,
  React.PropsWithWithInset<
    React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubTrigger>
  >
>(({ className, withInset, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      "px-2 py-1.5",
      "text-sm",
      "rounded-sm",
      "outline-none",
      "cursor-default",
      "select-none",
      "flex items-center",
      "focus:bg-accent",
      "data-[state=open]:bg-accent",
      {
        "pl-8": withInset,
      },
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className={cn("ml-auto", "h-4 w-4")} />
  </PrimitiveDropdownMenu.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  PrimitiveDropdownMenu.SubTrigger.displayName

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubContent>
>(({ className, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubContent
    ref={ref}
    className={contentVariants({ className, type: "sub" })}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  PrimitiveDropdownMenu.SubContent.displayName

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <PrimitiveDropdownMenu.Portal>
    <PrimitiveDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={contentVariants({ className, type: "root" })}
      {...props}
    />
  </PrimitiveDropdownMenu.Portal>
))
DropdownMenuContent.displayName = PrimitiveDropdownMenu.Content.displayName

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Item>,
  React.PropsWithWithInset<
    React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Item>
  >
>(({ className, withInset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Item
    ref={ref}
    className={itemVariants({
      className,
      type: withInset ? "indented" : "default",
    })}
    {...props}
  />
))
DropdownMenuItem.displayName = PrimitiveDropdownMenu.Item.displayName

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <PrimitiveDropdownMenu.CheckboxItem
    ref={ref}
    className={itemVariants({ className, type: "indented" })}
    checked={checked}
    {...props}
  >
    <span className={itemContainerStyles}>
      <PrimitiveDropdownMenu.ItemIndicator>
        <Check className="h-4 w-4" />
      </PrimitiveDropdownMenu.ItemIndicator>
    </span>
    {children}
  </PrimitiveDropdownMenu.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  PrimitiveDropdownMenu.CheckboxItem.displayName

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.RadioItem
    ref={ref}
    className={itemVariants({ className, type: "indented" })}
    {...props}
  >
    <span className={itemContainerStyles}>
      <PrimitiveDropdownMenu.ItemIndicator>
        <Circle className={cn("h-2 w-2", "fill-current")} />
      </PrimitiveDropdownMenu.ItemIndicator>
    </span>
    {children}
  </PrimitiveDropdownMenu.RadioItem>
))
DropdownMenuRadioItem.displayName = PrimitiveDropdownMenu.RadioItem.displayName

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Label>,
  React.PropsWithWithInset<
    React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Label>
  >
>(({ className, withInset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5",
      "text-sm font-semibold",
      {
        "pl-8": withInset,
      },
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = PrimitiveDropdownMenu.Label.displayName

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <PrimitiveDropdownMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1", "h-px", "bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = PrimitiveDropdownMenu.Separator.displayName

export const DropdownMenuShortcut = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "ml-auto",
        "text-xs tracking-widest",
        "opacity-60",
        className
      )}
      {...props}
    />
  )
})
DropdownMenuShortcut.displayName = DropdownMenuShortcut.name
