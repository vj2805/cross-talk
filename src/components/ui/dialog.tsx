"use client"

import * as React from "react"
import { X } from "@/components/ui/icons"
import { cn } from "@/utilities/string"
import { PrimitiveDialog } from "./primitives"

export const Dialog = PrimitiveDialog.Root

export const DialogTrigger = PrimitiveDialog.Trigger

export const DialogPortal = PrimitiveDialog.Portal

export const DialogClose = PrimitiveDialog.Close

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Overlay>
>(({ className, ...props }, ref) => (
  <PrimitiveDialog.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50",
      "bg-background/80 backdrop-blur-sm",
      "data-[state=open]:animate-in",
      "data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = PrimitiveDialog.Overlay.displayName

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Content>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <PrimitiveDialog.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50",
        "w-full max-w-lg",
        "p-6",
        "grid gap-4",
        "bg-background",
        "border",
        "shadow-lg",
        "translate-x-[-50%] translate-y-[-50%] duration-200",
        "sm:rounded-lg",
        "data-[state=open]:animate-in",
        "data-[state=open]:fade-in-0",
        "data-[state=open]:zoom-in-95",
        "data-[state=open]:slide-in-from-top-[48%]",
        "data-[state=open]:slide-in-from-left-1/2",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95",
        "data-[state=closed]:slide-out-to-top-[48%]",
        "data-[state=closed]:slide-out-to-left-1/2",
        className
      )}
      {...props}
    >
      {children}
      <PrimitiveDialog.Close
        className={cn(
          "absolute right-4 top-4",
          "opacity-70 transition-opacity",
          "rounded-sm",
          "ring-offset-background",
          "hover:opacity-100",
          "focus:outline-none",
          "focus:ring-2 focus:ring-ring focus:ring-offset-2",
          "disabled:pointer-events-none",
          "data-[state=open]:bg-accent",
          "data-[state=open]:text-muted-foreground"
        )}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </PrimitiveDialog.Close>
    </PrimitiveDialog.Content>
  </DialogPortal>
))
DialogContent.displayName = PrimitiveDialog.Content.displayName

export const DialogHeader = React.forwardRef<
  React.ElementRef<"header">,
  React.ComponentPropsWithoutRef<"header">
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5",
      "text-center",
      "sm:text-left",
      className
    )}
    {...props}
  />
))
DialogHeader.displayName = DialogHeader.name

export const DialogFooter = React.forwardRef<
  React.ElementRef<"footer">,
  React.ComponentPropsWithoutRef<"footer">
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={cn(
      "flex flex-col-reverse",
      "sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
))
DialogFooter.displayName = DialogFooter.name

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Title>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Title>
>(({ className, ...props }, ref) => (
  <PrimitiveDialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = PrimitiveDialog.Title.displayName

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof PrimitiveDialog.Description>,
  React.ComponentPropsWithoutRef<typeof PrimitiveDialog.Description>
>(({ className, ...props }, ref) => (
  <PrimitiveDialog.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = PrimitiveDialog.Description.displayName
