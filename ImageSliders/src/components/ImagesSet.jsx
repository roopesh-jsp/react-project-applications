import Image from "./Image";
import one from "../../media/one.jpg";
import data from "../../data";
export default function ImagesSet() {
  return (
    <>
      {data.map((item) => (
        <Image img={item.img} name={item.name} key={item.img} />
      ))}
    </>
  );
}
