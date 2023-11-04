import { forwardRef } from "react"
import { Title } from "@radix-ui/react-toast"
import { cn } from "@/services/shadcn"

type Ref = React.ElementRef<typeof Title>
type Props = React.ComponentPropsWithoutRef<typeof Title>

export const ToastTitle = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
)

ToastTitle.displayName = Title.displayName
