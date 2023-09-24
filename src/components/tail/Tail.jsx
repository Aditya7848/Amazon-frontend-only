import React from "react";
import "./tail.css";

const Tail = () => {
  return (
    <div className="tail-container">
      <button className="tail-container-btn">
        <a href="#carousel">Back to Top</a>
      </button>

      <div className="tailtop">
        <div className="tailone tailtop-flex ">
          <span className="tailtop-ff">Get to Know Us</span>
          <span>Careers</span>
          <span>Press Release</span>
          <span>Amazon Science</span>
        </div>
        <div className="tailtwo tailtop-flex ">
          <span className="tailtop-ff">Connect With Us</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
        <div className="tailthree tailtop-flex ">
          <span className="tailtop-ff">Make Money With Us</span>
          <span>Sell on Amazon</span>
          <span>Sell under Amazon Accelerator</span>
          <span>Protect and Build Your Brand</span>
          <span>Amazon Global Selling</span>
          <span>Become an Affiliate</span>
          <span>Fulfilment by Amazon</span>
          <span>Advertise Your Products</span>
          <span>Amazon Pay on Merchants</span>
        </div>
        <div className="tailfour tailtop-flex ">
          <span className="tailtop-ff">Let us help you</span>
          <span>COVID-19 and Amazon</span>
          <span>Your Account</span>
          <span>Returns Center</span>
          <span>100% Purchase Protection</span>
          <span>Amazon App Download</span>
          <span>Help</span>
        </div>
      </div>
      <div className="tailmiddle">
        <div className="tailmiddle-img">
          <img src="/amazon1.png" alt="amg-logo" />
          <select name="lang" id="lang">
            <option value="EN"> 🌐English</option>
            <option value="TN">TN</option>
            <option value="HN">HN</option>
            <option value="MR">MR</option>
            <option value="KN">KN</option>
          </select>
        </div>

        <div className="tailmiddle-countries">
          <span>Australia</span>
          <span>Brazil</span>
          <span>Canada</span>
          <span>Chine</span>
          <span>France</span>
          <span>Germany</span>
          <span>Italy</span>
          <span>Japan</span>
          <span>Mexico</span>
          <span>Netherlands</span>
          <span>Poland</span>
          <span>Singapore</span>
          <span>Spain</span>
          <span>Turkey</span>
          <span>United Arab Emirates</span>
          <span>United Kingdom</span>
          <span>United States</span>
        </div>
      </div>
      <div className="tailbottom">
        <div className="tailbottomone tailbottom-flex">
          <div className="tailbottomone-one tailbottom-flex-one">
            <span className="tailbottom-flex-bold">AbeBooks</span>
            <span>Books, art</span>
            <span>&collectibles</span>
          </div>
          <div className="tailbottomone-two tailbottom-flex-one">
            <span className="tailbottom-flex-bold">Shopbop</span>
            <span>Designer</span>
            <span>Fashion Brands</span>
          </div>
        </div>
        <div className="tailbottomtwo tailbottom-flex">
          <div className="tailbottomtwo-one tailbottom-flex-one">
            <span className="tailbottom-flex-bold">Amazon Web Services</span>
            <span>Scalable Cloud</span>
            <span>Computing Services</span>
          </div>
          <div className="tailbottomtwo-two tailbottom-flex-one">
            <span className="tailbottom-flex-bold">Amazon Business</span>
            <span>Everything for</span>
            <span>Your Business</span>
          </div>
        </div>
        <div className="tailbottomthree tailbottom-flex">
          <div className="tailbottomthree-one tailbottom-flex-one">
            <span className="tailbottom-flex-bold">Audible</span>
            <span>Download</span>
            <span>Audio Books</span>
          </div>
          <div className="tailbottomthree-two tailbottom-flex-one">
            <span className="tailbottom-flex-bold">Prime Now</span>
            <span>2-Hour Delivery</span>
            <span>on Everyday Items</span>
          </div>
        </div>
        <div className="tailbottomfour tailbottom-flex">
          <div className="tailbottomfour-one tailbottom-flex-one">
            <span>DPReview</span>
            <span>Photography</span>
          </div>
          <div className="tailbottomfour-two tailbottom-flex-one">
            <span>Amazon Prime Music</span>
            <span>100 million songs, ad-free</span>
            <span>Over 15 million podcast episodes</span>
          </div>
        </div>
        <div className="tailbottomfive tailbottom-flex">
          <div className="tailbottomfive-one tailbottom-flex-one">
            <span>IMDB</span>
            <span>Movies, TV</span>
            <span>& Celebrities</span>
          </div>
        </div>
      </div>
      <div className="tail-tail">
        <div className="tail-tail-one">
          <span>Conditions of Use & Sale </span>
          <span>Privacy Notice </span>
          <span>Interest-Based Ads</span>
        </div>
        <div className="tail-tail-two">
          <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};

export default Tail;
