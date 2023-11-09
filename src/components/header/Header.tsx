import { Button, NextLink } from "@components/ui"
import { MessagesSquareIcon } from "@components/ui/icons"
import { getServerUser } from "@services/auth"
import { cn } from "@utilities/string"
import { CreateChatButton } from "../chat/CreateChatButton"
import { UpgradeBanner } from "../subscription/UpgradeBanner"
import { ProfileButton } from "../user/ProfileButton"
import { LanguageSelect } from "./LanguageSelect"
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
          <LanguageSelect />
          {user ? (
            <>
              <NextLink
                prefetch={false}
                href="/chat"
              >
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <MessagesSquareIcon className="text-black dark:text-white" />
                </Button>
              </NextLink>
              <CreateChatButton />
            </>
          ) : (
            <NextLink
              prefetch
              href="/pricing"
            >
              Pricing
            </NextLink>
          )}
          <ThemeToggle />
          <ProfileButton user={user} />
        </nav>
      </div>
      <UpgradeBanner />
    </header>
  )
}
