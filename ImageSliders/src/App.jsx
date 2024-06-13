import data from "../data.js";
import ImageSlider from "./components/ImageSlider";
export default function App() {
  return (
    <div>
      <ImageSlider imgArray={data} />
    </div>
  );
}
