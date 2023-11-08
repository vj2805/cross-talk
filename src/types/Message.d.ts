import type { User } from "next-auth"
import type { Language } from "./Language"

export interface Message {
  id: string
  input: string
  localeTimeString: string
  translated?: Partial<Record<Language, string>>
  user: User
}
