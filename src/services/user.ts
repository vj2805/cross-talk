import type { UserService } from "@/types/UserService"
import { default as userService } from "./internal/firebase/user"

export { signIn, signOut } from "next-auth/react"

export const { getUserByEmail, subscribeToUser, syncUser }: UserService =
  userService
