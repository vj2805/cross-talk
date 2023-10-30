"use client"

import { Toast } from "@/components/ui/toast/Toast"
import { useToast } from "@/components/ui/toast/useToast"

export function Toaster() {
  const { toasts } = useToast()
  return (
    <Toast.Provider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast
          key={id}
          {...props}
        >
          <div className="grid gap-1">
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && (
              <Toast.Description>{description}</Toast.Description>
            )}
          </div>
          {action}
          <Toast.Close />
        </Toast>
      ))}
      <Toast.Viewport />
    </Toast.Provider>
  )
}
