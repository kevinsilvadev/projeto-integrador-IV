import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import Footer from "../footer";
import CardHomeUser from "../cardHomeUser";

function HomeUser() {
  return (
    <>
      <div className="HomeUser_content">
        <VerticalNavBar />
        <CardHomeUser title="Solicitações Recentes" />
        <Footer />
      </div>
    </>
  );
}

export default HomeUser;
