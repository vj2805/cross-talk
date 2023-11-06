"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { useRouter } from "next/navigation"
import { addMessage } from "@services/message/addMessage"
import { getMessagesCount } from "@services/message/getMessagesCount"
import { ToastAction, showToast } from "@ui"
import { useUser } from "./useUser"
import { useProcess } from "./useProcess"

const ChatInputFormSchema = zod.object({
  input: zod.string().max(100),
})

type ChatInputFormSchemaType = zod.infer<typeof ChatInputFormSchema>

export function useChatInputForm(chatId: string) {
  const { processing, startProcess, stopProcess } = useProcess()
  const [user] = useUser()
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
    startProcess()
    try {
      const count = await getMessagesCount(chatId)
      if (count >= 25) {
        throw new Error(
          "You've exceeded the FREE plan limit of 25 messages per chat. Upgrade to PRO for unlimited chat messages!",
          {
            cause: "Free plan limit exceeded!",
          }
        )
      }
      await addMessage({ chatId, input, user })
      form.reset()
    } catch (error) {
      if (error instanceof Error) {
        showToast({
          action: (
            <ToastAction
              altText="Upgrade"
              onClick={() => router.push("/subscribe")}
            >
              Upgrade to PRO
            </ToastAction>
          ),
          description: error.message,
          title: `${error.cause}`,
          variant: "destructive",
        })
      }
    } finally {
      stopProcess()
    }
  }

  return { form, onSubmit }
}
