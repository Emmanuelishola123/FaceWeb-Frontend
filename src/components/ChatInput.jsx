import React from "react";
import { FaIcons, FaImage, FaPlusCircle, FaThumbsUp } from "react-icons/fa";

function ChatInput() {
  return (
    <div className="w-full bg-red-400 flex items-center px-1 absolute bottom-0">
      <FaPlusCircle className="text-primary text-2xl mr-2 cursor-pointer" />
      <FaImage className="text-primary text-2xl mr-2 cursor-pointer" />
      <FaIcons className="text-primary text-2xl mr-2 cursor-pointer" />
      <div className="flex items-center w-full rounded-2xl bg-comment-box px-4 py-2">
        <input
          type="text"
          name="message"
          placeholder="Aa"
          className="grow-1 rounded-2xl bg-comment-box outline-none"
        />

        <span className="flex justify-center items-center w-6 h-6 rounded-full cursor-pointer p-1 hover:shadow hover:bg-comment-box">
          <FaIcons className="text-md rounded-full " />
        </span>
      </div>
      <FaThumbsUp className="text-primary text-2xl ml-2 cursor-pointer" />
    </div>
  );
}

export default ChatInput;
