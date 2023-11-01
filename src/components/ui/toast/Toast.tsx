import { forwardRef } from "react"
import { Root } from "@radix-ui/react-toast"
import { cn } from "@/utilities/shadcn"
import { toastVariants } from "./variants"
import type { PropsWithVariant } from "@/types/globals"

type Ref = React.ElementRef<typeof Root>
export type ToastProps = PropsWithVariant<
  React.ComponentPropsWithoutRef<typeof Root>,
  typeof toastVariants
>

export const Toast = forwardRef<Ref, ToastProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

Toast.displayName = Root.displayName
