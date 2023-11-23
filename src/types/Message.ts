import type { User } from "next-auth"
import type { LanguageCode } from "./Language"
import type { Model } from "./Model"
import type { Timestamp } from "./Timestamp"

export interface Message extends Model {
  input: string
  timestamp: Timestamp
  user: User
  translated?: Record<LanguageCode, string>
}
