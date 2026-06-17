export default function WelcomeScreen() {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4">💬</div>

      <h2 className="text-3xl font-bold mb-2">
        Welcome to <span className="text-purple-400">Tap2Talk</span>
      </h2>

      <p className="text-gray-400 mb-6">Select a chat to start messaging</p>

      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500">
        Start New Chat
      </button>
    </div>
  );
}
