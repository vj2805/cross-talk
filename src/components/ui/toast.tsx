"use client"

import React from "react"
import { cva } from "class-variance-authority"
import { X } from "@/components/ui/icons"
import { cn } from "@/utilities/string"
import { PrimitiveToast } from "./primitives"

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = React.ReactElement<typeof ToastAction>

const toastVariants = cva(
  cn(
    "group",
    "w-full",
    "p-6 pr-8",
    "relative flex items-center justify-between space-x-4",
    "border rounded-md",
    "shadow-lg",
    "overflow-hidden",
    "pointer-events-auto",
    "transition-all",
    "data-[state=open]:animate-in",
    "data-[state=open]:slide-in-from-top-full",
    "data-[state=open]:sm:slide-in-from-bottom-full",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-80",
    "data-[state=closed]:slide-out-to-right-full",
    "data-[swipe=move]:transition-none",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
    "data-[swipe=end]:animate-out",
    "data-[swipe=cancel]:translate-x-0"
  ),
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: cn("bg-background", "text-foreground", "border"),
        destructive: cn(
          "group",
          "destructive",
          "bg-destructive",
          "text-destructive-foreground",
          "border-destructive"
        ),
        success: cn("bg-emerald-500", "text-emerald-50", "border"),
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
      cn(
        "z-[100]",
        "fixed top-0",
        "max-h-screen w-full",
        "p-4",
        "flex flex-col-reverse",
        "sm:right-0 sm:bottom-0 sm:top-auto",
        "sm:flex-col",
        "md:max-w-[420px]"
      ),
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = PrimitiveToast.Viewport.displayName

export const Toast = React.forwardRef<
  React.ElementRef<typeof PrimitiveToast.Root>,
  React.PropsWithVariant<
    React.ComponentPropsWithoutRef<typeof PrimitiveToast.Root>,
    typeof toastVariants
  >
>(({ className, variant, ...props }, ref) => {
  return (
    <PrimitiveToast.Root
      ref={ref}
      className={toastVariants({ className, variant })}
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
      cn(
        "shrink-0 h-8",
        "px-3",
        "bg-transparent",
        "text-sm font-medium",
        "border rounded-md",
        "ring-offset-background",
        "transition-colors",
        "inline-flex items-center justify-center",
        "hover:bg-secondary",
        "focus:outline-none",
        "focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:opacity-50",
        "disabled:pointer-events-none",
        "group-[.destructive]:border-muted/40",
        "group-[.destructive]:hover:bg-destructive",
        "group-[.destructive]:hover:text-destructive-foreground",
        "group-[.destructive]:hover:border-destructive/30",
        "group-[.destructive]:focus:ring-destructive"
      ),
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
      "absolute right-2 top-2",
      "p-1",
      "text-foreground/50",
      "rounded-md",
      "opacity-0",
      "transition-opacity",
      "hover:text-foreground",
      "focus:opacity-100",
      "focus:outline-none",
      "focus:ring-2",
      "group-hover:opacity-100",
      "group-[.destructive]:text-red-300",
      "group-[.destructive]:hover:text-red-50",
      "group-[.destructive]:focus:ring-red-400",
      "group-[.destructive]:focus:ring-offset-red-600",
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
    className={cn("text-sm", "opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = PrimitiveToast.Description.displayName
