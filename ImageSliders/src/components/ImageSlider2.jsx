import { useState } from "react";
export default function ImageSlider2({ imgArray }) {
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
  function goToImg(idx) {
    setImgIndex(idx);
  }
  return (
    <>
      <div className="carosuel">
        <button onClick={prevImg} className="previmg">
          -
        </button>
        {imgArray.map((img) => (
          <img
            key={img.img}
            src={img.img}
            style={{
              translate: `${-100 * imgIndex}%`,
            }}
          />
        ))}
        <button onClick={nxtImg} style={{ right: 0 }}>
          +
        </button>
      </div>
    </>
  );
}
