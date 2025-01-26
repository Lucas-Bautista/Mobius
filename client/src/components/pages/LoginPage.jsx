import React, { useEffect, useContext } from "react";

import "../../utilities.css";
import "./LoginPage.css";
import NavBar from "../modules/NavBar";
import Login from "../modules/Login"

const LoginPage = () => {
  
  useEffect(() => {
    // Get references to the elements
    const typedParagraph = document.querySelector('.typed-paragraph');
    const googleLoginButton = document.querySelector('.google-login');

    // Check if both elements exist before trying to add the event listener
    if (typedParagraph && googleLoginButton) {
        // Initially hide the Google login button
        googleLoginButton.style.display = 'none';

        // Add an event listener to detect when the typing animation ends
        typedParagraph.addEventListener('animationend', () => {
            // Show the Google login button after the animation ends
            setTimeout(() => {
              googleLoginButton.style.display = 'block';
              googleLoginButton.classList.add('fade-in');
              }, 500);
        });

        // Cleanup the event listener when the component unmounts
        return () => {
            typedParagraph.removeEventListener('animationend', () => {
                googleLoginButton.style.display = 'block';
            });
        };
    }

  }, []);
  
  return (
    <>
    <div className = "login-page">
      <div className="login-navbar"> 
        <div className="login-name-navbar"> Mobius </div>
      </div>
      <div className = 'body-login'>
        {/* Include box for typed words */}
        <div className='text-container'>
          <div className = "typed-paragraph">
            Get where you need to go
            at a fraction of the cost.
          </div>
        </div>
        <div className = "google-login" style= {{display: 'none'}} >
            <Login/>
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default LoginPage;
