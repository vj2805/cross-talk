import { manageSubscription } from "@/actions/manageSubscription"

export const ManageSubscriptionButton: React.FC = () => {
  async function onSubmit() {
    try {
      await manageSubscription()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form
      action={onSubmit}
      className="flex"
    >
      <button className="flex-1">Manage Subscription</button>
    </form>
  )
}
