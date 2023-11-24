export default function UserLayout({
  children,
}: React.PropsWithRequiredChildren) {
  return (
    <div className="mx-auto w-full max-w-6xl py-2 flex-1 flex flex-col">
      {children}
    </div>
  )
}
