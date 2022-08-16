import React from "react";
import { FaSearch } from "react-icons/fa";

function CurrentUserHeader() {
  return (
    <div className="px-2 py-2 mb-2 shadow ">
      <p className="text-2xl font-semibold mb-2 grow-1">Chats</p>
      <div className="flex items-center w-full rounded-2xl bg-comment-box px-4 py-2">
        <span className="flex justify-center items-center w-6 h-6 rounded-full cursor-pointer p-1 hover:shadow hover:bg-comment-box">
          <FaSearch className="text-lg rounded-full " />
        </span>
        <input
          type="text"
          name="chat"
          placeholder="Search Chat"
          className="grow-1 rounded-2xl bg-comment-box outline-none"
        />
      </div>
    </div>
  );
}

export default CurrentUserHeader;
