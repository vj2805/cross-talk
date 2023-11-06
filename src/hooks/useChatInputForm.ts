"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"

const ChatInputFormSchema = zod.object({
  input: zod.string().max(100),
})

export function useChatInputForm() {
  return useForm<zod.infer<typeof ChatInputFormSchema>>({
    defaultValues: {
      input: "",
    },
    resolver: zodResolver(ChatInputFormSchema),
  })
}
