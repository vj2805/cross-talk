export interface ChatMember {
  chatId: string
  email: string
  image: string
  isAdmin: boolean
  timestamp: Nullish<Date>
  userId: string
}
