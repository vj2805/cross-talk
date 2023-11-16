"use client"

import { useParticipant } from "@/hooks/useParticipant"
import { cn } from "@/utilities/string"
import { Badge, Spinner } from "../ui"
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
    throw participant.error
  }

  return (
    <Badge
      variant="secondary"
      className={cn("h-14", "p-5 pl-2 pr-5", "flex space-x-2")}
    >
      <div className="flex items-center space-x-2">
        <UserAvatar
          name={participant.data.name}
          image={participant.data.image}
        />
      </div>
      <div>
        <p>{participant.data.email}</p>
        {isAdmin && <p className="text-indigo-400 animate-pulse">Admin</p>}
      </div>
    </Badge>
  )
}
