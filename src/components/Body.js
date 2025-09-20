import React from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter} from 'react-router-dom'
import Browse from './Browse'
import LoginForm from './LoginForm'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser} from '../utils/store/userSlice'

const Body = () => {
  const displatch = useDispatch();
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

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email, displayName} = user;
          displatch(addUser({uid:uid, email:email, displayName:displayName }))
          
        } else {
          // User is signed out
         
        }
      });
    })


  return (
    <>
   
   <RouterProvider router={appRouter} />
    </>
  )
}

export default Body