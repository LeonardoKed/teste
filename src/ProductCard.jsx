function ProductCard({ title, price, image }) {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    );
  }
  export default ProductCard;
  