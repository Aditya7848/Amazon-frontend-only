import "./cardgallaryclick.css";
import { useState } from "react";

const CardGallaryClick = ({ title, fourSlidesinfo }) => {
  const [dispObj, setdispObj] = useState(fourSlidesinfo[0]);
  const handleClick = (obj) => {
    setdispObj(obj);
  };

  return (
    <div className="cGallary-container">
      {title}

      {dispObj && (
        <div className="inside-div">
          <img className="disp-largeimg" src={dispObj.imgurllarge} alt="" />
          <div className="inside-text">{dispObj.imgname}</div>
          <p>
            <strong>{dispObj.currprice}</strong>
            <span className="small-vont">{dispObj.oPrice}</span>
          </p>
        </div>
      )}

      <div className="cGallary-fourdivs">
        {fourSlidesinfo.map((obj) => {
          return (
            <div key={obj.id} className="mini">
              <img
                src={obj.imgurlsmall}
                alt={obj.alt}
                onClick={() => handleClick(obj)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGallaryClick;
