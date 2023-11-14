"use client"

import { cn } from "@/utilities/string"
import { useParticipant } from "@/hooks/useParticipant"
import { Badge, Spinner, showErrorToast } from "../ui"
import { UserAvatar } from "../user/UserAvatar"

interface ParticipantBadgeProps {
  isAdmin: boolean
  participantId: string
}

export const ParticipantBadge: React.FC<ParticipantBadgeProps> = ({
  isAdmin,
  participantId,
}) => {
  const participant = useParticipant(participantId)

  if (participant.status === "loading") {
    return <Spinner />
  }

  if (participant.status === "error") {
    return void showErrorToast(participant.error)
  }

  return (
    <Badge
      variant="secondary"
      className={cn("h-14", "p-5 pl-2 pr-5", "flex space-x-2")}
    >
      <div className="flex items-center space-x-2">
        <UserAvatar
          name={participant.value.name}
          image={participant.value.image}
        />
      </div>
      <div>
        <p>{participant.value.email}</p>
        {isAdmin && <p className="text-indigo-400 animate-pulse">Admin</p>}
      </div>
    </Badge>
  )
}
