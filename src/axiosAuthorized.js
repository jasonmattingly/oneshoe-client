import axios from 'axios';

const axiosAuthorized = (authorizationToken) => {
    axios.create({withCredentials: true});
    
    axiosAuthorized.defaults.headers.common['Authorization'] = `Bearer ${authorizationToken}`;
    axiosAuthorized.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    axiosAuthorized.defaults.headers.common['Content-Type'] = 'application/json';

    // axios.interceptors.response.use(null, (error) => {
    //     if (error.config && error.response && error.response.status === 401) {
    //       return updateToken().then((token) => {
    //         error.config.headers.xxxx <= set the token
    //         return axios.request(config);
    //       });
    //     }
      
    //     return Promise.reject(error);
    //   });
} 

export default axiosAuthorized;


// If no token || token is expired, call refresh
//   Set token if you got one (succeed if you don't)
//
// Refresh should clear JWT in state, check cookies for refresh token.
// If refresh token, ask for new jwt
// asking for new jwt should return new jwt and new refresh token both with new expirys
// If no refresh token handle unauthorized, redirect to login or whatever
// const authorizationToken = localStorage.getItem("authorizationToken");




