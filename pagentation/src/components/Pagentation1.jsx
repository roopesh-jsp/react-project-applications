import ProductItem from "./productItem";

export default function Pagentation1({ data, pages, page, setPage, total }) {
  const dummy = [...Array(Math.floor(100 / pages))];
  function handleClick(x) {
    setPage(x);
  }
  function handleNxt() {
    if (page < dummy.length) {
      setPage((prev) => prev + 1);
    }
  }
  function handlePrev() {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }
  return (
    <>
      {" "}
      <div className="products">
        {data.map((el, idx) => (
          <ProductItem key={idx} data={el} />
        ))}
      </div>
      <div className="pagentaion">
        <button onClick={() => handlePrev()}>⬅️</button>
        {dummy.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx + 1)}
            className={idx + 1 === page ? "active" : ""}
          >
            {idx + 1}
          </button>
        ))}
        <button onClick={() => handleNxt()}>➡️</button>
      </div>
    </>
  );
}
