"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { addMessage } from "@services/message/addMessage"
import { useUser } from "./useUser"

const ChatInputFormSchema = zod.object({
  input: zod.string().max(100),
})

type ChatInputFormSchemaType = zod.infer<typeof ChatInputFormSchema>

export function useChatInputForm(chatId: string) {
  const [user] = useUser()
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
      await new Promise(resolve => setTimeout(resolve, 1000))
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
    } catch (error) {
      form.setError("input", {
        message: JSON.stringify(error),
      })
    }
  }

  return { form, onSubmit }
}
