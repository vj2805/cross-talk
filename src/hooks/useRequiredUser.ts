import type { User } from "next-auth"
import { useSession } from "next-auth/react"
import { UnexpectedError } from "@/errors/UnexpectedError"
import type { Observable } from "@/types/Observable"

export function useRequiredUser(): Observable<User> {
  const { data: session, status } = useSession({ required: true })
  if (status === "loading") {
    return [undefined, true, undefined]
  }
  if (!session.user) {
    return [undefined, false, new UnexpectedError(useRequiredUser.name)]
  }
  return [session.user, false, undefined]
}
