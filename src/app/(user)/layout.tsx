export default function UserLayout({
  children,
}: React.PropsWithRequiredChildren) {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 flex flex-col">
      {children}
    </div>
  )
}
