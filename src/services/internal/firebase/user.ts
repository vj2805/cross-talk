import { signInWithCustomToken, signOut } from "firebase/auth"
import { collection, getDocs, query, where } from "firebase/firestore"
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

function userByEmailRef(email: string) {
  return query(usersRef(), where("email", "==", email))
}

const firebaseUserService: UserService = {
  async getUserByEmail(email) {
    const users = await getDocs(userByEmailRef(email))
    return users.docs[0]
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
