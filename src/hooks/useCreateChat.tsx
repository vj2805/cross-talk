"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useSubscriptionStore } from "@/stores/subscription"
import { useToast } from "../components/ui/toast/useToast"

export function useCreateChat() {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const { showToast } = useToast()
  const router = useRouter()
  const subscription = useSubscriptionStore(store => store.subscription)

  const createChat = async () => {
    router.push(`/chat/${"abc"}`)
  }

  return { createChat }
}
