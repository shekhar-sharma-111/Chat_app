// import React from 'react'

import { useAuthContext } from "../../Context/AuthContext"
import useConversation from "../../zustand/useConversation";

function Message({key,message}) {
  const {authUser}=useAuthContext();
  const userData=JSON.parse(authUser)
  const{user}=userData
 
 const{selectedConversation}= useConversation();
 const fromMe = message.senderId===user._id;
// const fromMe=false;
 const chatClassName=fromMe?'chat-end':'chat-start';
 const profilePic=fromMe?user.profilePic:selectedConversation.profilePic;
 const bubbleBgcolor=fromMe?'bg-amber-300':"";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img  alt="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
        // src="https://avatar.iran.liara.run/public/boy?username=shekhar123"
        src={profilePic} 
        />

        </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgcolor}`}>{message.message}</div>
        <div className='chat-footer opacity-80 text-white text-xs flex gap-1 items-'>sent time</div>
       
    </div>

  )
}

export default Message