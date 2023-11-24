import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { showToast } from "@/components/ui"
import { messagesQuota } from "@/configs/quota"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { getMessagesCount, postMessage } from "@/services/message"
import { useIsPro } from "./useIsPro"
import { useRequiredUser } from "./useRequiredUser"

const AddMessageFormSchema = z.object({
  input: z.string().max(100),
})

type AddMessageFormData = z.infer<typeof AddMessageFormSchema>

export function useNewMessageForm(chatId: string) {
  const [user, isUserLoading, userError] = useRequiredUser()
  const [isPro, isSubscriptionLoading, subscriptionError] = useIsPro()
  const form = useForm<AddMessageFormData>({
    defaultValues: { input: "" },
    resolver: zodResolver(AddMessageFormSchema),
  })

  async function onSubmit({ input }: AddMessageFormData) {
    if (isUserLoading || userError) {
      return
    }
    if (isSubscriptionLoading || subscriptionError) {
      return
    }
    if (!input.length) {
      return
    }
    try {
      if (!isPro) {
        const count = await getMessagesCount(chatId)
        if (count >= messagesQuota) {
          throw new FreePlanLimitExceededError(
            `${messagesQuota} messages per chat`
          )
        }
      }
      await postMessage(chatId, input, user)
      form.reset()
    } catch (error) {
      showToast({ error: error as Error })
    }
  }

  return [form, onSubmit] as const
}
