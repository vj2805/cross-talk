import { manageSubscription } from "@actions/subscription"

export const ManageSubscriptionButton: React.FC = () => (
  <form action={manageSubscription}>
    <button>Manage Subscription</button>
  </form>
)
