import { cn } from "@/utilities/shadcn"

type CardProps = React.ComponentPropsWithoutRef<"section">

export function Card({ className, ...props }: CardProps) {
  return (
    <section
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  )
}
Card.displayName = "Card"

type HeaderProps = React.ComponentPropsWithoutRef<"header">

function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}
Header.displayName = "CardHeader"

type TitleProps = React.ComponentPropsWithoutRef<"h3">

function Title({ className, ...props }: TitleProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}
Title.displayName = "CardTitle"

type DescriptionProps = React.ComponentPropsWithoutRef<"p">

function Description({ className, ...props }: DescriptionProps) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
Description.displayName = "CardDescription"

type ContentProps = React.ComponentPropsWithoutRef<"div">

function Content({ className, ...props }: ContentProps) {
  return (
    <div
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
}
Content.displayName = "CardContent"

type FooterProps = React.ComponentPropsWithoutRef<"footer">

function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}
Footer.displayName = "CardFooter"

Header.Title = Title
Header.Description = Description

Card.Header = Header
Card.Content = Content
Card.Footer = Footer
