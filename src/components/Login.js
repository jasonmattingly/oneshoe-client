import React, { Component } from 'react';
import { axiosAuthorized } from '../axiosAuthorized';

class Login extends Component {

    logIn() {
        axiosAuthorized.post('http://localhost:3005/login', {email:"jas@aol.com", password: "hello"})
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                // handle unsuccesful login, probably a flash and a redirect to login form?
                console.log(error);
            });
    }
    componentDidMount() {
        this.logIn();
    }
  
    render() {
        return null;
    }
}

export default Login;
