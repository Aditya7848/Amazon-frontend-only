import React, { useState } from "react";
import "./imageslider.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const ImageSlider = ({ data }) => {
  const [currentFilter, setCurrentFilter] = useState(0);

  const length = data.length;
  const offSet = 4;
  const nextFilter = () => {
    setCurrentFilter(
      currentFilter === length - 1 - offSet ? 0 : currentFilter + 1
    );
  };
  const prevFilter = () => {
    setCurrentFilter(
      currentFilter === 0 ? length - 1 - offSet : currentFilter - 1
    );
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <div className="something">
      <List
        fdata={data.filter(
          (d, i) => i > currentFilter && i <= currentFilter + offSet
        )}
      />
      <div className="left-icon-container">
        <BsFillArrowLeftSquareFill onClick={prevFilter} className="prev-btn" />
      </div>
      <div className="right-icon-container">
        <BsFillArrowRightSquareFill onClick={nextFilter} className="nxt-btn" />
      </div>
    </div>
  );
};

function List({ fdata = [] }) {
  if (!fdata.length) return;
  
  return (
    <div className="img-container">
      {fdata.map((obj) => {
        return (
          <div key={obj.id}>
            <img src={obj.url} alt="img" />
          </div>
        );
      })}
    </div>
  );
}
export default ImageSlider;
