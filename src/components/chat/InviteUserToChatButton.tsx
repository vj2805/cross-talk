"use client"

import { useInviteUserForm } from "@/hooks/useInviteUserForm"
import { usePreferredLanguage } from "@/hooks/usePreferredLanguage"
import type { Chat } from "@/types/Chat"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ErrorAlert,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Skeleton,
} from "../ui"
import { PlusCircleIcon } from "../ui/icons"

interface InviteUserToChatProps {
  chat: Chat
}

export function InviteUserToChat({ chat }: InviteUserToChatProps) {
  const [preferredLanguage, isLanguagesLoading, languageError] =
    usePreferredLanguage()
  const [form, onSubmit] = useInviteUserForm(chat)

  if (isLanguagesLoading) {
    return <Skeleton className="h-10 w-44" />
  }

  if (languageError) {
    return <ErrorAlert error={languageError} />
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircleIcon className="mr-1 font-bold" />
          {preferredLanguage.translate("Add User To Chat")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {preferredLanguage.translate("Add User To Chat")}
          </DialogTitle>
          <DialogDescription>
            {preferredLanguage.translate(
              "Simply enter another users email address to invite them to this chat!"
            )}{" "}
            <span className="text-indigo-600 font-bold">
              ({preferredLanguage.translate("Note: They must be registered")})
            </span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col space-y-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="ml-auto w-full sm:w-fit">
              {preferredLanguage.translate("Add")}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
