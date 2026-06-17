require('dotenv').config();

const app = require("./app");
const connectDB = require("./config/db");

const http = require("http");
const {Server} = require("socket.io");

connectDB();

const server = http.createServer(app);
const onlineUsers = new Map(); //userId >socketId

//socket.io setup
const io = new Server(server,{
    cors:{
        origin:"*",
    },
});

//basic connection
io.on("connection",(socket)=>{
    console.log("User connected:",socket.id);


    //when user connects
    socket.on("setup",(userId)=>{
        onlineUsers.set(userId,socket.id);
        socket.userId = userId;
        console.log("User setup:",userId);
    })

    //join chat room
    socket.on("joinChat",(chatId)=>{
        socket.join(chatId);
        console.log("joined chat:", chatId);
    })

    //send message
    socket.on("sendMessage",(message)=>{
        const chat = message.chat;
   
    if(!chat.users) return;

    chat.users.forEach((user)=>{
        if(user._id == message.sender._id) return;
        const socketId = onlineUsers.get(user._id);

        if (socketId){
            io.to(socketId).emit("receiveMessage",message);
        }
    })
    socket.on("disconnect", () => {
      console.log("User disconnected:");
      onlineUsers.delete(socket.userId);
    });
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);
})