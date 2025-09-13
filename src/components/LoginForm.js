import React from 'react'
import Header from './Header';
import './style.css';

const LoginForm = () => {
  return (
    <>
      <Header />
    <div class="login-form-container">
        <form className="form-container rounded-2">
            <h3 className="h3-head mt-0 mb-4 text-white">Sign In</h3>
            <div className="mb-3">
            <input type="text" placeholder="Email or mobile number" className="input-filed d-inline-block w-100 p-2 rounded-2" />
            </div>
            <div className="mb-3">
            <input type="password" placeholder="Password" className="input-filed d-inline-block w-100 p-2 rounded-2" />
            </div>
            <button className="bg-danger py-2 rounded-2 border-0 text-center d-inline-block mb-3 w-100">Sign In</button>
            <p className="text-white">New to Netflix?<button className="border-0 rounded-2" >Sign up now.</button></p>
        </form>
    </div>
    </>
  )
}

export default LoginForm