import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProductDetails from './components/ProductDetails'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path:"/ProductDetails",
    
    element:<ProductDetails/>
  },
])


function App() {
 

  return (
    <div>
      <RouterProvider router={router}/>
  
    </div>
  )
}

export default App
