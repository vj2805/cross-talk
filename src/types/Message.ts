import type { Model } from "./Model"
import type { LanguageCode } from "./Language"
import type { User } from "./User"
import type { Timestamp } from "./Timestamp"

export interface Message extends Model {
  input: string
  timestamp: Timestamp
  user: User
  translated?: Record<LanguageCode, string>
}
