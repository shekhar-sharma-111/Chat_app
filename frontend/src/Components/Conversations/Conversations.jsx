// import React from 'react'

import useGetConversations from "../hooks/useGetConversations.js"
import Conversation from "./Conversation.jsx"
import { getRanddomEmoji } from "./utils/emojis.js"

function Conversations() {
  
const{loading,conversations}=useGetConversations()
// console.table(conversations)
  return (
    <div className="py-1 flex flex-col overflow-auto">
      {conversations&&conversations.map((conversation,index)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRanddomEmoji()}
        lastIndex={index===conversations.length-1}

        />
      ))}
       {loading?<span className="loading loading-spinner mx-auto"></span>:null}
       
    </div>
  )
}

export default Conversations