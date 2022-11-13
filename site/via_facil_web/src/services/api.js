import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/",
    responseType: 'json',
    dataType: 'jsonp',
});

export default api;