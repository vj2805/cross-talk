"use client"

import { setLanguage, useIsPro, useLanguage, useSubscription } from "@stores"
import { usePathname } from "@hooks"
import {
  getLanguageName,
  getNotSupportedLanguages,
  getSupportedLanguages,
} from "@services"
import {
  Link,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Spinner,
} from "@ui"
import { cn } from "@utilities"
import type { Language } from "@types"

export const LanguageSelect: React.FC = () => {
  const language = useLanguage()
  const subscription = useSubscription()
  const isPro = useIsPro()
  const pathname = usePathname()

  const isChatPage = pathname.includes("/chat")

  return (
    isChatPage && (
      <div>
        <Select onValueChange={value => setLanguage(value as Language)}>
          <SelectTrigger
            className={cn("w-[150px]", "text-black dark:text-white")}
          >
            <SelectValue placeholder={getLanguageName(language)} />
          </SelectTrigger>
          <SelectContent>
            {subscription === undefined ? (
              <Spinner />
            ) : (
              <>
                {getSupportedLanguages(isPro).map(language => (
                  <SelectItem
                    key={language}
                    value={language}
                  >
                    {getLanguageName(language)}
                  </SelectItem>
                ))}
                {getNotSupportedLanguages(isPro).map(language => (
                  <Link
                    key={language}
                    prefetch={false}
                    href="/subscribe"
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
                      {getLanguageName(language)}
                    </SelectItem>
                  </Link>
                ))}
              </>
            )}
          </SelectContent>
        </Select>
      </div>
    )
  )
}
