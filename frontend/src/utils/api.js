import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your Express server port
});

export default axiosInstance;
