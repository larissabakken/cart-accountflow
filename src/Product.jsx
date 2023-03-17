import React from "react";

export default function Product(props) {
  const { product } = props;

  return (
    <div>
      <img className="small" src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category.name}</p>
      <div>${product.price}</div>
      <div>
        <button onClick={() => props.addToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
