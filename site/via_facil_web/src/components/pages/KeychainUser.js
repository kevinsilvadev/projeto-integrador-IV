import "../../App.css";
import Keychain from "../keychain";
import VerticalNavBar from "../verticalNavBar";

function HomeUser() {
  return (
    <div className="keychain-content">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="HomeUser_VerticalNavBar">
        <VerticalNavBar/>
      </div>
      <div className="section_form_login_SignUp">
        <Keychain name="Donald Flintch Cortez" imageUrl="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
      </div>
    </div>
  );
}

export default HomeUser;
