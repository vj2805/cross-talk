import { manageSubscription } from "@/actions/manageSubscription"

export const ManageSubscriptionButton: React.FC = () => (
  <form action={manageSubscription}>
    <button>Manage Subscription</button>
  </form>
)
