import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { getMessagesCount, postMessage } from "@/services/message"
import { useIsPro } from "./useIsPro"
import { useRequiredUser } from "./useRequiredUser"

const MessageFormSchema = z.object({
  input: z.string().min(1).max(100),
})

type MessageFormSchemaType = z.infer<typeof MessageFormSchema>

export function useMessageForm(chatId: string) {
  const [user, userStatus] = useRequiredUser()
  const [isPro, isProStatus] = useIsPro()
  const form = useForm<MessageFormSchemaType>({
    defaultValues: { input: "" },
    resolver: zodResolver(MessageFormSchema),
  })

  async function onSubmit({ input }: MessageFormSchemaType) {
    if (userStatus !== "authenticated") {
      return
    }
    if (isProStatus !== "ready") {
      return
    }
    try {
      if (!isPro) {
        const count = await getMessagesCount({ chatId })
        if (count >= 25) {
          throw new FreePlanLimitExceededError("25 messages per chat")
        }
      }
      await postMessage({ chatId, input, user })
      form.reset()
    } catch (error) {
      showToast({ error: error as Error })
    }
  }

  return { form, onSubmit }
}
