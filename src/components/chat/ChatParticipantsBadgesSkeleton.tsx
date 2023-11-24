import { ChatParticipantBadgeSkeleton } from "./ChatParticipantBadgeSkeleton"

export function ChatParticipantsBadgesSkeleton() {
  return (
    <div className="m-5 p-4 border rounded-xl flex flex-wrap justify-center md:justify-start items-center gap-2">
      {Array(4).fill(<ChatParticipantBadgeSkeleton />)}
    </div>
  )
}
