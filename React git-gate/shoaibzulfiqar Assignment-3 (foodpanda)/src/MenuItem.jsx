function MenuItem({ name, price, isSpicy }) {
  return (
    <div
      className={`p-3 mb-2 border rounded ${
        isSpicy ? "bg-danger text-white" : "bg-light"
      }`}
    >
      <h5>
        {name} {isSpicy ? "🔥" : ""}
      </h5>
      <p>Price: Rs {price}</p>
    </div>
  );
}

export default MenuItem;