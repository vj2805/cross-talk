import { adminAuth, adminRepo } from "./admin"
import { clientAuth, clientRepo } from "./client"

type Security = "ADMIN" | "CLIENT"

export function getAuth(security: Security) {
  switch (security) {
    case "ADMIN":
      return adminAuth
    case "CLIENT":
      return clientAuth
  }
}

export function getRepo(security: Security) {
  switch (security) {
    case "ADMIN":
      return adminRepo
    case "CLIENT":
      return clientRepo
  }
}
