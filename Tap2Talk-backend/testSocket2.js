const io = require("socket.io-client");

//  create socket connection FIRST
const socket = io("http://localhost:3000");

// setup user
socket.emit("setup", "69c255be31ef3ba2027a911b");

// join chat
socket.emit("joinChat", "69c761ae85bb6a69c4ce5924");

// listen for messages
socket.on("receiveMessage", (msg) => {
  console.log("User2 received:", msg);
});