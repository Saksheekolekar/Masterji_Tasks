import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import OTPForm from './Components/OTPForm.jsx'
import Batches from './Components/Batches.jsx'
import Home from './Components/Home.jsx'
import Layout from './Layout.jsx'
import './index.css' 
 
const router=createBrowserRouter([
  { path:'/',
   element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/> 
      },
      {
        path:'/CourseList',
        element:<App/> 
      },
      {
        path:'/OTPForm',
        element:<OTPForm/> 
      },
      {
        path:'/Batches',
        element:<Batches/> 
      }
    ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
