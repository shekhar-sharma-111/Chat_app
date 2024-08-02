// import React from 'react'
import {useSocketContext} from '../../Context/SocketContext'
import 
function useListenerMessage() {
 const {socket}=useSocketContext()
 const {messages,setMessages}= useConversation();
}

export default useListenerMessage