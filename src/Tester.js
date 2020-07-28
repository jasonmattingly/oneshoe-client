import React, { Component } from 'react';
import axios from 'axios';

class Tester extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://localhost:3005/test')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

  
    render() {
        return <h1>Working</h1>
    }
}

export default Tester;
