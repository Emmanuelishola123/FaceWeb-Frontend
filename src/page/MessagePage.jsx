import React from "react";
import ChatFeed from "../components/ChatFeed";
import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import CurrentChats from "../components/CurrentChats";

function MessagePage() {
  return (
    <main className="relative grid grid-cols-12 ">
      {/* LEFT BAR */}
      <div className="sticky top-0 col-span-3 h-screen ">
        <CurrentChats />
      </div>
      {/* MAIN POST FEED */}
      <div className="relative max-h-full col-span-6 ">
        <ChatHeader className="z-40" />
        <div className="w-full bg-red-400 min-h-full max-h-full h-full">
          <ChatFeed />
        </div>
        <ChatInput className="z-40" />
      </div>
      {/* RIGHT BAR */}
      <div className="sticky top-0 col-span-3 h-screen px-4 md:px-6 pt-8">
        <div className="w-32 h-32 mb-2 mx-auto  rounded-full overflow-hidden cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <p className="text-2xl text-center font-semibold capitalize cursor-pointer">
          Fred Raymond
        </p>
        <p className="text-sm text-center font-normal cursor-pointer">
          Active now
        </p>
      </div>
    </main>
  );
}

export default MessagePage;
