import { useState } from "react";
import { Button } from "../button";
import InputText from "../input";
import "./Form.css";
import api from "../../services/api"

const FormSignUp = ({ title, body }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");


  const click = () => {
    api
      .post("api/auth/signup", {
        cpf: cpf,
        name: nome,
        email: email,
        senha: senha,
      })
      .then((response) => console.log(response.data))
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
            label="Nome:"
            placeholder="Nome"
            valor={nome}
            type={"text"}
            aoAlterado={(valorNome) => setNome(valorNome)}
          />
          <InputText
            obrigatorio={true}
            label="E-mail:"
            placeholder="E-mail"
            valor={email}
            type={"text"}
            aoAlterado={(valorEmail) => setEmail(valorEmail)}
          />
          <InputText
            obrigatorio={true}
            label="Senha:"
            placeholder="Senha"
            valor={senha}
            type={"password"}
            aoAlterado={(valorSenha) => setSenha(valorSenha)}
          />
          <Button onClick={click} buttonStyle={FormSignUp}>
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
