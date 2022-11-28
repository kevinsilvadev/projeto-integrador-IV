import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const getBill = (cpf,cnpj) =>{
    return axios.post(API_URL + `generate?cpf=${cpf}&cnpj=${cnpj}`);
};

const BillService = {
    getBill
}

export default BillService;