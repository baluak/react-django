import axios from "axios";
import { ACCESS_TOKEN } from "./constants"; 

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);  // Fetch token from localStorage
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  // Set Authorization header if token exists
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api
