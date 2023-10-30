import * as PrimitiveToast from "@radix-ui/react-toast"
import { X } from "lucide-react"

import { cn } from "@/utilities/shadcn"

import { variants } from "./variants"

import type { VariantProps } from "class-variance-authority"

export type ToastProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveToast.Root
> &
  VariantProps<typeof variants>

export function Toast({ className, variant, ...props }: ToastProps) {
  return (
    <PrimitiveToast.Root
      className={cn(variants({ variant }), className)}
      {...props}
    />
  )
}
Toast.displayName = PrimitiveToast.Root.displayName

const Provider = PrimitiveToast.Provider

type ViewportProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveToast.Viewport
>

function Viewport({ className, ...props }: ViewportProps) {
  return (
    <PrimitiveToast.Viewport
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4",
        "sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col",
        "md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
}
Viewport.displayName = PrimitiveToast.Viewport.displayName

type ActionProps = React.ComponentPropsWithoutRef<typeof PrimitiveToast.Action>

function Action({ className, ...props }: ActionProps) {
  return (
    <PrimitiveToast.Action
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors",
        "hover:bg-secondary",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "group-[.destructive]:border-muted/40",
        "group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground",
        "group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
}
Action.displayName = PrimitiveToast.Action.displayName

type CloseProps = React.ComponentPropsWithoutRef<typeof PrimitiveToast.Close>

function Close({ className, ...props }: CloseProps) {
  return (
    <PrimitiveToast.Close
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity",
        "hover:text-foreground",
        "focus:opacity-100 focus:outline-none focus:ring-2",
        "group-hover:opacity-100",
        "group-[.destructive]:text-red-300",
        "group-[.destructive]:hover:text-red-50",
        "group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      )}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </PrimitiveToast.Close>
  )
}
Close.displayName = PrimitiveToast.Close.displayName

type TitleProps = React.ComponentPropsWithoutRef<typeof PrimitiveToast.Title>

function Title({ className, ...props }: TitleProps) {
  return (
    <PrimitiveToast.Title
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
}
Title.displayName = PrimitiveToast.Title.displayName

type DescriptionProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveToast.Description
>

function Description({ className, ...props }: DescriptionProps) {
  return (
    <PrimitiveToast.Description
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
}
Description.displayName = PrimitiveToast.Description.displayName

export type ToastActionElement = React.ReactElement<typeof Action>

Toast.Provider = Provider
Toast.Viewport = Viewport
Toast.Title = Title
Toast.Description = Description
Toast.Close = Close
Toast.Action = Action
