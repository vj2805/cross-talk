"use client"

import { useInviteForm } from "@/hooks/useInviteForm"
import { useIsPro } from "@/hooks/useIsPro"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "../ui"
import { PlusCircleIcon } from "../ui/icons"
import type { Chat } from "@/types/Chat"

interface InviteUserProps {
  chat: Chat
}

export const InviteUser: React.FC<InviteUserProps> = ({ chat }) => {
  const isPro = useIsPro()
  const { form, onSubmit } = useInviteForm(chat, isPro)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircleIcon className="mr-1" />
          Add User To Chat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add User to Chat</DialogTitle>
          <DialogDescription>
            Simply enter another users email address to invite them to this
            chat!{" "}
            <span className="text-indigo-600 font-bold">
              (Note: They must be registered)
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
            <Button className="ml-auto w-full sm:w-fit">Add to Chat</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}