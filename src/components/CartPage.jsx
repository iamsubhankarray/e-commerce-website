import React, { useState } from "react";
import NavBar from "./NavBar";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_cart } from "../redux/cartSlice";

function CartPage() {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="  justify-center items-center">
          {cartItem.length>0?
            cartItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <img src={item.image} className="w-2/12" />
                  <h1>{item.title.substring(0, 20)}</h1>
                  <h2>{item.description.substring(0, 200)}</h2>
                  <h1>{item.price}</h1>
                  <button
                    className="bg-green-600"
                    onClick={() => dispatch(remove_from_cart(item))}
                  >
                    Remove from cart
                  </button>
                </div>
              );
            }):null}
        </div>
      </div>
    </>
  );
}

export default CartPage;
