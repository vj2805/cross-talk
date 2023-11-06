import type { Language } from "./Language"
import type { User } from "next-auth"
import type { Timestamp } from "firebase/firestore"

export type Message = {
  id: string
  input: string
  timestamp: Timestamp
  translated?: {
    [K in Language]?: string
  }
  user: Required<User>
}
