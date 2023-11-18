import { ErrorAlert } from "./ui"
import { SignInButton } from "./user/SignInButton"

export const SignInRequiredAlert: React.FC = () => (
  <ErrorAlert
    error={{
      action: <SignInButton variant="destructive" />,
      message: "You should be signed in to access this page.",
      name: "User Error!",
    }}
  />
)
