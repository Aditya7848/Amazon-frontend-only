import React, { useState } from "react";

// import { Button, makeStyles } from "@material-ui/core";

// import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

// const useStyles = makeStyles((theme) => ({
//   filter: {
//     width: "95%",
//     height: "25px",
//     margin: "auto",
//     marginTop: "5px",
//     padding: "5px",
//     border: "solid 1x white",
//     borderRadius: "5px",
//     display: "flex",
//     color: "black",
//     boxShadow: " 0px 2px 3px gray",
//     justifyContent: "center",
//     alignItems: "center"
//   }
// }));
const Filter = () => {
  // const classes = useStyles();

  const [currentFilter, setCurrentFilter] = useState(0);

  const filterList = [
    {
      id: "1",
      title: "Action",
    },
    {
      id: "2",
      title: "Adventure",
    },
    {
      id: "3",
      title: "Comedy",
    },
    {
      id: "4",
      title: "Documentary",
    },
    {
      id: "5",
      title: "Drama",
    },
    {
      id: "6",
      title: "Family",
    },
    {
      id: "7",
      title: "Fantasy",
    },
    {
      id: "8",
      title: "History",
    },
    {
      id: "9",
      title: "Horror",
    },
    {
      id: "10",
      title: "Music",
    },
    {
      id: "11",
      title: "Mystery",
    },
    {
      id: "12",
      title: "Romance",
    },
    {
      id: "13",
      title: "Sci-Fi",
    },
  ];
  const length = filterList.length;
  // how many you wanna se bro
  const offSet = 3;
  const nextFilter = () => {
    setCurrentFilter(
      currentFilter === length - 1 - offSet ? 0 : currentFilter + 1
    );
  };

  const prevFilter = () => {
    setCurrentFilter(
      currentFilter === 0 ? length - 1 - offSet : currentFilter - 1
    );
  };
  console.log(currentFilter);

  if (!Array.isArray(filterList) || filterList.length <= 0) {
    return null;
  }

  return (
    // classes.filter
    <div className="something">
      <List
        data={filterList.filter(
          (d, i) => i > currentFilter && i <= currentFilter + offSet
        )}
      />
      <button onClick={prevFilter}>Pervious</button>
      <button onClick={nextFilter}>next</button>
    </div>
  );
};

function List({ data = [] }) {
  if (!data.length) return;
  return (
    <ul className="items-container">
      {data.map((d, i) => (
        <li key={i}> {d.title} </li>
      ))}
    </ul>
  );
}

export default Filter;