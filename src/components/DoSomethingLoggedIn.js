import React, { Component } from 'react';
import axios from 'axios';

class DoSomethingLoggedIn extends Component {

    visitSecretStuff = () => {
        axios.get('http://localhost:3005/secret_stuff', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.visitSecretStuff();
    }
    render () {
        return null;
    }
}

export default DoSomethingLoggedIn;