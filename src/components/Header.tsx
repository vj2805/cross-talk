import Link from "next/link"
import { MessagesSquareIcon } from "lucide-react"
import { getServerSession } from "@/services/getServerSession"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"
import { UserButton } from "./UserButton"
import { CreateChatButton } from "./CreateChatButton"

export async function Header() {
  const session = await getServerSession()
  return (
    <header className="top-0 z-50 sticky bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-5 pl-2 bg-white dark:bg-gray-900 flex flex-col sm:flex-row items-center">
        <Logo />
        <nav className="flex-1 flex items-center justify-end space-x-4">
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
          <UserButton session={session} />
        </nav>
      </div>
      <div></div>
    </header>
  )
}
