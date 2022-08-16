import React from "react";
import {  FaInfoCircle } from "react-icons/fa";
import UserAvater from "./UserAvater";

function ChatHeader() {
  const user = {
    displayName: "Fred Marvin",
    userId: "fred-marvin",
    status: 'online',
    showCaption: true,
    size: 10,
  };

  return (
    <div className="sticky top-0 w-full bg-box flex justify-between items-center px-4 py-1 shadow">
      <UserAvater {...user} />
      <FaInfoCircle className="text-lg" />
    </div>
  );
}

export default ChatHeader;
