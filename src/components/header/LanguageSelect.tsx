"use client"

import { usePathname } from "next/navigation"
import {
  NextLink,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Spinner,
} from "@/components/ui"
import { useAvailableLanguages } from "@/hooks/useAvailableLanguages"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { setPreferredLanguage } from "@/stores/language"
import type { Language } from "@/types/Language"
import { cn } from "@/utilities/string"
import { ErrorAlert } from "../ui"

export const LanguageSelect: React.FC = () => {
  const pathname = usePathname()
  const preferredLanguage = usePreferredLanguage()
  const [supported, unsupported, status, error] = useAvailableLanguages()

  if (status === "error") {
    return <ErrorAlert error={error} />
  }

  const isChatPage = pathname.includes("/chat")

  return (
    isChatPage && (
      <div>
        <Select
          onValueChange={value => setPreferredLanguage(value as Language)}
        >
          <SelectTrigger
            className={cn("w-[150px]", "text-black dark:text-white")}
          >
            <SelectValue placeholder={preferredLanguage} />
          </SelectTrigger>
          <SelectContent>
            {status === "loading" ? (
              <Spinner />
            ) : (
              <>
                {supported.map(language => (
                  <SelectItem
                    key={language}
                    value={language}
                  >
                    {language}
                  </SelectItem>
                ))}
                {unsupported.map(language => (
                  <NextLink
                    key={language}
                    prefetch={false}
                    href="/register"
                  >
                    <SelectItem
                      key={language}
                      disabled
                      value={language}
                      className={cn(
                        "my-1",
                        "py-2",
                        "bg-gray-300/50",
                        "text-gray-500 dark:text-white"
                      )}
                    >
                      {language} (PRO)
                    </SelectItem>
                  </NextLink>
                ))}
              </>
            )}
          </SelectContent>
        </Select>
      </div>
    )
  )
}
