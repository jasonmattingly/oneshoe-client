import { axiosAuthorized } from '../axiosAuthorized';
//jas@aol.com hello
function logInUser({ emailAddress, password}) {
    axiosAuthorized.post('http://localhost:3005/login', {email: emailAddress, password: password})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            // handle unsuccesful login, probably a flash and a redirect to login form?
            console.log(error);
        });
}

export default logInUser;
