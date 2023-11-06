"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"

const ChatInputFormSchema = zod.object({
  input: zod.string().max(100),
})

type ChatInputFormSchemaType = zod.infer<typeof ChatInputFormSchema>

export function useChatInputForm() {
  const form = useForm<ChatInputFormSchemaType>({
    defaultValues: {
      input: "",
    },
    resolver: zodResolver(ChatInputFormSchema),
  })

  function onSubmit({ input }: ChatInputFormSchemaType) {}

  return { form, onSubmit }
}
