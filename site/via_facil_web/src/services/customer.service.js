import axios from "axios";
import accessToken from "./auth-header"

const API_URL = "http://localhost:8080/api/customer/";

const getAll = () => {
  return axios.get(API_URL + "all");
};

const getCompanies = (cpf) => {
  return axios.get(API_URL + `company?cpf=${cpf}`)
};



const CompanyService = {
    getAll,
    getCompanies
}

export default CompanyService;