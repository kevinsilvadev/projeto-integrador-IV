import axios from 'axios';

const aux = localStorage.getItem('user');

const api = axios.create({
    baseURL: "http://localhost:8080/",
    responseType: 'json',
    dataType: 'jsonp',
});

export default api;