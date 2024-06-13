import { useState } from "react";
export default function ({ imgArray }) {
  const [imgIndex, setImgIndex] = useState(0);
  function prevImg() {
    setImgIndex((prev) => {
      if (prev === 0) return imgArray.length - 1;
      return prev - 1;
    });
  }
  function nxtImg() {
    setImgIndex((prev) => {
      if (prev === imgArray.length - 1) return 0;
      return prev + 1;
    });
  }
  return (
    <div className="carosuel">
      <button onClick={prevImg} className="previmg">
        -
      </button>
      <img src={imgArray[imgIndex].img} alt="" />
      <button onClick={nxtImg} style={{ right: 0 }}>
        +
      </button>
    </div>
  );
}
