import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ChatList from "../components/ChatList"; 
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchChats } from "../services/api";
// import { setChats } from "../features/chat/chatSlice";

export default function ChatPage(){

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadChats = async () => {
      const chats = await fetchChats(user.token);
      dispatch(setChats(chats));
    };

    loadChats();
  }, []);

  return (
 <div className= "flex h-screen bg-[#111317] text-wwhite">
  <Sidebar/>
  <ChatList/>
  <ChatWindow/>
 </div>
  )
}