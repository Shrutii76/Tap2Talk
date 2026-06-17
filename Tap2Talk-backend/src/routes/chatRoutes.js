const express = require("express");
const {
  accessChat,
  getChats,
  createGroupChat,
  rename,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatController");
const auth = require("../middleware /authMiddleware")

const router = express.Router();

router.post("/",auth,accessChat);
router.get("/",auth,getChats);

//Group routes
router.post("/group", auth, createGroupChat);
router.put("/rename", auth, rename);
router.put("/add", auth, addToGroup);
router.put("/remove", auth, removeFromGroup);

module.exports = router;