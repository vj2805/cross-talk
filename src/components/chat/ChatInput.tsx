"use client"

import { useChatInputForm } from "@hooks"
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Spinner,
} from "@ui"
import { cn } from "@utilities"

interface ChatInputProps {
  chatId: string
}

export const ChatInput: React.FC<ChatInputProps> = ({ chatId }) => {
  const { form, onSubmit } = useChatInputForm(chatId)
  return (
    <div className={cn("bottom-0", "sticky")}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "mx-auto",
            "max-w-4xl",
            "p-2",
            "bg-white dark:bg-slate-800",
            "border rounded-t-xl",
            "flex space-x-2"
          )}
        >
          <FormField
            disabled={form.formState.isSubmitting}
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Enter message in ANY language..."
                    className={cn(
                      "bg-transparent",
                      "dark:placeholder:text-white/70",
                      "border-none"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            className={cn(
              "bg-cyan-500 dark:bg-indigo-600 hover:bg-cyan-400 dark:hover:bg-indigo-500",
              "text-white"
            )}
          >
            {form.formState.isSubmitting ? <Spinner /> : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
