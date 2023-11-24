"use client"

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Spinner,
} from "@/components/ui"
import { useNewMessageForm } from "@/hooks/useNewMessageForm"
import { cn } from "@/utilities/string"

interface ChatMessageFormProps {
  chatId: string
}

export function ChatMessageForm({ chatId }: ChatMessageFormProps) {
  const [form, onSubmit] = useNewMessageForm(chatId)
  return (
    <div className={cn("px-2", "bottom-0", "sticky")}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "mx-auto",
            "max-w-4xl",
            "p-2",
            "bg-white dark:bg-slate-800",
            "border border-input rounded-t-xl",
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
                      "border-none  focus-visible:ring-transparent dark:focus-visible:ring-ring/50"
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
              "bg-cyan-500 dark:bg-indigo-500",
              "text-cyan-900 dark:text-indigo-100",
              "hover:bg-cyan-400 dark:hover:bg-indigo-400",
              "focus-visible:ring-0"
            )}
          >
            {form.formState.isSubmitting ? <Spinner /> : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
