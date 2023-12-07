import type { Model } from "./Model"

export interface Chat extends Model {
  adminId: string
  participantsIds: string[]
}
