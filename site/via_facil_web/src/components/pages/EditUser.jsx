import { useState } from "react";
import "../../App.css";
import FormEditUser from "../forms/FormEditUser";

import VerticalNavBar from "../verticalNavBar";

function EditUser() {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <div
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <video src="/videos/video-3.mp4" autoPlay loop muted />

      <div className="HomeUser_VerticalNavBar">
        <VerticalNavBar onClick={handleClick} />
      </div>
      <div className="section_form_login_SignUp">
        <div className="form-edit-user">
          <h1>Editar Usuário</h1>
          <FormEditUser />
        </div>
      </div>
    </div>
  );
}

export default EditUser;
