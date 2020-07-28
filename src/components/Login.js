import React, { Component } from 'react';
import axiosAuthorized from '../axiosAuthorized';

class Login extends Component {
    componentDidMount() {
        axiosAuthorized.post('http://localhost:3005/login', {email:"jas@aol.com", password: "hello"})
            .then(response => {
                localStorage.setItem("authorizationToken", response.data.jwt);
            })
            .catch(error => {
                console.log(error);
            });
    }
  
    render() {
        return null
    }
}

export default Login;
