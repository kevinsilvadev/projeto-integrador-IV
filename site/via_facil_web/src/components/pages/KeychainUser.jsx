import { useEffect, useState } from "react";
import "../../App.css";
import Keychain from "../keychain";
import VerticalNavBar from "../verticalNavBar";
import CustomerService from "../../services/customer.service"
import AuthService from "../../services/auth.service";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const [content, setContent] = useState("");

  const customer = AuthService.getCurrentUser()

  useEffect(() => {
    CustomerService.getAll().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="HomeUser_VerticalNavBar">
        <VerticalNavBar onClick={handleClick} />
      </div>
      <div className="section_form_login_SignUp">
        <Keychain
          name={customer.name}
          imageUrl={customer.urlPhoto}
        />
      </div>
    </div>
  );
}

export default HomeUser;
