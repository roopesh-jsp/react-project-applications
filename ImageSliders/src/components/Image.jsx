export default function Image({ img, name }) {
  return (
    <div className="image">
      <img src={img} />
      <p>{name}</p>
    </div>
  );
}
