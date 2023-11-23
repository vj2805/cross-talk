import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { showToast } from "@/components/ui"
import { FreePlanLimitExceededError } from "@/errors/FreePlanLimitExceededError"
import { addParticipantToChat } from "@/services/participant"
import { getUserByEmail } from "@/services/user"
import type { Chat } from "@/types/Chat"
import { useRequiredUser } from "./useRequiredUser"

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
  const [user, status] = useRequiredUser()

  async function onSubmit({ email }: InviteFormData) {
    if (status !== "authenticated") {
      return
    }

    if (chat.adminId !== user.id) {
      return
    }

    const [dismissToast, updateToast] = showToast({
      description: "Please wait while we send the invite...",
      title: "Sending Invite...",
    })

    try {
      if (!isPro && chat.participantsIds.length >= 2) {
        throw new FreePlanLimitExceededError("2 users per chat")
      }
      const participant = await getUserByEmail({ email })
      await addParticipantToChat({
        chatId: chat.id,
        participantId: participant.id,
      })
      updateToast({
        description: "The user has been added to the chat successfully!",
        title: "Added to chat",
        variant: "success",
      })
    } catch (error) {
      updateToast({ error: error as Error })
    } finally {
      dismissToast()
      form.reset()
    }
  }

  return { form, onSubmit }
}
