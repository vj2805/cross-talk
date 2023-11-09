import { manageSubscription } from "@services/subscription"

export const ManageSubscriptionButton: React.FC = () => (
  <form action={manageSubscription}>
    <button>Manage Subscription</button>
  </form>
)
