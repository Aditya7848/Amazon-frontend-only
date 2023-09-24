import "./App.css";
import Nav from "./components/nav/Nav";
import NavOne from "./components/navone/NavOne";
import Carousel from "./components/carousel/Carousel";
import { slides } from "./data/carouselData.json";
import RowOne from "./components/row1/RowOne";
import { cols1 } from "./data/Row1.json";
import RowTwo from "./components/row2/RowTwo";
import { cols } from "./data/Row2.json";
import { cols3 } from "./data/Row3.json";
import RowThree from "./components/row3/RowThree";
import { cols4 } from "./data/Row4.json";
import RowFour from "./components/row4/RowFour";
import { title, fourSlidesinfo } from "./data/squarecardgalleryclick.json";
import { imgurls } from "./data/imageSlider.json";
import ImageSlider from "./components/imageslider/ImageSlider";
import Tail from "./components/tail/Tail";

function App() {
  return (
    <>
      <Nav />
      <NavOne />
      <Carousel data={slides} />
      <RowFour data={cols4} />
      <RowTwo data={cols} />
      <ImageSlider data={imgurls} />
      <RowThree data={cols3} fourSlidesinfo={fourSlidesinfo} />
      <RowOne data={cols1} />
      <Tail />
    </>
  );
}

export default App;
