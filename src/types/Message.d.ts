import type { SupportedLanguage } from "./SupportedLanguage"
import type { User } from "next-auth"
import type { Timestamp } from "firebase/firestore"

export type Message = {
  id: string
  input: string
  timestamp: Timestamp
  translated?: {
    [K in SupportedLanguage]?: string
  }
  user: Required<User>
}
