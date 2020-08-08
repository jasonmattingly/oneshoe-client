import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {


    //Login sets a refresh token only
    // All post requests from a component check to see if state.whatever has an auth token, if not posts to refresh to get one
    // if refresh valid returns jwt token, stored in state memory
    // Failed posts hit refresh for another token and then fails for good if unsuccessful
    // 
    
    componentDidMount() {
        
        axios.post('http://localhost:3005/login', {email:"jas@aol.com", password: "hello"})
            .then(response => {
                this.authorizationToken = response.data.jwt;
                this.axiosAuthorized.defaults.headers.common['Authorization'] = `Bearer ${this.authorizationToken}`;
                //localStorage.setItem("authorizationToken", response.data.jwt);
            })
            .catch(error => {
                console.log(error);
            });
    }
  
    render() {
        return null;
    }
}

export default Login;
