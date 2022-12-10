import userEvent from "@testing-library/user-event";
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";
const API = "http://localhost:8080/api/bill/";

const getBill = (cpf,cnpj) =>{
    return axios.post(
        API_URL + `generate?cpf=${cpf}&cnpj=${cnpj}`,
        {headers: {
            authHeader
        }});
};

const getRecentBills = (cpf) =>{
    const aux = JSON.parse(localStorage.getItem('user'));
    
    return axios.get(API + `recent?cpf=${cpf}`);
}

const BillService = {
    getBill,
    getRecentBills
}

export default BillService;