"use client"

import { useEffect, useRef } from "react"
import { useMessages } from "@hooks"
import { MessageCircleIcon } from "@icons"
import { useLanguage } from "@stores"
import { cn } from "@utilities"
import { Spinner } from "@ui"
import { UserAvatar } from "../user/UserAvatar"
import type { Message } from "@types"
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
  const language = useLanguage()
  const messagesEndRef = useRef<React.ElementRef<"div">>(null)
  const [messages, loading] = useMessages(chatId, initialMessages)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  if (loading) {
    return null
  }

  if (messages?.length === 0) {
    return (
      <div className="p-5">
        <div
          className={cn(
            "p-20",
            "bg-indigo-500",
            "text-white font-extralight",
            "rounded-xl",
            "flex flex-col justify-center items-center space-y-2"
          )}
        >
          <MessageCircleIcon className="h-10 w-10" />
          <h2>
            <span className="font-bold">Invite a friend</span> &{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p>The AI will auto-dect & translate it all for you...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-5">
      {messages?.map(message => {
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
                  <p>{message.translated[language] || message.input}</p>
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