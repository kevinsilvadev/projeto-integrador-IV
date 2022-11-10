import { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import InputText from "../input";
import "./Form.css";
import api from "../../services/api";

const FormLogin = ({ title, body }) => {


  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const click = () => {
    api
      .post("/signin", {
        cpf: cpf,
        senha: senha,
      }).then((response) => {
        console.log(response.data)
      })

      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  };


  return (
    <div className="card-container-glass">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="card-content-glass">
        <form className="form-glass">
          <h2 className="title-glass">{title}</h2>
          <p>{body}</p>
          <InputText
            obrigatorio={true}
            label="CPF:"
            placeholder="CPF"
            valor={cpf}
            type={"text"}
            aoAlterado={(valorCpf) => setCpf(valorCpf)}
          />
          <InputText
            obrigatorio={true}
            label="Senha:"
            placeholder="Password"
            valor={senha}
            type={"password"}
            aoAlterado={(valorSenha) => setSenha(valorSenha)}
          />
          <Button buttonStyle={FormLogin} onClick={click}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
