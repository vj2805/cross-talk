"use client"

import { useParticipant } from "@/hooks/useParticipant"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import { cn } from "@/utilities/string"
import { Badge, ErrorAlert, Skeleton } from "../ui"
import { UserAvatar } from "../user/UserAvatar"

interface ChatParticipantBadgeProps {
  isAdmin: boolean
  participantId: string
}

export function ChatParticipantBadge({
  isAdmin,
  participantId,
}: ChatParticipantBadgeProps) {
  const [participant, isParticipantLoading, participantError] =
    useParticipant(participantId)
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()

  if (isParticipantLoading || isLanguagesLoading) {
    return (
      <div className="h-14 p-5 pl-2 flex space-x-2">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-12" />
          </div>
        </div>
      </div>
    )
  }

  if (participantError || languageError) {
    return <ErrorAlert error={[participantError, languageError]} />
  }

  return (
    <Badge
      variant="secondary"
      className={cn("h-14", "p-5 pl-2 pr-5", "flex space-x-2")}
    >
      <div className="flex items-center space-x-2">
        <UserAvatar
          name={participant.name}
          image={participant.image}
        />
      </div>
      <div>
        <p>{participant.email}</p>
        {isAdmin && (
          <p className="text-indigo-400 animate-pulse">
            {preferredLanguage.translate("Admin")}
          </p>
        )}
      </div>
    </Badge>
  )
}
