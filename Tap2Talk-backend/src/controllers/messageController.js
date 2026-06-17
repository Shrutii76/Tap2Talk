const Message = require("../models/Message");
const Chat = require("../models/Chat");

exports.sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).json({
      message: "Content and chatId required",
    });
  }

  try {
    // create message
    let newMessage = await Message.create({
      sender: req.userId,
      content,
      chat: chatId,
    });

    // populate data
    newMessage = await Message.findById(newMessage._id)
      .populate("sender", "name email")
      .populate("chat");

    // update latest message
    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: newMessage._id,
    });

    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      chat: req.params.chatId,
    })
      .populate("sender", "name email")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
