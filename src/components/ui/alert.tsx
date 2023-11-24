import * as React from "react"
import { cva } from "class-variance-authority"
import type { ErrorWithAction } from "@/errors/ErrorWithAction"
import { cn } from "@/utilities/string"

const variants = cva(
  cn(
    "w-full",
    "p-4",
    "border rounded-lg",
    "relative",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
    "[&>svg]:text-foreground",
    "[&>svg~*]:pl-7",
    "[&>svg+div]:translate-y-[-3px]"
  ),
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
  }
)

export const Alert = React.forwardRef<
  React.ElementRef<"div">,
  React.PropsWithVariant<React.ComponentPropsWithoutRef<"div">, typeof variants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(variants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = Alert.name

export const AlertTitle = React.forwardRef<
  React.ElementRef<"h5">,
  React.ComponentPropsWithoutRef<"h5">
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1", "font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = AlertTitle.name

export const AlertDescription = React.forwardRef<
  React.ElementRef<"p">,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = AlertDescription.name

type ErrorAlertProps = {
  error: Array<ErrorWithAction | undefined> | ErrorWithAction
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  const errors = Array.isArray(error) ? error : [error]
  return errors.map(
    error =>
      error && (
        <Alert
          key={`${error.name}/${error.message}`}
          variant="destructive"
          className="flex mx-2 w-auto items-center"
        >
          <AlertTitle className="pr-4 text-xl font-bold border-r border-destructive">
            {error.name}
          </AlertTitle>
          <AlertDescription className="pl-5 justify-end font-extrabold">
            {error.message}
          </AlertDescription>
          {error.action}
        </Alert>
      )
  )
}
