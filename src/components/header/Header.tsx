import { MessagesSquareIcon } from "@icons"
import { getServerUser } from "@services"
import { Link } from "@ui"
import { cn } from "@utilities"
import { CreateChatButton } from "../chat/CreateChatButton"
import { ProfileButton } from "../user/ProfileButton"
import { UpgradeBanner } from "../subscription/UpgradeBanner"
import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"

export const Header: React.FC = async () => {
  const user = await getServerUser()
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
          {user ? (
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
          <ProfileButton user={user} />
        </nav>
      </div>
      <UpgradeBanner />
    </header>
  )
}