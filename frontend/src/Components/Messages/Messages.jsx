// import React from 'react'

import { useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

function Messages() {
  const { messages, loading } = useGetMessages();

  // console.log(messages)
  const lastMessageRef = useRef("");
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth"  });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto   ">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && (
        <span className="text-center text-amber-500">loading...</span>
      )}
      {!loading && messages.length === 0 && (
        <p className="text-center text-amber-500">start conversation</p>
      )}
    </div>
  );
}

export default Messages;
