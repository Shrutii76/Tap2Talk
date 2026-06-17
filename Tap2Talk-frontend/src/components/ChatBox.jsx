import { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hello!", me: false },
    { text: "Hi 👋", me: true },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage) return;

    setMessages([...messages, { text: newMessage, me: true }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b font-bold">Matrics Studio</div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.me ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs ${
                msg.me ? "bg-purple-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2"
          placeholder="Type message..."
        />

        <button
          onClick={sendMessage}
          className="bg-purple-500 text-white px-4 py-2 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
