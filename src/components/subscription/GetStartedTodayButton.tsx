import { NextLink } from "@/components/ui"
import { cn } from "@/utilities/string"

export const GetStartedTodayButton: React.FC = () => (
  <NextLink
    href="/register"
    className={cn(
      "block",
      "mt-8",
      "px-3.5 py-2",
      "bg-cyan-500 hover:bg-cyan-600",
      "text-center text-sm font-semibold leading-6 text-white",
      "rounded-md",
      "shadow-sm",
      "cursor-pointer",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600",
      "disabled:opacity-80"
    )}
  >
    Get Started Today
  </NextLink>
)
