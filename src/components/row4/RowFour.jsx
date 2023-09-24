import "./rowfour.css";
import CardSignIn from "../cardsignin/CardSignIn";
import CardSingleImage from "../cardSingleImage/CardSingleImage";
import CardFlex from "../cardflex/CardFlex";
const RowFour = ({ data }) => {
  return (
    <div className="rowfour-container">
      <CardSingleImage />
      {data.map((obj, idx) => {
        return <CardFlex key={idx} prop={obj} />;
      })}
      <CardSignIn />
    </div>
  );
};

export default RowFour;
