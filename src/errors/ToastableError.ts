import type { ToastActionElement } from "@/components/ui/toast"

export class ToastableError extends Error {
  action?: ToastActionElement
}
