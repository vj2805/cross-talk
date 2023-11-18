import { useSession } from "next-auth/react"

export function useUser() {
  const { status, data: session } = useSession()
  switch (status) {
    case "authenticated":
      return [session.user!, status] as const
    case "loading":
      return [undefined, status] as const
    case "unauthenticated":
      return [null, status] as const
  }
}
