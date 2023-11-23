"use server"

import { adminRepo } from "@/backend/firebase/admin"

const MAX_RETRY_ATTEMPTS = 5

export async function deleteChat(chatId: string) {
  const bulkWriter = adminRepo.bulkWriter()

  bulkWriter.onWriteError(error => error.failedAttempts < MAX_RETRY_ATTEMPTS)

  const chatRef = adminRepo.collection("chats").doc(chatId)

  await adminRepo.recursiveDelete(chatRef, bulkWriter)
}
