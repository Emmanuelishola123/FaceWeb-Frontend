import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
// import avatar from "../assets/logo.png";

function ChatHandle({ message }) {
  return (
    <Link to="/messages/messageId">
      <div className="flex gap-2 items-center">
        <span className="relative w-10 h-10 rounded-full">
          <img
            src="/assets/logo.png"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
          <span className="w-[10px] h-[10px] border border-bg rounded-full absolute bottom-0 right-0 bg-green-500"></span>
        </span>
        <span>
          <p className="text-lg font-semibold">Kenneth Titus</p>
          {message ? (
            <p className="flex items-center text-sm font-normmal">
              <span className="mr-2">Wassup Bro</span>
              <span className="flex items-center"> <span className="w-2 h-2 rounded-full bg-color mr-1 ml-2"></span> <span>1h</span></span>
            </p>
          ) : (
            <p className="flex items-center text-sm font-normmal">
              An hour ago <FaClock className="ml-2" />
            </p>
          )}
        </span>
      </div>
    </Link>
  );
}

export default ChatHandle;
