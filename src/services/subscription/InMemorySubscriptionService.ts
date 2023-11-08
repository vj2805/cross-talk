import type { SubscriptionService } from "./SubscriptionService"
import type { PricingTier, Subscription } from "@types"

const pricingTiers: PricingTier[] = [
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

const subscriptions: Map<string, Subscription> = new Map()

const getPricingTiers: SubscriptionService["getPricingTiers"] = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(pricingTiers)
    }, 1000)
  })
}

const getSubscription: SubscriptionService["getSubscription"] =
  async userId => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(subscriptions.get(userId) ?? null)
      }, 1000)
    })
  }

export default function createInMemorySubscriptionService(): SubscriptionService {
  return {
    getPricingTiers,
    getSubscription,
  }
}
