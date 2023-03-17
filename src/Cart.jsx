import React, { memo } from "react";

function Cart(props) {
  const { cartItems, totalPrice } = props;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button className="remove">-</button>{" "}
              <button className="add">+</button>
            </div>

            <div className="col-2 text-right">{item.quantity} x ${item.price}</div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default memo(Cart);
