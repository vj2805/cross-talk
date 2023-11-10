import { manageSubscription } from "@services/actions/manageSubscription"

export const ManageSubscriptionButton: React.FC = () => {
  async function onSubmit() {
    try {
      await manageSubscription()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form action={onSubmit}>
      <button>Manage Subscription</button>
    </form>
  )
}
