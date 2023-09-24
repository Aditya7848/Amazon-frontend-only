import React, { useState } from "react";
import "./navone.css";
import BurgerMenu from "./BurgerMenu";
const NavOne = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navone-container">
      <div
        onClick={() => {
          setShow(true);
        }}
      >
        🍔All
      </div>
      <BurgerMenu
        className={show ? "burger-container" : "doHide"}
        setShow={setShow}
      />
      <div>
        <span>Amazon miniTV</span>
      </div>
      <div>
        <span>Sell</span>
      </div>
      <div>
        <span>Best Sellers</span>
      </div>
      <div>
        <span>Mobile</span>
      </div>
      <div>
        <span>Today's Deals</span>
      </div>
      <div>
        <span>New Releases</span>
      </div>
      <div>
        <span>Prime</span>
      </div>
      <div>
        <span>Customer Service</span>
      </div>
      <div>
        <span>Electronics</span>
      </div>
      <div>
        <span>Fashion</span>
      </div>
      <div>
        <span>Gift Ideas</span>
      </div>
      <div>
        <span>Home & Kitchen</span>
      </div>
      <div>
        <span>Amazon Pay</span>
      </div>
    </div>
  );
};

export default NavOne;
