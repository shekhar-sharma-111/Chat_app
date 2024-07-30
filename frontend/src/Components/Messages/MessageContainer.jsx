

import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessage } from 'react-icons/ti';

function MessageContainer() {
  const {selectedConversation,setSelectedConversation}=useConversation()
 useEffect(()=>{
  return ()=>setSelectedConversation(null)
 },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
     {selectedConversation?<>
          <div className="bg-amber-400 px-4 py-2 mb-2">
            <span className="label-text">to:</span>
            <span className="text-white font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>:<NoChatSelected/>}
   
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>welcome Shekhar😍 </p>
        <p> select user to chat </p>
        <TiMessage className="text-3xl md:text-5xl text-center" />
      </div>
    </div>
  );
};
