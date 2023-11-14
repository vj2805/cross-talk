import { create } from "zustand"
import { generateId } from "@/utilities/string"
import type { ToastActionElement, ToastProps } from "./toast"

const TOAST_LIMIT = 1

type ToastNodes = React.Nodes<"description" | "title"> & {
  action: ToastActionElement
}

type ToastPropsWithoutId = Partial<ToastNodes> & SafeOmit<ToastProps, "id">

type Toast = WithId<ToastPropsWithoutId>

type ToastStore = {
  toasts: Toast[]
}

const useToastStore = create<ToastStore>(() => ({ toasts: [] }))

export function useToasts() {
  return useToastStore(store => store.toasts)
}

function createToast(props: ToastPropsWithoutId): Toast {
  return {
    ...props,
    id: generateId(),
    onOpenChange(open) {
      if (!open) {
        dismissToast(this.id, 0)
      }
    },
    open: true,
  }
}

export function showToast(props: ToastPropsWithoutId) {
  const toast = createToast(props)
  useToastStore.setState(store => ({
    toasts: [toast, ...store.toasts].slice(0, TOAST_LIMIT),
  }))
  return toast.id
}

export function updateToast(id: Toast["id"], props: ToastPropsWithoutId) {
  useToastStore.setState(store => ({
    toasts: store.toasts.map(toast => {
      return toast.id !== id ? toast : { ...toast, ...props }
    }),
  }))
}

export function dismissToast(id: Toast["id"], delay: number) {
  setTimeout(() => {
    useToastStore.setState(store => ({
      toasts: store.toasts.filter(toast => toast.id !== id),
    }))
  }, delay)
}

export interface ToastableError extends Error {
  action?: ToastActionElement
}

export function showErrorToast(
  error: ToastableError,
  props: SafeOmit<ToastPropsWithoutId, "action" | "description" | "title"> = {}
) {
  return showToast({
    action: error.action,
    description: error.message,
    duration: 2000,
    title: error.name,
    variant: "destructive",
    ...props,
  })
}
