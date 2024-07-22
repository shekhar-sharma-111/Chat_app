// import React from 'react'

import Conversations from "../Conversations/Conversations"
import LogoutButton from "../LogoutButton/LogoutButton"
import SearchInput from "../SearchInput/SearchInput"

function Sidebar() {
  return (
    <div className="border-r  border-slate-500 p-4 flex flex-col">
      <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations/>
        
        <LogoutButton/>
    </div>
  )
}

export default Sidebar