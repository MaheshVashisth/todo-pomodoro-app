import React, { useState } from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from 'react-router-dom';
const Navbar = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
  const [showPomodoroTimer, setShowPomodoroTimer] = useState(false);

   const { loginWithRedirect } = useAuth0();
   const { logout, isAuthenticated } = useAuth0();
 
  const handlePomodoroClick = () => {
    setShowPomodoroTimer(true);
    setIsNavOpen(false);
  };
 
  return (
    <>
    <nav class="navbar">
    {/* <!-- LOGO --> */}
    <div class="logo">To-Do-Pomodoro-App</div>

    {/* <!-- NAVIGATION MENU --> */}
    <ul class="nav-links">

      {/* <!-- USING CHECKBOX HACK --> */}
      <input type="checkbox" id="checkbox_toggle"   />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">

        <li><a href="/">Home</a></li>
        {/* <li><a href="/" >Pomodoro-Timer</a></li> */}
          
        <Link to="/analyticschart" ><li class="services">
          Analytics
        </li></Link>

        <Link to="/about" ><li><a href="/">About-app</a>
        </li></Link>
        {
          isAuthenticated?<li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></li>:   <li> <button onClick={() => loginWithRedirect()}>Log In</button></li>  
        }
       
            
      </div>
    </ul>
    
  </nav>
  </>
  );
};
export default Navbar;

