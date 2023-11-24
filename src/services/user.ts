import { signInWithCustomToken, signOut } from "firebase/auth"
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import type { Session, User } from "next-auth"
import { clientAuth, clientRepo } from "@/configs/firebase/client"
import { chatRef } from "./chat"

const userConverter: FirestoreDataConverter<User> = {
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      email: data.email,
      id: snapshot.id,
      image: data.image,
      name: data.name,
    }
  },
  toFirestore(user) {
    return {
      email: user.email,
      image: user.image,
      name: user.name,
    }
  },
}

function usersRef() {
  const ref = collection(clientRepo, "users")
  return ref.withConverter(userConverter)
}

export function userRef(userId: string) {
  return doc(usersRef(), userId)
}

export function userByEmailRef(email: string) {
  return query(usersRef(), where("email", "==", email), limit(1))
}

export async function addUserWithEmailToChat(chatId: string, email: string) {
  const user = await getDocs(userByEmailRef(email))
  if (user.empty) {
    throw new Error(`[addUserWithEmailToChat] No users with email '${email}'`)
  }
  const chat = await getDoc(chatRef(chatId))
  if (!chat.exists()) {
    throw new Error(`[addUserWithEmailToChat] No Chats with id '${chatId}'`)
  }
  updateDoc(chat.ref, {
    participantsIds: arrayUnion(user.docs[0].id),
  })
}

export async function isUserParticipantOfChat(chatId: string, userId: string) {
  const participant = await getDoc(userRef(userId))
  if (!participant.exists()) {
    throw new Error(`[isUserParticipantOfChat] No user with id '${userId}'`)
  }
  const chat = await getDoc(chatRef(chatId))
  if (!chat.exists()) {
    throw new Error(`[isUserParticipantOfChat] No chat with id '${chatId}'`)
  }
  return chat.data().participantsIds.includes(userId)
}

export async function syncUser(session: Session | null) {
  if (session?.user && session?.firebaseToken) {
    await signInWithCustomToken(clientAuth, session.firebaseToken)
    return session.user
  } else {
    await signOut(clientAuth)
    return null
  }
}

export { signIn, signOut } from "next-auth/react"
