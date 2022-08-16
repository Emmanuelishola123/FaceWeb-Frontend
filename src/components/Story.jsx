import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
// import story from "../assets/logo.png";

function Story({ userStory }) {
  return (
    <Link to="/stories/storyId">
      <div className="w-[110px] h-[180px] text-color-dark relative rounded-xl overflow-hidden">
        <img src='/assets/logo.png' alt="story" className="w-full h-full -z-40" />
        <div className="w-8 h-8 absolute top-4 left-4 rounded-full overflow-hidden p-[2px] bg-primary">
          <img
            src='/assets/logo.png'
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        {userStory ? (
          <div className="w-full h-[60px] absolute bottom-0 left-0 rounded-b-xl bg-box">
            <div className="w-10 h-10 absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-box rounded-full flex justify-center items-center bg-primary text-lg text-box">
              <FaPlus />
            </div>
            <p className="w-full px-2 text-md text-box-dark text-center absolute bottom-2 left-1/2 -translate-x-1/2">
              Your Story
            </p>
          </div>
        ) : (
          <p className="w-full px-2 text-md text-center absolute bottom-2 left-1/2 -translate-x-1/2">
            User story
          </p>
        )}
      </div>
    </Link>
  );
}

export default Story;
