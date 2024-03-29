import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import SingleProduct from './pages/SingleProduct.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
 {  path: '/',
    element: <Home/>
  },
  { path: '/shop',
    element: <Shop/>},
  { path: '/shop/:id',
    element: <SingleProduct/>},
]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
