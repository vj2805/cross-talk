import { useEffect, useRef, useState } from "react"
import { onSnapshot } from "firebase/firestore"
import { addCheckoutSession } from "../services/addCheckoutSession"
import type { Unsubscribe } from "firebase/firestore"
import type { Session } from "next-auth"

export function useCreateCheckout({
  priceId,
  session,
}: {
  session: Nullish<Session>
  priceId: string
}) {
  const [processing, setProcessing] = useState(false)
  const unsubscribe = useRef<Unsubscribe>()

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
    unsubscribe.current?.()
    unsubscribe.current = onSnapshot(docRef, snap => {
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
    return unsubscribe
  }

  useEffect(() => () => unsubscribe.current?.(), [])

  return { createCheckoutSession, processing }
}
