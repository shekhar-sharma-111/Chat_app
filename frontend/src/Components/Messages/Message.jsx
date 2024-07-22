// import React from 'react'

function Message() {
  return (
    <div className="chat chat-end ">
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img  alt="user image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

        </div>
        </div>
        <div className='chat-bubble text-white bg-amber-300'>hello duniya</div>
        <div className='chat-footer opacity-80 text-white text-xs flex gap-1 items-'>11:11</div>
       
    </div>

  )
}

export default Message