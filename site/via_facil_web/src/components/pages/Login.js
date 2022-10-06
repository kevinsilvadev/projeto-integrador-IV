import "../../App.css";
import FormLogin from "../forms/FormLogin";
import NavBar from "../navBar";

export default function Login() {
  return (
    <>
    <NavBar/>
    <div className="section-form">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <FormLogin title="Entre e Acesse sua Conta!" />
    </div>
    </>
  );
}
