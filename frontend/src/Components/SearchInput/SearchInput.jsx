// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("search length must be 3 characters long");
    }
  //  toast.success(search)
    const conversation = conversations.find((conv) =>
      conv.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error("No such user found");
  };
  
  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          value={search}
          className="input input-border rounded-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-amber-400">
          {/* <FaSearch className="w-5 h-5 outline-none" /> */}
          <IoSearchSharp className=" w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
