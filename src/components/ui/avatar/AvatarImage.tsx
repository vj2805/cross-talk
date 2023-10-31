"use client"

import { forwardRef } from "react"
import { Image } from "@radix-ui/react-avatar"
import { cn } from "@/utilities/shadcn"

type Ref = React.ElementRef<typeof Image>
type Props = React.ComponentPropsWithoutRef<typeof Image>

export const AvatarImage = forwardRef<Ref, Props>(
  ({ className, src, alt, ...props }, ref) => (
    <Image
      ref={ref}
      alt={alt}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
)

AvatarImage.displayName = Image.displayName
