import { forwardRef } from "react"
import { Root } from "@radix-ui/react-toast"
import { cn } from "@/services/shadcn"
import { toastVariants } from "./variants"

type Ref = React.ElementRef<typeof Root>
export type ToastProps = React.PropsWithVariant<
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
