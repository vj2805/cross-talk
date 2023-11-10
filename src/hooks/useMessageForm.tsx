import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { getMessagesCount, postMessage } from "@/services/message"
import { ToastAction, showToast } from "@/components/ui"
import { useSyncedUser } from "./useSyncedUser"

const MessageFormSchema = z.object({
  input: z.string().max(100),
})

type MessageFormSchemaType = z.infer<typeof MessageFormSchema>

export function useMessageForm(chatId: string) {
  const user = useSyncedUser()
  const router = useRouter()
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
    try {
      const count = await getMessagesCount(chatId)
      if (count >= 25) {
        showToast({
          action: (
            <ToastAction
              altText="Upgrade"
              onClick={() => router.push("/subscribe")}
            >
              Upgrade to PRO
            </ToastAction>
          ),
          description:
            "You've exceeded the FREE plan limit of 25 messages. Upgrade to PRO to send unlimited messages!",
          duration: 2000,
          title: "Free plan limit exceeded!",
          variant: "destructive",
        })
        return
      }
      await postMessage(chatId, input, user)
      form.reset()
    } catch (error) {
      form.setError("input", {
        message: JSON.stringify(error),
      })
    }
  }

  return { form, onSubmit }
}
