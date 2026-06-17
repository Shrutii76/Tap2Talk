const io = require("socket.io-client");

const socket = io("http://localhost:3000");

//simulate user login
socket.emit("setup", "69c760b485bb6a69c4ce591b");

//join chat
socket.emit("joinChat", "69c761ae85bb6a69c4ce5924");

//listen for messages
socket.on("recieveMessage",(msg)=>{
    console.log("New Message:" , msg);
})