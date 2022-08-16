import React from "react";
import CurrentStories from "../components/CurrentStories";
import StoryView from "../components/StoryView";

function StoryPage() {
  return (
    <div className="grid grid-cols-12">
      {/* QUESES OF STORIES */}
      <div className="col-span-3">
        <CurrentStories />
      </div>
      {/* STORYGROUND */}
      <div className="col-span-6 max-h-full grid place-items-center bg-comment-box ">
        <div className="w-[400px] h-[600px] rounded-lg overflow-hidden">
          <StoryView />
        </div>
      </div>
      {/* STORY USER PROFILE */}
      <div className="col-span-3 pt-8">
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
    </div>
  );
}

export default StoryPage;
