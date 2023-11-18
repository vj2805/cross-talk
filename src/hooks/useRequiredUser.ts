import { useSession } from "next-auth/react"
import type { UseSessionOptions } from "next-auth/react"

export function useRequiredUser(
  onUnauthenticated: UseSessionOptions<true>["onUnauthenticated"] = undefined
) {
  const { data: session, status } = useSession({
    onUnauthenticated,
    required: true,
  })
  switch (status) {
    case "authenticated":
      return [session.user!, status] as const
    case "loading":
      return [undefined, status] as const
  }
}
