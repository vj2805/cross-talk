import { getServerSession } from "next-auth"
import { authOptions } from "@auth"

export async function getServerUser() {
  const session = await getServerSession()
  return session?.user
}
