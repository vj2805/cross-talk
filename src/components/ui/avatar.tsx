"use client"

import * as React from "react"
import { cn } from "@/utilities/string"
import { NextImage } from "./builtins"
import { PrimitiveAvatar } from "./primitives"

export const Avatar = React.forwardRef<
  React.ElementRef<typeof PrimitiveAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof PrimitiveAvatar.Root>
>(({ className, ...props }, ref) => (
  <PrimitiveAvatar.Root
    ref={ref}
    className={cn(
      "h-10 w-10 shrink-0",
      "rounded-full",
      "overflow-hidden",
      "relative flex",
      className
    )}
    {...props}
  />
))
Avatar.displayName = PrimitiveAvatar.Root.displayName

export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof NextImage>,
  React.ComponentPropsWithoutRef<typeof NextImage>
>(({ className, alt, ...props }, ref) => (
  <NextImage
    ref={ref}
    alt={alt}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = NextImage.displayName

export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof PrimitiveAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof PrimitiveAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <PrimitiveAvatar.Fallback
    ref={ref}
    className={cn(
      "h-full w-full",
      "bg-muted",
      "rounded-full",
      "flex items-center justify-center",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = PrimitiveAvatar.Fallback.displayName
