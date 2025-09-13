import React from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import LoginForm from './LoginForm'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/login",
            element:<LoginForm />
        },
        {
            path:"/",
            element:<Browse />
        }
    ])
  return (
    <>
   
   <RouterProvider router={appRouter} />
    </>
  )
}

export default Body