// import React from 'react'
// import { CiSearch } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="search..."
          className="input input-border rounded-full"
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
