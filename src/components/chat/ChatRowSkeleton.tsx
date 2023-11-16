import { Skeleton } from "@/components/ui"
import { cn } from "@/utilities/string"

export const ChatRowSkeleton: React.FC = () => (
  <div className={cn("p-5", "flex items-center space-x-2")}>
    <Skeleton className={cn("h-12 w-12", "rounded-full")} />
    <div className={cn("flex-1", "space-y-2")}>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  </div>
)
