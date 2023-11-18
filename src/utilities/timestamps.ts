import { Timestamp as FirebaseTimestamp } from "firebase/firestore"
import type { Timestamp } from "@/types/Timestamp"

export function getTimestampString(timestamp: Timestamp) {
  return new FirebaseTimestamp(timestamp.seconds, timestamp.nanoseconds)
    .toDate()
    .toLocaleString()
}

export function compareTimestamps(x: Timestamp, y: Timestamp) {
  const a = new FirebaseTimestamp(x.seconds, x.nanoseconds)
  const b = new FirebaseTimestamp(y.seconds, y.nanoseconds)
  return a.toMillis() - b.toMillis()
}
