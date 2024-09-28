import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
  const location= useLocation()
  
  return (
    <div className=' justify-center items-center w-1/2'>
      <h1>{location.state.title}</h1>
      <img
      src={location.state.image}/>
      <h5>{location.state.description}</h5>

    </div>
  )
}

export default ProductDetails