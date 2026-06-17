export default function Sidebar() {
  return (
    <div className="w-20 md:w-64 bg-[#181A20]/70 backdrop-blur-xl border-r border-white/10 flex flex-col py-6">
      <div className="px-6 mb-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
          Tap2Talk
        </h1>
      </div>

      <div className="flex flex-col gap-4 px-4 text-gray-400">
        <button className="text-white">💬 Chats</button>
        <button className="text-white">📞 Calls</button>
        <button className="text-white">👥 Contacts</button>
        <button className="text-white">👨‍👩‍👧 Groups</button>
      </div>
    </div>
  );
}
