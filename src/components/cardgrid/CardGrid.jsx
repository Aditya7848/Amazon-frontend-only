import "./cardgrid.css";

const CardGrid = ({ val }) => {
  return (
    <div className="content_container">
      <div className="content_heading">{val.title}</div>
      <div className="r1c1 felix-div">
        <img
          src={val.r1c1img}
          alt={val.r1c1title}
          className="content-card-gird-img"
        />
        <span className="image-title">{val.r1c1title}</span>
      </div>
      <div className="r1c2 felix-div">
        <img
          src={val.r1c2img}
          alt={val.r1c2title}
          className="content-card-gird-img"
        />
        <span className="image-title">{val.r1c2title}</span>
      </div>
      <div className="r2c1 felix-div">
        <img
          src={val.r2c1img}
          alt={val.r2c1title}
          className="content-card-gird-img"
        />
        <span className="image-title">{val.r2c1title}</span>
      </div>
      <div className="r2c2 felix-div">
        <img
          src={val.r2c2img}
          alt={val.r2c2title}
          className="content-card-gird-img"
        />
        <span className="image-title">{val.r2c2title}</span>
      </div>
      <div className="content_tail">
        <a href="/#">See all offers</a>
      </div>
    </div>
  );
};

export default CardGrid;
