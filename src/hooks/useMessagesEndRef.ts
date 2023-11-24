import { useEffect, useRef } from "react"
import type { Message } from "@/types/Message"

export function useMessagesEndRef(messages: Message[]) {
  const messagesEndRef = useRef<React.ElementRef<"div">>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return messagesEndRef
}
