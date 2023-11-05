import { cva } from "class-variance-authority"
import { cn } from "@utilities"

export const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center",
    "whitespace-nowrap",
    "text-sm font-medium",
    "rounded-md",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50"
  ),
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: cn("h-10", "px-4 py-2"),
        icon: "h-10 w-10",
        lg: cn("h-11", "px-8", "rounded-md"),
        sm: cn("h-9", "px-3", "rounded-md"),
      },
      variant: {
        default: cn(
          "bg-primary hover:bg-primary/90",
          "text-primary-foreground"
        ),
        destructive: cn(
          "bg-destructive hover:bg-destructive/90",
          " text-destructive-foreground"
        ),
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: cn("text-primary", "underline-offset-4 hover:underline"),
        outline: cn(
          "border border-input",
          "bg-background hover:bg-accent",
          "hover:text-accent-foreground"
        ),
        secondary: cn(
          "bg-secondary hover:bg-secondary/80",
          "text-secondary-foreground"
        ),
      },
    },
  }
)
