import { manageSubscription } from "@actions"

export const ManageSubscriptionButton: React.FC = () => (
  <form action={manageSubscription}>
    <button>Manage Subscription</button>
  </form>
)
