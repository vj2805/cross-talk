"use client"

import { usePathname } from "@hooks"
import {
  setPreferredLanguage,
  useNotSupportedLanguages,
  usePreferredLanguage,
  useSupportedLanguages,
} from "@stores/language"
import { useIsPro, useSubscription } from "@stores/subscription"
import {
  NextLink,
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
  const pathname = usePathname()
  const preferredLanguage = usePreferredLanguage()
  const subscription = useSubscription()
  const isPro = useIsPro()
  const supportedLanguages = useSupportedLanguages(isPro)
  const notSupportedLanguages = useNotSupportedLanguages(isPro)

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
            {subscription === undefined ? (
              <Spinner />
            ) : (
              <>
                {supportedLanguages?.map(language => (
                  <SelectItem
                    key={language}
                    value={language}
                  >
                    {language}
                  </SelectItem>
                ))}
                {notSupportedLanguages?.map(language => (
                  <NextLink
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
