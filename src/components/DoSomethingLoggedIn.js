import React, { Component } from 'react';

import { axiosAuthorized } from '../axiosAuthorized';

class DoSomethingLoggedIn extends Component {

    visitSecretStuff = () => {
        axiosAuthorized.get('http://localhost:3005/secret_stuff',{withCredentials: true})
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