import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function StoryView() {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        // className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        // partialVisbile
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 640,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: {
              max: 24,
              min: 640,
            },
            items: 1,
            partialVisibilityGutter: 0,
          },
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {/* <div className="w-full h-full rounded-lg overflow-hidden bg-primary"> */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <img
            key={item}
            src="/assets/logo.png"
            alt="storyground"
            className="w-full min-h-full rounded-lg"
          />
        ))}
        {/* </div> */}
      </Carousel>
    </div>
  );
}

export default StoryView;
