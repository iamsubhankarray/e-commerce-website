import React, { useState } from "react";
import NavBar from "./NavBar";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

function CartPage() {
  const cartItem = useSelector((state) => state.cart);
  // console.log(cartItem);

  return (
    <>
    
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="  justify-center items-center">
        {cartItem.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center">
              <img src={item.image} className="w-2/12" />
              <h1>{item.title.substring(0, 20)}</h1>
              <h2>{item.description.substring(0, 500)}</h2>
              <h1>{item.price}</h1>
            </div>
          );
        })}
      </div>
    </div>
        </>
  );
}

export default CartPage;
