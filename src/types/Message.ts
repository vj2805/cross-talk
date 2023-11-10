import type { LanguageCode } from "@services/language"
import type { User } from "@services/user"

export interface Message {
  id: string
  input: string
  localeTimeString: string
  translated?: Partial<Record<LanguageCode, string>>
  user: User
}
