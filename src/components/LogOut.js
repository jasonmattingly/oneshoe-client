import React, { Component } from 'react';
import axios from 'axios';
class LogOut extends Component {
  componentDidMount() {
    axios.delete('http://localhost:3005/logout')
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
export default LogOut;