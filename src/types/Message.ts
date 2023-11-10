import type { Model } from "./Model"
import type { LanguageCode } from "./Language"
import type { User } from "./User"

export interface Message extends Model {
  input: string
  localeTimeString: string
  translated?: Partial<Record<LanguageCode, string>>
  user: User
}
