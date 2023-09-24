import CardGrid from "../cardgrid/CardGrid";
import "./rowtwo.css";

const RowTwo = ({ data }) => {
  return (
    <div className="rowtwo_container">
      {data.map((obj) => {
        return <CardGrid key={obj.id} val={obj} />;
      })}
    </div>
  );
};

export default RowTwo;
