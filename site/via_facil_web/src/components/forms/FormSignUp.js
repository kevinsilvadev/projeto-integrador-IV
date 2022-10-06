import { useState } from "react";
import { Button } from "../button";
import InputText from "../input";
import "./Form.css";

const FormSignUp = ({ title, body }) => {

  const [nome, setNome] = useState("");

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
            label="Nome:"
            placeholder="Username"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <InputText
            obrigatorio={true}
            label="Senha:"
            placeholder="Password"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <InputText
            obrigatorio={true}
            label="CPF:"
            placeholder="CPF"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <Button buttonStyle={FormSignUp}>Cadastrar</Button>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
