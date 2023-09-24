import React from "react";
import { CgProfile } from "react-icons/cg";
import "./burgerone.css";

const BurgerMenu = ({ setShow }) => {
  console.log(setShow);
  return (
    <div className="burger-container doHide">
      <div className="burger-toppest">
        <CgProfile className="burger-topest-icon" />
        <span className="pad">Hello, sign in</span>
        <span
          onClick={() => {
            setShow(false);
          }}
        >
          X
        </span>
      </div>
      <div className="top">
        <h2 className="pad">Trending</h2>
        <span className="pad">Best Sellers</span>
        <span className="pad">New Releases</span>
        <span className="pad">Movers and Shakers</span>
      </div>
      <div className="bottom">
        <h2 className="pad">Digital Content And Devices</h2>
        <span className="pad">Echo & Alexa</span>
        <span className="pad">Fire TV</span>
        <span className="pad">Kindle E-readers & eBooks</span>
        <span className="pad">Audible Audiobooks</span>
        <span className="pad">Amazon Prime Music</span>
        <span className="pad">Amazon Prime Video</span>
      </div>
    </div>
  );
};

export default BurgerMenu;
