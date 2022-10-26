import { useState } from "react";
import "../../App.css";
import Keychain from "../keychain";
import VerticalNavBar from "../verticalNavBar";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <div className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="HomeUser_VerticalNavBar">
        <VerticalNavBar onClick={handleClick} />
      </div>
      <div className="section_form_login_SignUp">
        <Keychain
          name="Donald Flintch Cortez"
          imageUrl="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
}

export default HomeUser;
