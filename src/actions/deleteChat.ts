"use server"

import { maximumRetryAttempts } from "@/configs/defaults"
import { adminRepo } from "@/configs/firebase/admin"

export async function deleteChat(chatId: string) {
  const bulkWriter = adminRepo.bulkWriter()

  bulkWriter.onWriteError(error => error.failedAttempts < maximumRetryAttempts)

  const chatRef = adminRepo.collection("chats").doc(chatId)

  await adminRepo.recursiveDelete(chatRef, bulkWriter)
}
