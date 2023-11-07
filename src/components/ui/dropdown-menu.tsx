"use client"

import * as React from "react"
import { Check, ChevronRight, Circle } from "lucide-react"
import { cn } from "@/utilities/shadcn"
import { PrimitiveDropdownMenu } from "./builtins"

export const DropdownMenu = PrimitiveDropdownMenu.Root

export const DropdownMenuTrigger = PrimitiveDropdownMenu.Trigger

export const DropdownMenuGroup = PrimitiveDropdownMenu.Group

export const DropdownMenuPortal = PrimitiveDropdownMenu.Portal

export const DropdownMenuSub = PrimitiveDropdownMenu.Sub

export const DropdownMenuRadioGroup = PrimitiveDropdownMenu.RadioGroup

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
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
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
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
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PrimitiveDropdownMenu.Portal>
))
DropdownMenuContent.displayName = PrimitiveDropdownMenu.Content.displayName

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
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
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
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
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <PrimitiveDropdownMenu.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </PrimitiveDropdownMenu.ItemIndicator>
    </span>
    {children}
  </PrimitiveDropdownMenu.RadioItem>
))
DropdownMenuRadioItem.displayName = PrimitiveDropdownMenu.RadioItem.displayName

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
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
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = PrimitiveDropdownMenu.Separator.displayName

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
