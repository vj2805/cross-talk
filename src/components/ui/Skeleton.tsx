import { cn } from "@/utilities/shadcn"

type SkeletonProps = React.ComponentPropsWithoutRef<"div">

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}
