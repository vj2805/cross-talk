import { cn } from "@/services/shadcn"

const Layout: React.FC<React.PropsWithRequiredChildren> = ({ children }) => (
  <div className={cn("mx-auto", "w-full max-w-6xl flex-1", "flex flex-col")}>
    {children}
  </div>
)

export default Layout
