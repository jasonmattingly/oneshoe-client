import React, { Component } from 'react';
import axiosAuthorized from '../axiosAuthorized';

class DoSomethingLoggedIn extends Component {
    componentDidMount() {
        axiosAuthorized.get('http://localhost:3005/secret_stuff')
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

export default DoSomethingLoggedIn;