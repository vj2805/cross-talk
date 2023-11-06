"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { ToastAction, showToast } from "@ui"
import { addMessage, getMessagesCount } from "@services"
import { useUser } from "./useUser"

const ChatInputFormSchema = zod.object({
  input: zod.string().max(100),
})

type ChatInputFormSchemaType = zod.infer<typeof ChatInputFormSchema>

export function useChatInputForm(chatId: string) {
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
    try {
      const count = await getMessagesCount(chatId)
      if (count < 25) {
        await addMessage({
          chatId,
          input,
          user: {
            email: user.email,
            id: user.uid,
            image: user.photoURL,
            name: user.displayName,
          },
        })
        form.reset()
      } else {
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
      }
    } catch (error) {
      form.setError("input", {
        message: JSON.stringify(error),
      })
    }
  }

  return { form, onSubmit }
}