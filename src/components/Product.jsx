import React from 'react'

const Product = ({item}) => {
  return (
    <div className="bg-slate-800 w-screen   rounded-xl ">
    {item.map((item, index) => (
      <div
        key={index}
        className="
        bg-slate-500
        rounded-lg
              
        
           w-60
            py-10 my-20"
      >
        <div>
          <img src={item.image} className="w-28" />
        </div>
        <div className="text-lg">{item.title}</div>
        <div>{item.description.substring(0, 50) + "..."}</div>
        <div>${item.price}</div>
      </div>
    ))}
  </div>
  )
}

export default Product