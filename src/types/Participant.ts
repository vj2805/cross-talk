import type { Model } from "./Model"

export interface Participant extends Model {
  email: string
  image: string
  name: string
}
