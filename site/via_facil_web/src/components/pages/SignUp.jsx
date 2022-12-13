import "../../App.css";
import Footer from "../footer";
import FormSignUp from "../forms/FormSignUp";
import NavBar from "../navBar";

export default function SignUp() {
  return (
    <>
    <NavBar/>
    <div className="section_form_login_SignUp">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <FormSignUp title="Cadastre-se aqui!" />
    </div>
    <Footer/>
    </>
  );
}
