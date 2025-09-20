import React, { useState, useRef } from 'react'
import Header from './Header';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { validateData } from '../utils/validate';
import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser} from '../utils/store/userSlice'
import './style.css';

  const LoginForm = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignInForm, setIsSIgnInForm] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);


  let email = useRef(null);
  let password = useRef(null);
  let username = useRef(null);


const onHandleSignIn = () =>{
  setIsSIgnInForm(!isSignInForm)
}
const onHandleUserInputs = () => {
  const userInputs = {
    username:username.current?.value,
    email:email.current?.value,
    password:password.current.value
  }
  let message = validateData(userInputs, isSignInForm);
  setErrorMsg(message);
  if(message) return;

  if(!isSignInForm){
    //signUp logic
    createUserWithEmailAndPassword(auth, userInputs.email, userInputs.password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: username.current?.value})
        .then(() => {
          const {uid,email, displayName} = auth.currentUser
          dispatch(addUser({uid:uid, email:email, displayName:displayName }))
          navigate("/");
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMsg(errorCode+ "-" +errorMessage);
    });
  }else{
    signInWithEmailAndPassword(auth, userInputs.email, userInputs.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorMessage);
    console.log(errorCode+"-"+errorMessage);
  });
  }
}

  return (
    <>
      <Header />
    <div className="login-form-container">
        <form className="form-container rounded-2" onSubmit={(e) => e.preventDefault()}>
            <h3 className="h3-head mt-0 mb-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h3>

            <p className="text-danger text-center">{errormsg}</p>
           {!isSignInForm &&  <input type="text" ref={username} required placeholder="Enter Full Name" className="input-filed mb-3 d-inline-block w-100 p-2 rounded-2" />}

            <input type="text" ref={email} placeholder="Email Address" required className="input-filed mb-3 d-inline-block w-100 p-2 rounded-2" />

            <input type="password" ref={password} placeholder="Password" required className="input-filed d-inline-block mb-3 w-100 p-2 rounded-2" />

            <button onClick={() => onHandleUserInputs()} className="bg-danger text-white py-2 rounded-2 border-0 text-center d-inline-block mb-3 w-100">{isSignInForm ? "Sign In" : "Get Started"}</button>

            <p className="text-white">{isSignInForm ? "New to Netflix?" : "You have an Account Please"}
            <button onClick={()=> onHandleSignIn()} className="border-0 rounded-2 bg-transparent text-white text-decoration-underline" >{isSignInForm ? "Sign up now.": "Sign In now."}</button></p>
        </form>
    </div>
    </>
  )
}

export default LoginForm