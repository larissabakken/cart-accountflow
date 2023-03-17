import React, { useState, useEffect } from "react";
import ListProducts from "./ListProducts";
import Cart from "./Cart";

// TODO:
// 1. Fetch products from https://api.escuelajs.co/api/v1/products?offset=0&limit=9
// 2. Display products inside Main component with ability to add to cart
// 3. Implement a simple Cart where you can see all added products
//    with quantity and price per item, total price, controls to
//    change quantity
// 4. Optimize everything to avoid extra rerenders

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        " https://api.escuelajs.co/api/v1/products?offset=0&limit=9"
      );
      const jsonData = await response.json();
      setProducts(jsonData);
    }
    fetchData();
  }, []);

  const addToCart = (product) => {
    const exsistingItem = cartItems.find(
      (element) => element.id === product.id
    );
    console.log(exsistingItem);
    if (!exsistingItem) {
      console.log(...cartItems, product)
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className="App">
      <div className="col">
        <ListProducts data={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
