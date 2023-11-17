import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { getMessagesCount, postMessage } from "@/services/message"
import { useUser } from "./useUser"

const MessageFormSchema = z.object({
  input: z.string().max(100),
})

type MessageFormSchemaType = z.infer<typeof MessageFormSchema>

export function useMessageForm(chatId: string) {
  const [user] = useUser()
  const form = useForm<MessageFormSchemaType>({
    defaultValues: {
      input: "",
    },
    resolver: zodResolver(MessageFormSchema),
  })

  async function onSubmit({ input }: MessageFormSchemaType) {
    if (input.length === 0) {
      return
    }
    if (!user) {
      return
    }
    const [dismissToast, updateToast] = showToast({ open: false })
    try {
      const count = await getMessagesCount({ chatId })
      if (count >= 25) {
        updateToast(new FreePlanLimitExceededError("25 messages per chat"))
        return
      }
      await postMessage({ chatId, input, user })
      form.reset()
    } catch (error) {
      form.setError("input", {
        message: JSON.stringify(error),
      })
    } finally {
      dismissToast(2000)
    }
  }

  return { form, onSubmit }
}
