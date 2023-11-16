import { Timestamp as FirebaseTimestamp } from "firebase/firestore"
import type { Timestamp } from "@/types/Timestamp"

export function getTimestampString(timestamp: Timestamp) {
  return new FirebaseTimestamp(timestamp.seconds, timestamp.nanoseconds)
    .toDate()
    .toLocaleString()
}
