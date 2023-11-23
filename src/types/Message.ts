import type { LanguageCode } from "./Language"
import type { Model } from "./Model"
import type { Timestamp } from "./Timestamp"
import type { User } from "./User"

export interface Message extends Model {
  input: string
  timestamp: Timestamp
  user: User
  translated?: Record<LanguageCode, string>
}
