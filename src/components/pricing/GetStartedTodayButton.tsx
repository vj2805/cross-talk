import Link from "next/link"
import { cn } from "@/utilities/shadcn"

export const GetStartedTodayButton: React.FC = () => (
  <Link
    href="/register"
    className={cn(
      "block mt-8 px-3.5 py-2",
      "bg-cyan-500",
      "text-center text-sm font-semibold leading-6 text-white",
      "rounded-md shadow-sm",
      "hover:bg-cyan-500",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",
      "cursor-pointer",
      "disabled:opacity-80"
    )}
  >
    Get Started Today
  </Link>
)
