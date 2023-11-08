"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { getMessagesCount, postMessage } from "@services/message"
import { useSyncedUser } from "@stores/syncedUser"
import { ToastAction, showToast } from "@ui"

const ChatInputFormSchema = zod.object({
  input: zod.string().max(100),
})

type ChatInputFormSchemaType = zod.infer<typeof ChatInputFormSchema>

export function useChatInputForm(chatId: string) {
  const user = useSyncedUser()
  const router = useRouter()
  const form = useForm<ChatInputFormSchemaType>({
    defaultValues: {
      input: "",
    },
    resolver: zodResolver(ChatInputFormSchema),
  })

  async function onSubmit({ input }: ChatInputFormSchemaType) {
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
