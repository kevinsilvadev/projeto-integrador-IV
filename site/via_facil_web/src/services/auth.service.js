//export const isAuthenticated = () => true;

import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (cpf, name, email, senha) => {
  return axios.post(API_URL + "signup", {
    cpf,
    name,
    email,
    senha,
  });
};

const getCompaniesByQrcode = (qrcode) => {
  return axios.get(API_URL + `qrcode?qrcode=${qrcode}`)
}

const login = (cpf, senha) => {
  return axios
    .post(API_URL + "signin", {
      cpf,
      senha,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getCompaniesByQrcode,
}

export default AuthService;


