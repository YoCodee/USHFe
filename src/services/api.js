import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ush-frontend-challenge.onrender.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
