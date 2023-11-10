import type { Model } from "./Model"
import type { LanguageCode } from "@services/language"
import type { User } from "@services/user"

export interface Message extends Model {
  input: string
  localeTimeString: string
  translated?: Partial<Record<LanguageCode, string>>
  user: User
}
