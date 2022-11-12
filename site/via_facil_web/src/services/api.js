import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/",
    responseType: 'json',
    withCredentials: true
});

export default api;