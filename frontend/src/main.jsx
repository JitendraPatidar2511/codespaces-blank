import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DatacontextProvider from './context/Datacontext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/Layout.jsx'

import { Home } from './components/Home.jsx'
import { Login } from './components/Login.jsx'
import { Profile } from './components/Profile.jsx'
import { Singup } from './components/Singup.jsx'
import { Protected } from './components/Protected.jsx'


const router=createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,

    
   children:[
    {
      path: "/",
      element :<Home></Home>
    },
    {
      path: "/*",
      element :<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/singup",
      element:<Singup></Singup>
    },
    {
      path:"/profile",
      element:<Protected Componet={Profile}></Protected>
    },
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <DatacontextProvider>
  <RouterProvider router={router}>
    <App></App>
  </RouterProvider>
  </DatacontextProvider>,
)
