import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Register from './components/Register'


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
    element:<Register/>
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
