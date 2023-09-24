import "./cardflex.css";

const CardFlex = ({ prop }) => {
  return (
    <div className="fcard-container">
      <div className="fcard-title">{prop.title}</div>
      <div className="fcard-row1 flex-div">
        <div className="r1c1">
          <img src={prop.r1c1img} alt="" />
          <p>{prop.r1c1title}</p>
        </div>
        <div className="r1c2">
          <img src={prop.r1c2img} alt="" />
          <p>{prop.r1c2title}</p>
        </div>
      </div>
      <div className="fcard-row2 flex-div">
        <div className="r2c1">
          <img src={prop.r2c1img} alt="" />
          <p>{prop.r2c1title}</p>
        </div>
        <div className="r2c2">
          <img src={prop.r2c2img} alt="" />
          <p>{prop.r2c2title}</p>
        </div>
      </div>
      <div className="tail">
        <a href="/#">See more info</a>
      </div>
    </div>
  );
};

export default CardFlex;
