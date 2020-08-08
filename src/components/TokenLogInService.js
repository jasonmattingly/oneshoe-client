import React from 'react';
import axios from 'axios';

const TokenLogInService = () => {
    const [authorizationToken, setAuthorizationToken] = useState();

    // Posts user pass, receives httponly refresh token on success
    logIn() {
        axios.post('http://localhost:3005/login', {email:"jas@aol.com", password: "hello"})
            .catch(error => {
                // handle unsuccesful login, probably a flash and a redirect to login form?
                console.log(error);
            });
    }

    //hits /refresh receives short expiry jwt, sets local data to token value
    getAuthorizationToken() {
        axios.get('http://localhost:3005/refresh_token')
            .then(response => {
                setAuthorizationToken(response.data.jwt);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const axiosAuthorized = () => {
        const axiosAuthorizedInstance = axios.create({withCredentials: true});
        
        axiosAuthorizedInstance.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
        axiosAuthorizedInstance.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
        axiosAuthorizedInstance.defaults.headers.common['Content-Type'] = 'application/json';
    
        axiosAuthorizedInstance.interceptors.response.use(null, (error) => {
            if (error.config && error.response && error.response.status === 401) {
                //call get authorization token
                return updateToken().then((token) => {
                    // setAuthorizationToken(token)
                    //update this instance of axiosauthorized with the right token
                    error.config.headers.xxxx <= set the token
                    return axios.request(error.config);
                });
            }
            
            return Promise.reject(error);
        });

        return axiosAuthorizedInstance;
    } 
}

export default TokenLogInService;
