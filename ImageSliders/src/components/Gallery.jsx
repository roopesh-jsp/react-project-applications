import ImagesSet from "./ImagesSet.jsx";
import Header from "./Header.jsx";
export default function Gallery({ state, fun }) {
  function handleClick() {
    fun((prev) => (prev ? false : true));
  }
  return (
    <>
      <div className="box" onClick={handleClick}>
        {state ? "hide" : "show"}
      </div>
      {state ? (
        <>
          {" "}
          <Header title="Gallery" />
          <div className="container">
            <ImagesSet />
          </div>
        </>
      ) : null}
    </>
  );
}
