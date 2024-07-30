// import React from 'react'

import useGetMessages from "../hooks/useGetMessages"
import Message from "./Message"

function Messages() {
  const {messages,loading}=useGetMessages()
  // console.log(messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading&&messages.length>0&&(messages.map((message)=>(
        <Message key={message.id} message={message} />
      )))}
       {loading &&<span className="text-center text-amber-500">loading...</span>}
       {!loading &&messages.length===0 &&(<p className="text-center text-amber-500">start conversation</p>)}

       
    </div>
  )
}

export default Messages