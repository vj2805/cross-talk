import { useState } from "react"
import { onSnapshot } from "firebase/firestore"
import { addCheckoutSession } from "../services/addCheckoutSession"
import type { Session } from "next-auth"

interface UseCreateCheckoutParams {
  session: Nullish<Session>
  priceId: string
}

export function useCheckoutSession({
  priceId,
  session,
}: UseCreateCheckoutParams) {
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<Nullish<Error>>(null)

  async function createCheckoutSession() {
    if (!session?.user?.id) {
      return
    }
    setError(null)
    let docRef
    try {
      setProcessing(true)
      docRef = await addCheckoutSession({
        priceId,
        userId: session.user.id,
      })
    } catch {
      setProcessing(false)
      return
    }
    onSnapshot(docRef, snap => {
      const data = snap.data()
      const url = data?.url
      const error = data?.error
      if (error) {
        setError(error)
      }
      if (url) {
        window.location.assign(url)
      }
      setProcessing(false)
    })
  }

  return { createCheckoutSession, error, processing }
}
