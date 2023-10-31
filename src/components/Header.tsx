import { Logo } from "./Logo"
import { ThemeToggle } from "./ThemeToggle"
import { UserButton } from "./UserButton"

export function Header() {
  return (
    <header className="top-0 z-50 sticky bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-5 pl-2 bg-white dark:bg-gray-900 flex flex-col sm:flex-row items-center">
        <Logo />
        <nav className="flex-1 flex items-center justify-end space-x-4">
          <ThemeToggle />
          <UserButton />
        </nav>
      </div>
      <div></div>
    </header>
  )
}
