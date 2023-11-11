import type { PriceTier } from "@/types/PriceTier"
import type { PricingService } from "@/types/PricingService"

const priceTiers: PriceTier[] = [
  {
    description: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
    ],
    href: "#",
    id: "Starter",
  },
  {
    description: "Unlock the Full Potential with Pro!",
    features: [
      "Unlimited Messages in Chats",
      "Unlimited Participants in Chats",
      "Unlimited Chat Rooms",
      "Supports up to 10 languages",
      "Multimedia support in chats (coming soon)",
      "1-hour, dedicated support response time",
      "Early access to New Features",
    ],
    href: "#",
    id: "Pro",
    priceMonthly: {
      cost: "199",
      id: "price_1O83KkSD4okAqSj5ysyvJBJA",
    },
  },
]

const inMemoryPricingService: PricingService = {
  async getPricingTiers() {
    return priceTiers
  },
}

export default inMemoryPricingService
