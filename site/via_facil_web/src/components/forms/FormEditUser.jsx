import { useState } from "react";
import { Button } from "../button";
import InputText from "../input";
import "./Form.css";
import AuthService from "../../services/auth.service";
import api from "../../services/api"

const FormEditUser = ({ title, body }) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");


  var loadFile = function (event) {
    var image = document.getElementById("output");
    return image.src = URL.createObjectURL(event.target.files[0]);
  
  };
  
  

const customer = AuthService.getCurrentUser();
console.log(customer)

const click = (e) => {

  e.preventDefault();

  api
    .put(`api/customer/cpf?cpf=${customer.username}`, {
      urlPhoto: loadFile,
      name: nome,
      email: email,
      senha: senha
    })
    .then((response) => console.log(response.data))
    .catch((err) => {
     
  })
}


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

          <div className="profile-pic">
            <label className="-label" htmlFor="file">
              <span>
                <i class="fas fa-camera"></i>
              </span>
              <span>Change Image</span>
            </label>
            <input id="file" type="file" onChange={loadFile} />
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              id="output"
              width="200"
            />
          </div>
          <InputText
            obrigatorio={true}
            label="Nome:"
            placeholder="Username"
            valor={nome}
            type={"text"}
            aoAlterado={(valorNome) => setNome(valorNome)}
          />
          <InputText
            obrigatorio={true}
            label="E-mail:"
            placeholder="E-mail"
            valor={email}
            type={"email"}
            aoAlterado={(valorEmail) => setEmail(valorEmail)}
          />
          <InputText
            obrigatorio={true}
            label="Senha:"
            placeholder="Password"
            valor={senha}
            type={"password"}
            aoAlterado={(valorSenha) => setSenha(valorSenha)}
          />
          <Button onClick={click} buttonStyle={FormEditUser}>
            Atualizar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormEditUser;
