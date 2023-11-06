"use client"
export function prettifyId(id: string, limit = 4) {
  return id.substring(0, limit)
}
