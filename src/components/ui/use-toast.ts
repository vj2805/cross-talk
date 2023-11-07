// Inspired by react-hot-toast library
import type * as React from "react"
import { create } from "zustand"
import { generateId } from "@utilities"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1

type ToastPropsWithoutId = SafeOmit<ToastProps, "id"> & {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type Toast = ToastPropsWithoutId & { id: string }

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
