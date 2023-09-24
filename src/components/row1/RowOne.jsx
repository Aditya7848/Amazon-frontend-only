import "./rowone.css";
import CardFlex from "../cardflex/CardFlex";

const RowOne = ({ data }) => {
  return (
    <div className="rowone-container">
      {data.map((obj, idx) => {
        return <CardFlex prop={obj} key={idx} />;
      })}
    </div>
  );
};

export default RowOne;
