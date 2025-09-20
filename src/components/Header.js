import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const userObj = useSelector((store) => store.user)
  const user = auth.currentUser;
const navigate = useNavigate();
  const onHandleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
    <header className="header-wrap">
        <img src="/assets/images/netflix-logo.png" alt="Netflix Logo" className="netflix-logo" />
       <div className="header-right-wrap">
       <div className="profile-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>
        <p className="user-email">{userObj?.displayName}</p>
        </div>
       {user && <button class="btn bg-dark text-white logout-btn" onClick={() => onHandleLogout()}>Logout</button>}
       </div>
    </header>
    </>
  )
}

export default Header