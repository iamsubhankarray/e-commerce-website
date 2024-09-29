import React, { useState } from "react";
import NavBar from "./NavBar";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

function CartPage() {
  const cartItem = useSelector((state) => state.cart);
  // console.log(cartItem);

  return (
    <>
    <NavBar/>
    <div className="w-screen h-screen bg-slate-500 flex flex-col justify-center items-center">
      <div className="w-6/12 h-5/6 bg-slate-100   justify-center items-center">
        {cartItem.map((item, index) => {
          return (
            <>
              <img src={item.image} className="w-2/12" />
              <h1>{item.title.substring(0, 20)}</h1>
              <h2>{item.description.substring(0, 100)}</h2>
              <h1>{item.price}</h1>
            </>
          );
        })}
      </div>
    </div>
        </>
  );
}

export default CartPage;
