import type { AuthService } from "./AuthService"
import type { ChatService } from "./ChatService"
import type { LanguageService } from "./LanguageService"
import type { MessageService } from "./MessageService"
import type { ParticipantService } from "./ParticipantService"
import type { PaymentService } from "./PaymentService"
import type { PricingService } from "./PricingService"
import type { SubscriptionService } from "./SubscriptionService"

export interface Services {
  auth: AuthService
  chat: ChatService
  language: LanguageService
  message: MessageService
  participant: ParticipantService
  payment: PaymentService
  pricing: PricingService
  subscription: SubscriptionService
}
