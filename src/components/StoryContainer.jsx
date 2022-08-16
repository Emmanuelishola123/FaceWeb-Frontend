import React from "react";
import Story from "./Story";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function StoryContainer() {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        partialVisbile
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 10,
          },
          mobile: {
            breakpoint: {
              max: 640,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 10,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 640,
            },
            items: 3,
            partialVisibilityGutter: 10,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        <Story userStory={true} />
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <Story />
        ))}
      </Carousel>
    </div>
  );
}

export default StoryContainer;
