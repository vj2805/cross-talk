import Link from "next/link"
import { MessagesSquareIcon } from "lucide-react"
import { getSession } from "@/services/getSession"
import { cn } from "@/services/shadcn"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"
import { ProfileButton } from "./ProfileButton"
import { CreateChatButton } from "./CreateChatButton"

export const Header: React.FC = async () => {
  const session = await getSession()
  return (
    <header className={cn("z-50 top-0", "sticky", "bg-white dark:bg-gray-900")}>
      <div
        className={cn(
          "mx-auto",
          "max-w-7xl",
          "p-5 pl-2",
          "bg-white dark:bg-gray-900",
          "flex flex-col sm:flex-row items-center"
        )}
      >
        <Logo />
        <nav
          className={cn("flex-1", "flex items-center justify-end space-x-4")}
        >
          {session ? (
            <>
              <Link
                prefetch={false}
                href="/chat"
              >
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link
              prefetch
              href="/pricing"
            >
              Pricing
            </Link>
          )}
          <ThemeToggle />
          <ProfileButton session={session} />
        </nav>
      </div>
      <div></div>
    </header>
  )
}
