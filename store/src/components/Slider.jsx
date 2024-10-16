import React, { useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slider = () => {
  const elementRef = useRef(null); // Make sure this is null at first

  const allPics = [
    "/image/s1.jpeg",
    "/image/s2.jpeg",
    "/image/s3.jpeg",
    "/image/s4.jpeg",
    "/image/s5.jpeg",
    "/image/s6.jpeg",
    "/image/s1.jpeg",
    "/image/s2.jpeg",
    "/image/s3.jpeg",
    "/image/s4.jpeg",
    "/image/s5.jpeg",
    "/image/s6.jpeg",
  ];

  const SliderRight = (carousel) => {
    if (carousel) {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScrollLeft) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
      }
    }
  };

  const SliderLeft = (carousel) => {
    if (carousel) {
      if (carousel.scrollLeft === 0) {
        carousel.scrollTo({
          left: carousel.scrollWidth - carousel.clientWidth,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
      }
    }
  };
  
  useEffect(() => {
    const carousel = elementRef.current; // Use elementRef here
    const interval = setInterval(() => {
      if (carousel) {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScrollLeft) {
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
        }
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mt-10 mx-16 relative"> {/* Add relative positioning here */}
        <AiOutlineLeft
          className="text-black text-4xl cursor-pointer absolute z-10 top-[130px] left-[-30px]"
          onClick={() => SliderLeft(elementRef.current)}
        />
        <div
          ref={elementRef}
          className="flex overflow-x-auto h-[290px] gap-2 p-1 scrollbar-hide md:scrollbar-default"
        >
          {allPics.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Slide ${index + 1}`}
              className="carousel-image rounded-lg"
            />
          ))}
        </div>
        <AiOutlineRight
          className="text-black text-4xl cursor-pointer absolute z-10 top-[130px] right-[-30px]"
          onClick={() => SliderRight(elementRef.current)}
        />
      </div>
    </div>
  );
};

export default Slider;
