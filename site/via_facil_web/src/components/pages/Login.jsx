import "../../App.css";
import Footer from "../footer";
import FormLogin from "../forms/FormLogin";
import NavBar from "../navBar";

export default function Login() {
  return (
    <>
    <NavBar/>
    <div className="section_form_login_SignUp">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <FormLogin title="Entre e Acesse sua Conta!" />
    </div>
    <Footer/>
    </>
  );
}
