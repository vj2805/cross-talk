import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { showErrorToast, showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { addParticipantToChat } from "@/services/participant"
import { getUserByEmail } from "@/services/user"
import { useUser } from "./useUser"
import type { Chat } from "@/types/Chat"

const InviteFormSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
})

type InviteFormData = z.infer<typeof InviteFormSchema>

export function useInviteForm(chat: Chat, isPro: boolean) {
  const form = useForm<InviteFormData>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(InviteFormSchema),
  })
  const user = useUser()

  async function onSubmit({ email }: InviteFormData) {
    if (chat.adminId !== user?.id) {
      return
    }

    showToast(
      {
        description: "Please wait while we send the invite...",
        title: "Sending Invite...",
      },
      2000
    )

    if (!isPro && chat.participantsIds.length >= 2) {
      return void showErrorToast(
        new FreePlanLimitExceededError("no of users in a single chat")
      )
    }

    try {
      const participant = await getUserByEmail({ email })
      await addParticipantToChat({
        chatId: chat.id,
        participantId: participant.id,
      })
      showToast(
        {
          description: "The user has been added to the chat successfully!",
          title: "Added to chat",
          variant: "success",
        },
        3000
      )
    } catch (error) {
      showErrorToast(error as Error)
    } finally {
      form.reset()
    }
  }

  return { form, onSubmit }
}
