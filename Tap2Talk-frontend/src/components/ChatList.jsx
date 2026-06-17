import ChatItem from "./ChatItem";

export default function ChatList() {
  const chats = [
    {
      name: "Marcus Chen",
      message: "New designs look great",
      time: "10:42 AM",
    },
    { name: "Sarah Jenkins", message: "Send assets", time: "Yesterday" },
  ];

  return (
    <div className="w-100 bg-[#1a1c20]/70 border-r border-white/10 p-4">
      <h2 className="text-xl mb-4">Messages</h2>

      <input
        placeholder="Search..."
        className="w-full p-2 mb-4 rounded-full bg-[#111317]"
      />

      <div className="space-y-2">
        {chats.map((chat, i) => (
          <ChatItem key={i} chat={chat} />
        ))}
      </div>
    </div>
  );
}
