import "./langselecttooltip.css";

const LangSelectTooltip = () => {
  return (
    <div className="lang_container">
      <div className="flex_child">
        <input type="radio" />
        <span>English EN</span>
      </div>
      <hr />
      <div className="flex_child">
        <input type="radio" />
        <span>TN</span>
      </div>
      <div className="flex_child">
        <input type="radio" />
        <span>KN</span>
      </div>
      <div className="flex_child">
        <input type="radio" />
        <span>HN</span>
      </div>
      <div className="flex_child">
        <input type="radio" />
        <span>MR</span>
      </div>
      <div className="flex_child">
        <input type="radio" />
        <span>UR</span>
      </div>
    </div>
  );
};

export default LangSelectTooltip;
