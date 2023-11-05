import { getServerSession } from "next-auth"

export async function getServerUser() {
  const session = await getServerSession()
  return session?.user
}
