"use client"

import { usePathname } from "next/navigation"
import {
  NextLink,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@/components/ui"
import { useLanguages } from "@/hooks/useLanguages"
import { setPreferredLanguage } from "@/stores/useStore"
import type { Language } from "@/types/Language"
import { ErrorAlert } from "../ui"

export const LanguageSelect: React.FC = () => {
  const pathname = usePathname()
  const [languages, isLanguagesLoading, languageError] = useLanguages()

  if (isLanguagesLoading) {
    return <Skeleton className="w-[150px]" />
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

  const isChatPage = pathname.includes("/chat")

  return (
    isChatPage && (
      <div>
        <Select
          onValueChange={value => setPreferredLanguage(value as Language)}
        >
          <SelectTrigger className="w-[150px] text-black dark:text-white">
            <SelectValue placeholder={languages.preferred.name} />
          </SelectTrigger>
          <SelectContent>
            {languages.supported.map(language => (
              <SelectItem
                key={language}
                value={language}
              >
                {language}
              </SelectItem>
            ))}
            {languages.unsupported.map(language => (
              <NextLink
                key={language}
                prefetch={false}
                href="/register"
              >
                <SelectItem
                  key={language}
                  disabled
                  value={language}
                  className="my-1 py-2 bg-gray-300/50 text-gray-500 dark:text-white"
                >
                  {language} (PRO)
                </SelectItem>
              </NextLink>
            ))}
          </SelectContent>
        </Select>
      </div>
    )
  )
}
