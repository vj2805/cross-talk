import type { User } from "next-auth"
import type { Timestamp } from "firebase/firestore"
import type { Language } from "./Language"

export type Message = {
  id: string
  input: string
  timestamp: Timestamp
  translated?: {
    [K in Language]?: string
  }
  user: Required<User>
}
