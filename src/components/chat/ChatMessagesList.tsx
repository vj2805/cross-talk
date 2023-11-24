"use client"

import type { User } from "next-auth"
import { ErrorAlert, Skeleton, Spinner } from "@/components/ui"
import { UserAvatar } from "@/components/user/UserAvatar"
import { useMessagesEndRef } from "@/hooks/useMessagesEndRef"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import type { Message } from "@/types/Message"
import { cn } from "@/utilities/string"

interface ChatMessagesListProps {
  messages: Message[]
  user: User
}

export function ChatMessagesList({ messages, user }: ChatMessagesListProps) {
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()
  const messagesEndRef = useMessagesEndRef(messages)

  if (isLanguagesLoading) {
    return (
      <div className={"p-5 w-full flex-1 flex flex-col space-y-3"}>
        {Array(8)
          .fill(null)
          .map(() => Math.random() < 0.5)
          .map((shouldAlignLeft, idx) => (
            <div
              key={idx}
              className={cn("flex", shouldAlignLeft && "flex-row-reverse")}
            >
              <Skeleton className={cn("mx-2 h-10 w-10 rounded-full")} />
              <div
                className={cn(
                  "py-2 flex flex-col space-y-2",
                  shouldAlignLeft ? "items-end" : "items-start"
                )}
              >
                <Skeleton className="h-2 w-1/3" />
                <Skeleton className="h-2 w-1/6" />
              </div>
            </div>
          ))}
      </div>
    )
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

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
                    {message.translated?.[preferredLanguage.code] ||
                      message.input}
                  </p>
                ) : (
                  <Skeleton className="h-2 w-1/5" />
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
      <div
        className="sr-only"
        ref={messagesEndRef}
      >
        {preferredLanguage.translate("End of Messages")}
      </div>
    </ul>
  )
}
