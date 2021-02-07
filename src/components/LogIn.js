import React, { Component } from 'react';
import axios from 'axios';
class LogIn extends Component {
  componentDidMount() {
    axios.post('http://localhost:3005/login', {email:'jas@aol.com', password: 'hello'})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render () {
    return null;
  }
}
export default LogIn;