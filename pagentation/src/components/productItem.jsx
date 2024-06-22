export default function ProductItem({ data }) {
  return (
    <div className="product">
      <img src={data.thumbnail} alt="" />
      <div className="product_title">
        <h2>{data.title}</h2>
        <p>{data.rating} ⭐</p>
      </div>
      <h3>{data.price} /-</h3>
      <button>add to cart</button>
    </div>
  );
}
