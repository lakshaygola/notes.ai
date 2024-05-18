import axios from "axios";
import { ACCESS_TOKEN } from "./constants.js"


const api = axios.create({
    // Setting up the api object

    baseURL: process.env.REACT_APP_BACKEND_URL,
});


api.interceptors.request.use(
    // Setting up the headers for the request

    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default api;