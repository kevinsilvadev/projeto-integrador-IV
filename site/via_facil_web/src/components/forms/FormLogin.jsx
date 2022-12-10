import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button";
import InputText from "../input";
import "./Form.css";
import AuthService from "../../services/auth.service";

const FormLogin = ({ title, body }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const form = useRef();
  const checkBtn = useRef();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    if (cpf == "" || senha == "") {
      alert("Preencha os campos!!");
    } else {
      AuthService.login(cpf, senha).then(
        () => {
          navigate("/home-user");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          if (error.response.data.message) {
            alert("Usuário e senha incorretos");
          }

          setLoading(false);
          setMessage(resMessage);
        }
      );
    }
  };

  return (
    <div className="card-container-glass">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="card-content-glass">
        <form onSubmit={handleLogin} ref={form} className="form-glass">
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
          <Button buttonStyle={FormLogin} onClick={handleLogin}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
