import { signInWithCustomToken, signOut } from "firebase/auth"
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import { clientAuth, clientRepo } from "@/backend/firebase/client"
import type { User } from "@/types/User"
import type { UserService } from "@/types/UserService"
import type { FirestoreDataConverter } from "firebase/firestore"

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
    delete user.id
    return user
  },
}

function usersRef() {
  return collection(clientRepo, "users").withConverter(userConverter)
}

function userRef(userId: string) {
  return doc(usersRef(), userId)
}

function userByEmailRef(email: string) {
  return query(usersRef(), where("email", "==", email))
}

const firebaseUserService: UserService = {
  async getUserByEmail(email) {
    const users = await getDocs(userByEmailRef(email))
    return users.docs[0].data()
  },
  subscribeToUser(userId, onChange, onError) {
    return onSnapshot(
      userRef(userId),
      snapshot =>
        snapshot.exists()
          ? onChange(snapshot.data())
          : onError(new Error(`User with id (${userId}) does not exist!`)),
      onError
    )
  },
  async syncUser(session) {
    if (session?.firebaseToken) {
      await signInWithCustomToken(clientAuth, session.firebaseToken)
    } else {
      await signOut(clientAuth)
    }
    return session?.user ?? null
  },
}

export default firebaseUserService
