import { Timestamp } from "firebase/firestore"
import type { TimeSinceEpoch } from "@/types/TimeSinceEpoch"

export function getTimestampString(time: TimeSinceEpoch) {
  return new Timestamp(time.seconds, time.nanoseconds).toDate().toLocaleString()
}
