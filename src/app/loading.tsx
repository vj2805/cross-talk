import { Spinner } from "@ui"
import { cn } from "@utilities"

export default function RootLoading() {
  return (
    <div className={cn("p-10", "flex items-center justify-center")}>
      <Spinner />
    </div>
  )
}
