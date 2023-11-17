"use client"

import { useParticipant } from "@/hooks/useParticipant"
import { cn } from "@/utilities/string"
import { Badge, Spinner, showToast } from "../ui"
import { UserAvatar } from "../user/UserAvatar"

interface ParticipantBadgeProps {
  isAdmin: boolean
  participantId: string
}

export const ParticipantBadge: React.FC<ParticipantBadgeProps> = ({
  isAdmin,
  participantId,
}) => {
  const [participant, status, error] = useParticipant(participantId)

  if (status === "loading") {
    return <Spinner />
  }

  if (status === "error") {
    return void showToast({ error })
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
