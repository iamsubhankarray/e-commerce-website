import React from 'react'

function CartItems({item,index}) {
    console.log(item);
    
  return (
    <div>{item.title}</div>
  )
}

export default CartItems