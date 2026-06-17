export default function ChatItem({ chat }) {
  return (
    <div className="p-3 rounded-xl hover:bg-white/5 cursor-pointer">
      <div className="flex justify-between">
        <h3 className="font-semibold">{chat.name}</h3>
        <span className="text-xs text-purple-400">{chat.time}</span>
      </div>
      <p className="text-sm text-gray-400">{chat.message}</p>
    </div>
  );
}
