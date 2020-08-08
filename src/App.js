import React from 'react';
import Login from './components/Login.js';
import DoSomethingLoggedIn from './components/DoSomethingLoggedIn';
import axios from 'axios';

const axiosAuthorized = axios.create({withCredentials: true});

// If no token || token is expired, call refresh
//   Set token if you got one (succeed if you don't)
//
// Refresh should clear JWT in state, check cookies for refresh token.
// If refresh token, ask for new jwt
// asking for new jwt should return new jwt and new refresh token both with new expirys
// If no refresh token handle unauthorized, redirect to login or whatever
// const authorizationToken = localStorage.getItem("authorizationToken");


const authorizationToken = '';
axiosAuthorized.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
axiosAuthorized.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
axiosAuthorized.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <Login />
      <DoSomethingLoggedIn />
    </div>
  );
}

export default App;
