"use client"

import { useParticipant } from "@/hooks/useParticipant"
import { cn } from "@/utilities/string"
import { Badge, ErrorAlert, Spinner } from "../ui"
import { UserAvatar } from "../user/UserAvatar"

interface ParticipantBadgeProps {
  isAdmin: boolean
  participantId: string
}

export const ParticipantBadge: React.FC<ParticipantBadgeProps> = ({
  isAdmin,
  participantId,
}) => {
  const [participant, participantStatus, participantError] =
    useParticipant(participantId)

  if (participantStatus === "loading") {
    return <Spinner />
  }

  if (participantStatus === "error") {
    return <ErrorAlert error={participantError} />
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
        {isAdmin && <p className="text-indigo-400 animate-pulse">Admin</p>}
      </div>
    </Badge>
  )
}
