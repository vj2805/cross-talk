"use client"

import * as React from "react"
import * as PrimitiveToast from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/utilities/shadcn"
import type { VariantProps } from "class-variance-authority"

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = React.ReactElement<typeof ToastAction>

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "border bg-emerald-500 text-emerald-50",
      },
    },
  }
)

export const ToastProvider = PrimitiveToast.Provider

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Viewport>,
  React.ComponentPropsWithoutRef<typeof PrimitiveToast.Viewport>
>(({ className, ...props }, ref) => (
  <PrimitiveToast.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = PrimitiveToast.Viewport.displayName

export const Toast = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Root>,
  React.ComponentPropsWithoutRef<typeof PrimitiveToast.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <PrimitiveToast.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = PrimitiveToast.Root.displayName

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Action>,
  React.ComponentPropsWithoutRef<typeof PrimitiveToast.Action>
>(({ className, ...props }, ref) => (
  <PrimitiveToast.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = PrimitiveToast.Action.displayName

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Close>,
  React.ComponentPropsWithoutRef<typeof PrimitiveToast.Close>
>(({ className, ...props }, ref) => (
  <PrimitiveToast.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </PrimitiveToast.Close>
))
ToastClose.displayName = PrimitiveToast.Close.displayName

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Title>,
  React.ComponentPropsWithoutRef<typeof PrimitiveToast.Title>
>(({ className, ...props }, ref) => (
  <PrimitiveToast.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = PrimitiveToast.Title.displayName

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Description>,
  React.ComponentPropsWithoutRef<typeof PrimitiveToast.Description>
>(({ className, ...props }, ref) => (
  <PrimitiveToast.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = PrimitiveToast.Description.displayName
