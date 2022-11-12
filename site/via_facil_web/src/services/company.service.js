import axios from "axios";
import accessToken from "./auth-header"

const API_URL = "http://localhost:8080/api/company/";

const getCompanies = () => {
  return axios.get(API_URL + "all");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const CompanyService = {
  getCompanies,
  getModeratorBoard,
  getAdminBoard,
}

export default CompanyService;