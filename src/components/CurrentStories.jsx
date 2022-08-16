import React from "react";
import StoryHandle from "./StoryHandle";

function CurrentStories() {
  return (
    <div className="min-h-full">
      <p className="text-2xl font-semibold px-4 py-4 shadow">Stories</p>
      {/* YOUR STORY */}
      <div className="px-4 py-2">
        <p className="text-lg font-semibold py-2">Your Story</p>
        <StoryHandle user={true} />
      </div>
      {/* OTHERS STORIES */}
      <div className="px-4 py-2">
        <p className="text-lg font-semibold py-2">All Stories</p>
       {[1,2,3,4,5,6].map(item =>  <StoryHandle key={item} user={false} />)}
      </div>
    </div>
  );
}

export default CurrentStories;
