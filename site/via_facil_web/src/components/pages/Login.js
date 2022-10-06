import "../../App.css";
import FormLogin from "../forms/FormLogin";

export default function Login() {
  return (
    <div className="section-form">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <FormLogin title="Entre e Acesse sua Conta!" />
    </div>
  );
}
