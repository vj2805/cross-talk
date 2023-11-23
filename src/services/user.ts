import { signInWithCustomToken, signOut } from "firebase/auth"
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import type { FirestoreDataConverter } from "firebase/firestore"
import { clientAuth, clientRepo } from "@/backend/firebase/client"
import type { User } from "@/types/User"
import type { UserService } from "@/types/UserService"

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

export function usersRef() {
  const ref = collection(clientRepo, "users")
  return ref.withConverter(userConverter)
}

export function userRef(userId: string) {
  return doc(usersRef(), userId)
}

export function userByEmailRef(email: string) {
  return query(usersRef(), where("email", "==", email))
}

export const { getUserByEmail, subscribeToUser, syncUser }: UserService = {
  async getUserByEmail({ email }) {
    const users = await getDocs(userByEmailRef(email))
    return users.docs[0].data()
  },
  subscribeToUser({ userId }, onChange, onError) {
    return onSnapshot(
      userRef(userId),
      snapshot => snapshot.exists() && onChange(snapshot.data()),
      onError
    )
  },
  async syncUser({ session }) {
    if (session?.user && session?.firebaseToken) {
      await signInWithCustomToken(clientAuth, session.firebaseToken)
      return session.user
    } else {
      await signOut(clientAuth)
      return null
    }
  },
}

export { signIn, signOut } from "next-auth/react"
