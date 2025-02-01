import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import LoginPage from "./components/pages/LoginPage";
import Rides from "./components/pages/Rides";
import MyRides from "./components/pages/MyRides";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "441445026368-oqrjgh67845s1rajt0n00o1a22ga86ko.apps.googleusercontent.com";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<LoginPage />}/>
      <Route path='/home' element={<Rides />}/>
      <Route path='/myrides' element={<MyRides />}/>
      <Route path='/profile' element={<Profile/>}/>
    </Route>
  )
)

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
