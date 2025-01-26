import React, { useContext } from "react";

import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { UserContext } from "../App";
import "../../utilities.css";
import "./Login.css"

const Login = () => {
    const { userId, handleLogin, handleLogout } = useContext(UserContext);

    return (
    <>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin className = 'google-login' onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
    </>
    )
}

export default Login