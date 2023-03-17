import React from "react";
import Product from "./Product";

export default function Main(props) {
  const products = props.data;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
      {products?.map((item) => {
        return <Product key={item.id} product={item} addToCart={props.addToCart}/>
      })} 
       </div>
       
      
    </main>
  );
}