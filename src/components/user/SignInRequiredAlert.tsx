import { Alert, AlertDescription, AlertTitle } from "../ui"
import { SignInButton } from "./SignInButton"

export const SignInRequiredAlert: React.FC = () => (
  <Alert
    variant="destructive"
    className="flex mx-2 w-auto items-center"
  >
    <AlertTitle className="pr-4 text-xl font-bold border-r border-destructive">
      User Error!
    </AlertTitle>
    <AlertDescription className="pl-5 justify-end font-extrabold">
      You should be signed in to use this page!
    </AlertDescription>
    <SignInButton variant="destructive" />
  </Alert>
)
