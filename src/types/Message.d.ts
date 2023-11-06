import type { User } from "firebase/auth"
import type { Timestamp } from "firebase/firestore"
import type { Language } from "./Language"

export type Message = {
  id: string
  input: string
  timestamp: Timestamp
  translated?: {
    [K in Language]?: string
  }
  user: Required<Pick<User, "displayName" | "email" | "photoURL" | "uid">>
}
