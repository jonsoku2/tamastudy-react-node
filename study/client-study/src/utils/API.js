import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001',
});

API.interceptors.request.use(
  (config) => {
    if (!config.headers.authorization) {
      const token = window.sessionStorage.getItem('token');

      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.sessionStorage.removeItem('token');
    }
    return Promise.reject(error);
  },
);

export default API;
