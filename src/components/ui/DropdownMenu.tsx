"use client"

import * as PrimitiveDropdownMenu from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"
import { forwardRef } from "react"

import { cn } from "@/utilities/shadcn"

type DropdownProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveDropdownMenu.Root
>

export function DropdownMenu(props: DropdownProps) {
  return <PrimitiveDropdownMenu.Root {...props} />
}

const SubTrigger = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      "flex items-center",
      "cursor-default select-none",
      "rounded-sm outline-none",
      "text-sm",
      "focus:bg-accent",
      "data-[state=open]:bg-accent",
      inset ? "pl-8" : "px-2 py-1.5",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </PrimitiveDropdownMenu.SubTrigger>
))
SubTrigger.displayName = PrimitiveDropdownMenu.SubTrigger.displayName

const SubContent = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubContent>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.SubContent>
>(({ className, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] p-1 overflow-hidden",
      "bg-popover text-popover-foreground",
      "rounded-md border shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
      "data-[side=top]:slide-in-from-bottom-2",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      className
    )}
    {...props}
  />
))
SubContent.displayName = PrimitiveDropdownMenu.SubContent.displayName

const Content = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <PrimitiveDropdownMenu.Portal>
    <PrimitiveDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] p-1 overflow-hidden",
        "bg-popover text-popover-foreground",
        "rounded-md border shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
        "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
        "data-[side=top]:slide-in-from-bottom-2",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        className
      )}
      {...props}
    />
  </PrimitiveDropdownMenu.Portal>
))
Content.displayName = PrimitiveDropdownMenu.Content.displayName

const Item = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Item
    ref={ref}
    className={cn(
      "relative flex items-center",
      "cursor-default select-none",
      "rounded-sm outline-none",
      "text-sm",
      "transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset ? "pl-8" : "px-2 py-1.5",
      className
    )}
    {...props}
  />
))
Item.displayName = PrimitiveDropdownMenu.Item.displayName

const Checkbox = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <PrimitiveDropdownMenu.CheckboxItem
    ref={ref}
    className={cn(
      "py-1.5 pl-8 pr-2",
      "relative flex items-center",
      "cursor-default select-none",
      "rounded-sm outline-none",
      "text-sm",
      "transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
Checkbox.displayName = PrimitiveDropdownMenu.CheckboxItem.displayName

const Radio = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.RadioItem>
>(({ className, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.RadioItem
    ref={ref}
    className={cn(
      "py-1.5 pl-8 pr-2",
      "relative flex items-center",
      "cursor-default select-none",
      "rounded-sm outline-none",
      "text-sm",
      "transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
Radio.displayName = PrimitiveDropdownMenu.RadioItem.displayName

const Label = forwardRef<
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
Label.displayName = PrimitiveDropdownMenu.Label.displayName

const Separator = forwardRef<
  React.ElementRef<typeof PrimitiveDropdownMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <PrimitiveDropdownMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
Separator.displayName = PrimitiveDropdownMenu.Separator.displayName

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
Shortcut.displayName = "DropdownMenuShortcut"

DropdownMenu.Trigger = PrimitiveDropdownMenu.Trigger
DropdownMenu.Content = Content
DropdownMenu.Group = PrimitiveDropdownMenu.Group

DropdownMenu.Portal = PrimitiveDropdownMenu.Portal

DropdownMenu.Sub = PrimitiveDropdownMenu.Sub
DropdownMenu.SubTrigger = SubTrigger
DropdownMenu.SubContent = SubContent

DropdownMenu.Separator = Separator

DropdownMenu.Shortcut = Shortcut

DropdownMenu.Item = Item
DropdownMenu.Label = Label

DropdownMenu.Radio = Radio
DropdownMenu.RadioGroup = PrimitiveDropdownMenu.RadioGroup

DropdownMenu.Checkbox = Checkbox
