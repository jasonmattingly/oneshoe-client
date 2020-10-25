import React, {useState} from 'react';
import LogInUser from './LogInUser';

function LogInForm() {
    const [state, setState] = useState({
        emailAddress: "",
        password: ""
    })

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event) {
        LogInUser({emailAddress: state.emailAddress, password: state.password});
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="LogIn">
            { /*TODO Form classname should be passed in from the calling component */ }
            <input type="text" name="emailAddress" value={state.emailAddress} placeholder="Email Address" onChange={handleChange}/>
            <input type="text" name="password" value={state.password} placeholder="Password" onChange={handleChange}/>
            { /*Hidden submit required for submit on 'Enter' */ }
            <input type="submit" style={{display: 'none'}}/> 
        </form>
    )
}

export default LogInForm;
