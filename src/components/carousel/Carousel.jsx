import { useEffect, useState } from "react";
import "./carousel.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setSlide((slide + 1) % data.length),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, [slide]);
  const leftClick = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  const rightClick = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  return (
    <div id="carousel" className="carousel">
      <BsFillArrowLeftSquareFill
        className="arrow arrow-left"
        onClick={leftClick}
      />
      {data.map((obj, idx) => {
        return (
          <img
            src={obj.url}
            alt={obj.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide-hidden"}
          />
        );
      })}
      <BsFillArrowRightSquareFill
        className="arrow arrow-right"
        onClick={rightClick}
      />
    </div>
  );
};

export default Carousel;
