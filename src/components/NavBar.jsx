import React from 'react'

const NavBar = () => {
  return (
    <div>
      <navbar className=''>
        <ul className='flex justify-between bg-orange-500 w-screen h-20 text-2xl text-white items-center px-10 font-bold'>
          <li>home</li>
          <li>category</li>
          <li></li>
          <li>  about</li>
          <li>search
            <input/>

          </li>
        </ul>
      </navbar>
 
</div>


  )
}

export default NavBar