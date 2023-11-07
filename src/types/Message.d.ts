import type { User } from "next-auth"
import type { Language } from "./Language"

export type Message = {
  id: string
  input: string
  localeTimeString: string
  translated?: {
    [K in Language]?: string
  }
  user: User
}
