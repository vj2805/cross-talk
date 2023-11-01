const PRICING_TIERS = [
  {
    description: "Get chatting right away with anyone, anywhere!",
    features: [
      "20 Message Chat Limit in Chats",
      "2 Participant limit in Chat",
      "3 Chat Rooms limit",
      "Supports 2 languages",
      "48-hour support response time",
      1,
    ],
    href: "#",
    id: null,
    name: "Starter",
    priceMonthly: null,
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
    id: "si_OnlcsLNQYbMVzV",
    name: "Pro",
    priceMonthly: "199",
  },
]

export function getPricingTiers() {
  return PRICING_TIERS
}
