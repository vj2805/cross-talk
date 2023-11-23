"use server"

import { maximumRetryAttempts } from "@/configs/defaults"
import { adminRepo } from "@/configs/firebase/admin"

export async function deleteChat(chatId: string) {
  return await new Promise<void>(async (resolve, reject) => {
    const bulkWriter = adminRepo.bulkWriter()
    bulkWriter.onWriteError(error => {
      if (error.failedAttempts < maximumRetryAttempts) {
        return true
      }
      reject(new Error(`[deleteChat] ${error.name} ${error.message}`))
      return false
    })

    const chatRef = adminRepo.collection("chats").doc(chatId)
    await adminRepo.recursiveDelete(chatRef, bulkWriter)
    resolve()
  })
}
