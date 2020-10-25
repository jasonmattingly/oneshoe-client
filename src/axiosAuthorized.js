import axios from 'axios';
axios.defaults.withCredentials = true;
export const axiosAuthorized = axios.create({
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
    }
});
