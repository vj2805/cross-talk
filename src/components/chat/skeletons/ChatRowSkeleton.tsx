import { Skeleton } from "@/components/ui"

export function ChatRowSkeleton() {
  return (
    <div className="p-5 flex items-center space-x-2">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  )
}
