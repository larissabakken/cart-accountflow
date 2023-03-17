import React, { useState, useEffect, useCallback, useMemo } from "react";
import ListProducts from "./ListProducts";
import Cart from "./Cart";
import { addToCart, calculateTotalPrice } from "./utils";

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

  const handleAddToCart = useCallback(
    (product) => {
      setCartItems((prevCartItems) => addToCart(prevCartItems, product));
    },
    [setCartItems]
  );
  const totalPrice = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);
  return (
    <div className="App">
      <div className="col">
        <ListProducts products={products} addToCart={handleAddToCart} />
        <Cart cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}

export default App;
