import type { User } from "next-auth"
import type { LanguageCode } from "./Language"
import type { Model } from "./Model"
import type { TimeSinceEpoch } from "./TimeSinceEpoch"

export interface Message extends Model {
  input: string
  timestamp: TimeSinceEpoch
  user: User
  translated?: Record<LanguageCode, string>
}
