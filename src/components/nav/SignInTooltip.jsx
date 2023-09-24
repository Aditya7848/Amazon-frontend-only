import "./signintooltip.css";

const SignInTooltip = () => {
  return (
    <div className="signin-tooltip-container">
      <div className="top">
        <button className="top_button">Sign in</button>
        <span className="bottom_span">
          New customer? <a href="/#">Start here.</a>
        </span>
        <div className="inner_bottom_line">&nbsp;</div>
      </div>
      <div className="left">
        <ul>
          <h2>Your Lists</h2>
          <li>Create a Wish List</li>
          <li>Wish from Any Website</li>
          <li>Baby Wishlist</li>
          <li>Discover Your Style</li>
          <li>Explore Showroom</li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <h2>Your Account</h2>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Your WishList</li>
          <li>Your Recomendations</li>
          <li>Your Prime Membership</li>
          <li>Your Prime Video</li>
          <li>Your Subscribe & save Items</li>
          <li>Memberships & Subscriptions</li>
          <li>Your Seller Account</li>
          <li>Manage Your Content and Devices</li>
          <li>Your Free Amazon Business Account</li>
        </ul>
      </div>
    </div>
  );
};

export default SignInTooltip;
