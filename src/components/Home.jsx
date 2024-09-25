import axios from 'axios'
import React from 'react'

const Home = () => {
    const data =axios.get('https://fakestoreapi.com/products/')
    .then(res=>console.log(res.data))
  return (
    <>
    <div>Home</div>
    <div>
        {
            data.map(item=>{
                
                    <p>{item.title}</p>
               
            })
        }
    </div>
        </>
  )
}

export default Home