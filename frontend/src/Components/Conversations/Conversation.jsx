// import React from 'react'

import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../Context/SocketContext";

// eslint-disable-next-line react/prop-types
function Conversation({ conversation, lastIndex, emoji }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers}=useSocketContext()
  // eslint-disable-next-line react/prop-types
  const isOnline =onlineUsers.length>0&& onlineUsers.includes(conversation._id)
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-amber-400 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-amber-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline?"online":""}`}>
          <div className="w-14 rounded-full">
            <img
              // eslint-disable-next-line react/prop-types
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between ">
            <p className="font-bold text-white ">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}

export default Conversation;
