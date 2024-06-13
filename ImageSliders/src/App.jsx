import data from "../data.js";
import ImageSlider3 from "./components/ImageSlider3.jsx";
import ImageSlider1 from "./components/ImageSlider1.jsx";
import ImageSlider2 from "./components/ImageSlider2.jsx";
import Title from "./components/Title.jsx";
export default function App() {
  return (
    <div>
      <Title dataa={"level-1"} />
      <ImageSlider1 imgArray={data} />
      <Title dataa={"level-2"} />
      <ImageSlider2 imgArray={data} />
      <Title dataa={"level-3"} />
      <ImageSlider3 imgArray={data} />
    </div>
  );
}
