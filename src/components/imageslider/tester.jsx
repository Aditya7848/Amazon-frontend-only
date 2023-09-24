import { useRef, useState, useLayoutEffect } from "react";
import "./imageslider.css";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const ImageSlider = ({ data }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);
  let box = document.querySelector(".product-container");

  const lefthandler = () => {
    box.scrollLeft = box.scrollLeft - width;
    console.log("box.scrollLeft == ", box.scrollLeft);
    console.log(width);
  };
  const righthandler = () => {
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className="iSlider-container">
      <BsFillArrowLeftSquareFill
        className="arrow arrow-left"
        onClick={lefthandler}
      />
      <div className="product-container" ref={ref}>
        {data.map((obj, idx) => {
          return (
            <img
              key={obj.id}
              src={obj.url}
              className="image-slider-img"
              alt={obj.id}
            />
          );
        })}
      </div>
      <BsFillArrowRightSquareFill
        className="arrow arrow-right"
        onClick={righthandler}
      />
    </div>
  );
};

export default ImageSlider;
