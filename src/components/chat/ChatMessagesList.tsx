"use client"

import { useEffect, useRef } from "react"
import { Spinner } from "@/components/ui"
import { UserAvatar } from "@/components/user/UserAvatar"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { getLanguageCode } from "@/utilities/languages"
import { cn } from "@/utilities/string"
import { getTranslation } from "@/utilities/translations"
import type { Message } from "@/types/Message"
import type { User } from "next-auth"

interface ChatMessagesListProps {
  messages: Message[]
  user: User
}

export const ChatMessagesList: React.FC<ChatMessagesListProps> = ({
  messages,
  user,
}) => {
  const language = usePreferredLanguage()

  const messagesEndRef = useRef<React.ElementRef<"li">>(null)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <ul className={cn("p-5", "flex-1")}>
      {messages.map(message => {
        const isSender = message.user.id === user.id
        return (
          <li
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
          </li>
        )
      })}
      <li
        className="sr-only"
        ref={messagesEndRef}
      >
        {getTranslation("End of Messages", language)}
      </li>
    </ul>
  )
}
