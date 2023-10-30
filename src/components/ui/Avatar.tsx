"use client"

import * as PrimitiveAvatar from "@radix-ui/react-avatar"

import { cn } from "@/utilities/shadcn"

type AvatarProps = React.ComponentPropsWithoutRef<typeof PrimitiveAvatar.Root>

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <PrimitiveAvatar.Root
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}
Avatar.displayName = PrimitiveAvatar.Root.displayName

type ImageProps = React.ComponentPropsWithoutRef<typeof PrimitiveAvatar.Image>

function Image({ className, alt, ...props }: ImageProps) {
  return (
    <PrimitiveAvatar.Image
      className={cn("aspect-square h-full w-full", className)}
      alt={alt}
      {...props}
    />
  )
}
Image.displayName = PrimitiveAvatar.Image.displayName

type FallbackProps = React.ComponentPropsWithoutRef<
  typeof PrimitiveAvatar.Fallback
>

function Fallback({ className, ...props }: FallbackProps) {
  return (
    <PrimitiveAvatar.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )}
      {...props}
    />
  )
}
Fallback.displayName = PrimitiveAvatar.Fallback.displayName

Avatar.Image = Image
Avatar.Fallback = Fallback
