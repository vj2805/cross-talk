import { Skeleton } from "@/components/ui"

export function ChatAdminControlsSkeleton() {
  return (
    <div className="m-5 mb-0 flex justify-end space-x-2">
      <Skeleton className="h-10 w-44" />
      <Skeleton className="h-10 w-36" />
      <Skeleton className="h-10 w-28" />
    </div>
  )
}
