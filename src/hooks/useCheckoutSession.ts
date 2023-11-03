import { useEffect, useRef, useState } from "react"
import { onSnapshot } from "firebase/firestore"
import { addCheckoutSession } from "../services/addCheckoutSession"
import type { Unsubscribe } from "firebase/firestore"
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

  async function createCheckoutSession() {
    if (!session?.user?.id) {
      return
    }
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
        alert(`An error occured: ${error.message}`)
      }
      if (url) {
        window.location.assign(url)
      }
      setProcessing(false)
    })
  }

  return { createCheckoutSession, processing }
}
