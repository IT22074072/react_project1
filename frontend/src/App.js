import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data.js";
import QRCodeGenerator from "./components/qr-code-generator";


function App() {
  return (
    <div className="App">
      {/**Accordian component */}
      {/**<Accordian/>*/}

      {/**Random color component */}
      {/*<RandomColor />*/}

      {/**Star rating  component */}
      {/** <StarRating noOfStars={10}/>*/}

      {/**image-slider componenet */}
      {/*<ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={1}/>*/}

      {/*load-more-data component*/}
      {/*<LoadMoreData/>*/}

      {/**tree-view component */}
      {/*<TreeView menus={menus}/>*/}

      <QRCodeGenerator/>
    </div>
  );
}

export default App;
