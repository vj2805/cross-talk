import { Spinner } from "@/components/ui"
import { cn } from "@/utilities/string"

export default function RootLoading() {
  return (
    <div className={cn("p-10", "flex items-center justify-center")}>
      <Spinner />
    </div>
  )
}
