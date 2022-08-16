import React from "react";
import { FaPlus } from "react-icons/fa";

function StoryHandle({ user }) {
  return (
    <div className="flex gap-4">
      {user ? (
        <div className="flex gap-4 w-full items-center px-4 py-2 rounded-md hover:bg-comment-box cursor-pointer ">
          <div className="w-10 h-10 grid place-items-center rounded-full overflow-hidden ring-2 ring-primary">
            <FaPlus className="text-2xl text-primary" />
          </div>
          <div>
            <p className="text-lg font-semibold">Create a Story</p>
            <p className="text-xs font-sm text-slate-500">Share a photo or write something</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 w-full items-center px-4 py-2 mt-2 rounded-md hover:bg-comment-box cursor-pointer">
          <div className="w-10 h-10 grid place-center rounded-full overflow-hidden ring-2 ring-offset-2 ring-primary">
            <img
              src="/assets/logo.png"
              alt="story"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Henry Mary</p>
            <p className="text-sm font-sm text-slate-500">30m</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StoryHandle;
