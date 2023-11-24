import { ChatCreateButton } from "@/components/chat/CreateChatButton"
import { UpgradeBanner } from "@/components/subscription/UpgradeBanner"
import { Button, NextLink } from "@/components/ui"
import { MessagesSquareIcon } from "@/components/ui/icons"
import { ProfileButton } from "@/components/user/ProfileButton"
import { getServerUser } from "@/services/auth"
import { cn } from "@/utilities/string"
import { SignInButton } from "../user/SignInButton"
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
              <ChatCreateButton />
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
          {user ? <ProfileButton user={user} /> : <SignInButton />}
        </nav>
      </div>
      <UpgradeBanner />
    </header>
  )
}
