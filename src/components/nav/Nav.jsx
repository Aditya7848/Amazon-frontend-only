import "./nav.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import LangSelectTooltip from "./LangSelectTooltip";
import SignInTooltip from "./SignInTooltip";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_image">
        <img src="/amazon-logo.jpg" alt="amazon_logo" className="amazon_logo" />
      </div>
      <div className="nav_location">
        <div className="nav_location_tail">
          <div></div>
          <HiOutlineLocationMarker className="nav_drop_bubble" />
        </div>
        <div className="nav_location_text_container">
          <span className="nav-location_text">Hello</span>
          <span className="nav_location_tail_text">Select your Address</span>
        </div>
      </div>
      <div className="nav_searchbox">
        <select className="select">
          <option>All</option>
          <option>Books</option>
          <option>Software</option>
          <option>Watches</option>
        </select>
        <input type="text" className="input" />
        <div className="nav_search_icon_container">
          <IoSearch className="nav_search_icon" />
        </div>
      </div>
      <div className="nav_lang_tooltip">
        <div className="nav_lang_tooltip_head">
          <img
            src="/indiaFlag.png"
            alt="indiaFlag"
            className="nav_lang_tooltip_india_img"
          />
          <span>EN</span>
        </div>
        <LangSelectTooltip />
      </div>
      <div className="sign-in_tooltip">
        <div className="signin_inner">
          <p className="signin-inner-hello">
            Hello <span>Sign-In</span>
          </p>
          <span className="signin_inner_account">Account & Lists</span>
        </div>
        <SignInTooltip />
      </div>
      <div className="nav_returnorders">
        <span>Returns &</span>
        <span>Orders</span>
      </div>
      <div className="nav_cart">
        <FaCartShopping className="nav_cart_icon" />
        <div className="nav_cart_text">0</div>
      </div>
    </div>
  );
};

export default Nav;
