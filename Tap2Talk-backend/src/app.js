const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth",require("./routes/authRoutes"));
app.use("/chat",require("./routes/chatRoutes"));
app.use("/message",require("./routes/messageRoutes"));

app.get("/",(req,res)=>{
    res.send("Tap2Talk");
});

module.exports = app;