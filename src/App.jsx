import React, { useState, useEffect, useCallback, useMemo } from "react";
import ListProducts from "./ListProducts";
import Cart from "./Cart";
import { addToCart, calculateTotalPrice } from "./utils";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "/products.json"
      );
      const jsonData = await response.json();
      console.log(jsonData);
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

  const handleAddItem = useCallback(
    (item) => {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    },
    [cartItems, setCartItems]
  );

  const handleRemoveItem = useCallback(
    (item) => {
      const updatedCartItems = cartItems
        .map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
      setCartItems(updatedCartItems);
    },
    [cartItems, setCartItems]
  );

  const totalPrice = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);

  return (
    <div className="App">
      <div className="col">
        <ListProducts products={products} addToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          totalPrice={totalPrice}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
        />
      </div>
    </div>
  );
}

export default App;
