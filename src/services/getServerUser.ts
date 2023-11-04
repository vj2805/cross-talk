import { clientAuth } from "@/firebase"

export async function getServerUser() {
  return clientAuth.currentUser
}
