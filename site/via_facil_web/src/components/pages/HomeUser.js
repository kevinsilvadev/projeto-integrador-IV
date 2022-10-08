import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import Footer from "../footer";
import Card from "../card";
import CardHomeUser from "../cardHomeUser";

function HomeUser() {
  return (
    <>
      <VerticalNavBar />
      <div className="HomeUser_content">
        <Card />
        <CardHomeUser title="Solicitações Recentes" body={"cu"} />
        <h1>Conteúdo</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          libero sunt nemo illum ab ad aliquam, expedita voluptates rerum
          delectus. Minus, earum numquam? Consectetur sunt, recusandae sapiente
          alias minus excepturi.
        </p>
        <Footer />
      </div>
    </>
  );
}

export default HomeUser;
