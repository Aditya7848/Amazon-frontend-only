import React from "react";
import CardGallaryClick from "../cardgallaryclick/CardGallaryClick";
import CardFlex from "../cardflex/CardFlex";
import "./rowthree.css";

const RowThree = ({ data, fourSlidesinfo }) => {
  return (
    <div className="rowthree-container">
      {data.map((obj, idx) => {
        return <CardFlex key={idx} prop={obj} />;
      })}
      {<CardGallaryClick title="hello" fourSlidesinfo={fourSlidesinfo} />}
    </div>
  );
};

export default RowThree;
