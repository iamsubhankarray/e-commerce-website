import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const cartItems = useSelector((state)=>state.cart) 
  const navigate =useNavigate()
  const gotocart=()=>{
    navigate('cart')
  }
  return (
    <div>
        <ul className='flex justify-between bg-orange-500 w-screen h-20 text-2xl text-white items-center px-10 font-bold'>
          <li onClick={()=>navigate('/')}>home</li>
          <li>category</li>
          <li></li>
          <li>  about</li>
         
          <li  onClick={gotocart}>
            <div className='flex'>
            <FaCartArrowDown />

          <div className=' text-s font-thin'>{cartItems.length}</div>
            </div>
          </li>
        </ul>
 
</div>


  )
}

export default NavBar