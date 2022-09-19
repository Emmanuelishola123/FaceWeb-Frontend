import React, { useEffect } from "react";
import Story from "./Story";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
// import { useRef } from "react";

function StoryContainer() {
  const [width, setWidth] = useState();
  const [storyContainer, setStoryContainer] = useState();

  useEffect(() => {
    const container = document.getElementById("storyContainer");
    setWidth(container.clientWidth);
    setStoryContainer(container);

  }, []);
  
  const handleStoriesScroll = (direction) => {
    if (direction === "left") {
      console.log(storyContainer);
      console.log(width);
      console.log(storyContainer.scrollWidth);
    }
    if (direction === "right") {
      // storyContainer.scroll += width;
    }
    // console.log(width);
  };
  return (
    <div className="relative">
      <div
        onClick={() => handleStoriesScroll("left")}
        className="absolute inset-y-1/2 -translate-y-1/2 left-0 ml-4 grid place-content-center w-9 h-9 bg-box rounded-full cursor-pointer z-40"
      >
        <FaChevronLeft className="text-lg" />
      </div>
      <div
        id="storyContainer"
        className="story w-auto flex flex-nowrap items-center  overflow-auto p-2 "
      >
        <Story userStory={true} />
        {[1, 2, 3, 4, 5, 6, 7, 4, 4, 4, 4, 4, 4, 4, 4, 9].map((i) => (
          <Story key={i} />
        ))}
      </div>
      <div
        onClick={() => handleStoriesScroll("right")}
        className="absolute inset-y-1/2 -translate-y-1/2 right-0 mr-4 grid place-content-center w-9 h-9 bg-box rounded-full cursor-pointer z-40"
      >
        <FaChevronRight className="text-lg" />
      </div>
    </div>
  );
}

export default StoryContainer;
