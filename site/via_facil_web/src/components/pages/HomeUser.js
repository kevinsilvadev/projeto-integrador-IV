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
        <CardHomeUser title="Solicitações Recentes" />
        <Footer />
      </div>
    </>
  );
}

export default HomeUser;
