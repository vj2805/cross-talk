"use client"

import { useEffect, useRef } from "react"
import { Spinner } from "@/components/ui"
import { UserAvatar } from "@/components/user/UserAvatar"
import { useMessages } from "@/hooks/useMessages"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { cn } from "@/utilities/string"
import { getLanguageCode } from "@/constants/languages"
import { StartConversation } from "./StartConversation"
import type { Message } from "@/types/Message"
import type { User } from "next-auth"

interface ChatMessagesProps {
  chatId: string
  initialMessages: Message[]
  user: User
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  chatId,
  initialMessages,
  user,
}) => {
  const language = usePreferredLanguage()
  const messagesEndRef = useRef<React.ElementRef<"div">>(null)
  const messages = useMessages(chatId, initialMessages)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  if (messages.status === "loading") {
    return <Spinner />
  }

  if (messages.status === "error") {
    throw messages.error
  }

  if (messages.data.length === 0) {
    return <StartConversation language={language} />
  }

  return (
    <div className={cn("p-5", "flex-1")}>
      {messages.data.map(message => {
        const isSender = message.user.id === user.id
        return (
          <div
            key={message.id}
            className={cn("my-2", "flex items-end")}
          >
            <div
              className={cn(
                "mx-2",
                "w-fit",
                "p-4",
                "line-clamp-1",
                "rounded-lg",
                "relative flex flex-col space-y-2",
                isSender
                  ? "ml-auto bg-cyan-500 dark:bg-indigo-600 text-white rounded-br-none"
                  : "bg-gray-100 dark:text-gray-100 dark:bg-slate-700 rounded-bl-none"
              )}
            >
              <p
                className={cn(
                  "text-xs italic font-extralight line-clamp-1",
                  isSender ? "text-right" : "text-left"
                )}
              >
                {message.user.name?.split(" ")[0]}
              </p>
              <div className="flex space-x-2">
                {message.translated ? (
                  <p>
                    {message.translated?.[getLanguageCode(language)] ||
                      message.input}
                  </p>
                ) : (
                  <Spinner />
                )}
              </div>
            </div>
            <UserAvatar
              name={message.user.name}
              image={message.user.image}
              className={cn({ "-order-1": !isSender })}
            />
          </div>
        )
      })}
    </div>
  )
}
