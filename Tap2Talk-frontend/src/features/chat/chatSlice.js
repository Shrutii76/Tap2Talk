import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    selectedChat: null,
  },
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

// ✅ EXPORT ACTIONS
export const { setChats, setSelectedChat } = chatSlice.actions;

// ✅ THIS IS IMPORTANT
export default chatSlice.reducer;
