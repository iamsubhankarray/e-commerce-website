import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProductDetails from './components/ProductDetails'
import { Provider } from 'react-redux'
import store from './redux/store'
import CartPage from './components/CartPage'


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
    path:"/cart",
    element:<CartPage/>
  },
  {
    path:"/ProductDetails",
    
    element:<ProductDetails/>
  },
])


function App() {
 

  return (
    <Provider store={store}>
    <div>
      <RouterProvider router={router}/>
  
    </div>
    </Provider>
  )
}

export default App
