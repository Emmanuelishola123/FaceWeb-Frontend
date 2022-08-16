import React from "react";
import ChatHandle from "./ChatHandle";
import CurrentUserHeader from "./CurrentUserHeader";

function CurrentChats() {
  return (
    <div className="w-full">
      <CurrentUserHeader />
      <ul className="flex flex-col gap-2 px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <li key={item} className="flex items-center gap-4 px-2 py-1 rounded-lg cursor-pointer hover:bg-comment-box text-lg">
              <ChatHandle message={true}  />
            </li>
          ))}
        </ul>
    </div>
  );
}

export default CurrentChats;
