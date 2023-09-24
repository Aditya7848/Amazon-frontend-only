import React, { useRef, useState, useEffect } from "react";
import "./imageslider.css";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const ImageSlider = ({ data }) => {
  const maxScrollWidth = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel != null && carousel.current != null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const scrollLeft = () => {
    console.log("scrollleft clicked");
    console.log("carousel.current left == ", carousel.current);

    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const scrollRight = () => {
    console.log("scroll right is clicked");
    console.log(
      "carousel.current.offsetWidth right == ",
      carousel.current.offsetWidth
    );
    console.log("maxScrollWidth.current ==", maxScrollWidth.current);
    if (
      carousel.current != null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  return (
    <div className="iSlider-container">
      <BsFillArrowLeftSquareFill
        className="arrow arrow-left"
        onClick={scrollLeft}
      />
      <div className="product-container" ref={carousel}>
        {data.map((obj, idx) => (
          <img
            key={obj.id}
            src={obj.url}
            className="image-slider-img"
            alt={obj.id}
          />
        ))}
      </div>
      <BsFillArrowRightSquareFill
        className="arrow arrow-right"
        onClick={scrollRight}
      />
    </div>
  );
};

export default ISlider;
