import axios from 'axios';

const axiosAuthorized = axios.create();

axiosAuthorized.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default axiosAuthorized;
