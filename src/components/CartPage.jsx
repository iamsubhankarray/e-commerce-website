import React from 'react'
import NavBar from './NavBar'
import { useSelector } from 'react-redux'

function CartPage() {
  const cartItems = useSelector(state=>state.cart)
  console.log(cartItems.title);
  
  return (
    <>
    <NavBar/>
    <div className='bg-slate-600 w-screen h-screen  flex justify-center items-center'>
      <div className='bg-slate-200 w-3/4 h-3/4 flex justify-center rounded-2xl'>
        <h2>your Cart</h2>
        {
          // cartItems.map((item,index)=>console.log(item))
          
          // <CartItems item={item} index={index}/>)
        }
      </div>

    </div>
    </>
  )
}

export default CartPage