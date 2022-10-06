import "../../App.css";
import FormSignUp from "../forms/FormSignUp";
import NavBar from "../navBar";

export default function SignUp() {
  return (
    <>
    <NavBar/>
    <div className="section-form">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <FormSignUp title="Cadastre-se aqui!" />
    </div>
    </>
  );
}
