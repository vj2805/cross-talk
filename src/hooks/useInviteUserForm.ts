import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { addUserWithEmailToChat } from "@/services/user"
import type { Chat } from "@/types/Chat"
import { useIsPro } from "./useIsPro"
import { useRequiredUser } from "./useRequiredUser"

const InviteUserFormSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
})

type InviteUserFormData = z.infer<typeof InviteUserFormSchema>

export function useInviteUserForm(chat: Chat) {
  const [user, userStatus] = useRequiredUser()
  const [isPro, subscriptionStatus] = useIsPro()

  const form = useForm<InviteUserFormData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(InviteUserFormSchema),
  })

  async function onSubmit({ email }: InviteUserFormData) {
    if (userStatus !== "authenticated") {
      return
    }
    if (subscriptionStatus !== "ready") {
      return
    }
    if (user.id !== chat.adminId) {
      return
    }
    showToast({
      description: "Please wait while we send the invite...",
      title: "Sending Invite...",
    })
    try {
      if (!isPro && chat.participantsIds.length >= 2) {
        throw new FreePlanLimitExceededError("2 users per chat")
      }
      await addUserWithEmailToChat(chat.id, user.id)
      showToast({
        description: "The user has been added to the chat successfully!",
        title: "Added to chat",
        variant: "success",
      })
      form.reset()
    } catch (error) {
      showToast({ error: error as Error })
    }
  }

  return [form, onSubmit] as const
}