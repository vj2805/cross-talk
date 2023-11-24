"use client"

import { useInviteUserForm } from "@/hooks/useInviteUserForm"
import type { Chat } from "@/types/Chat"
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

interface InviteUserToChatProps {
  chat: Chat
}

export const InviteUserToChat: React.FC<InviteUserToChatProps> = ({ chat }) => {
  const [form, onSubmit] = useInviteUserForm(chat)
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
