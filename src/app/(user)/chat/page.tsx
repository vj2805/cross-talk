import { ChatList } from "@components"

interface ChatsPageProps {
  searchParams: {
    error: string
  }
}

export default function ChatsPage({ searchParams: { error } }: ChatsPageProps) {
  return (
    <div>
      <ChatList />
    </div>
  )
}
