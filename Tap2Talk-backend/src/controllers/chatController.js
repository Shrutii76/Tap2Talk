const Chat = require("../models/Chat"); 
const User = require("../models/User");

// create or access chat
exports.accessChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "UserId required" });
  }

  try {
    // use different variable name
    let existingChat = await Chat.findOne({
      isGroupChat: false,
      users: {
        $all: [req.userId, userId],
      },
    }).populate("users", "-password");

    if (existingChat) {
      return res.json(existingChat);
    }

    // create new chat
    const newChat = await Chat.create({
      chatName: "sender",
      isGroupChat: false,
      users: [req.userId, userId],
    });

    const fullChat = await Chat.findById(newChat._id).populate(
      "users",
      "-password",
    );

    res.status(201).json(fullChat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get chats
exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      users: { $in: [req.userId] },
    })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 });

    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//create group chat
exports.createGroupChat = async (req,res)=>{
  const {name,users} = req.body;

  if(!name || !users){
    return res.status(400).json({ message:"Name and users required"});
  }

  //users should be array
  if(users.length <2){
    return res.status(400).json({
      message:"At least 2 users required for group",
    });
  }


  try{
    const groupChat = await Chat.create({
      chatName: name,
      isGroupChat: true,
      users:[...users, req.userId],
      groupAdmin: req.userId,
    });

    const fullGroup = await Chat.findById(groupChat._id)
    .populate("users","-password")
    .populate("groupAdmin","-password");
    
    res.status(201).json(fullGroup);
  }catch(err){
  res.status(500).json({ message: err.message });
  }
}

//rename group
exports.rename = async (req,res) =>{
  const { chatId,name } = req.body;

  const chat = await Chat.findById(chatId);

  if(chat.groupAdmin.toString() !== req.userId){
    return res.status(403).json({ message: "only admin can rename group" })
  }
  
  chat.chatName = name;
  await chat.save();

  res.json(chat);
}

//add user to group
exports.addToGroup = async (req,res) =>{
  const { chatId, userId } = req.body;

  const chat = await Chat.findById(chatId);

  if (chat.groupAdmin.toString() !== req.userId){
    return res.status(403).json({ message:"only admin can add users" }); 
  }

  if (chat.users.includes(userId)) {
    return res.status(400).json({ message: "User already in group" });
  }

  chat.users.push(userId);
  await chat.save();

  res.json(chat);
}

//remove user from group 
exports.removeFromGroup = async (req,res) =>{
  const { chatId, userId } = req.body;

  const chat = await Chat.findById(chatId);

  if (chat.groupAdmin.toString() !== req.userId){
    return res.status(403).json({ message: "only admin can remove users" })
  }

  chat.users = chat.users.filter(
    (user) => user.toString() !== userId
  );

  await chat.save();


res.json(chat);
}

