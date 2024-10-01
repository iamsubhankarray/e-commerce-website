import React, { useState } from "react";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_cart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const totalAmount= cartItem.reduce((a,b)=>a+b.price,0)

  return (
    <>
      <div className="w-screen  flex flex-col justify-center items-center">
        <div className="  justify-center items-center">
          {cartItem.length>0?
            cartItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex  justify-center items-center" >
                  <img src={item.image} className="w-2/12" />
                  <div>

                  <h2 className="font-2xl">{item.title.substring(0, 50)}</h2>
                  <h2>{item.description.substring(0, 200)}</h2>
                  <h2 className="text-xl font-bold">${item.price}</h2>
                  <div className="flex justify-end bg-slate-100">
                  <button
                    className="bg-green-600 text-white h-10 "
                    onClick={() => dispatch(remove_from_cart(item))}
                    >

                    <h1 className="font-2xl">Remove from cart</h1>
                  </button>
                      </div>
                    </div>
                </div>
              );
            }):null}
        </div>
        <div >total amount ${totalAmount}</div>
        <button onClick={()=>navigate('checkOut')}className="bg-yellow-600  w-20 hover: bg-green-600">
          check-out
        </button>
      </div>
    </>
  );
}

export default CartPage;
