"use client"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui"
import { Moon, Sun } from "@components/ui/icons"
import { useTheme } from "@hooks/builtins"
import { cn } from "@utilities/string"

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem]",
              "rotate-0 dark:-rotate-90",
              "scale-100 dark:scale-0",
              "transition-all"
            )}
          />
          <Moon
            className={cn(
              "absolute",
              "h-[1.2rem] w-[1.2rem]",
              "rotate-90 dark:rotate-0",
              "scale-0 dark:scale-100",
              "transition-all"
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
