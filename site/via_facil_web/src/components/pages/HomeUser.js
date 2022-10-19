import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import CardHomeUser from "../cardHomeUser";
import Overview from "../overview";

function HomeUser() {
  return (
    <>
      <div className="HomeUser_content">
        <div className="HomeUser_VerticalNavBar">
          <VerticalNavBar />
        </div>
        <div className="Interativo">
          <div className="HomeUser_Overview">
            <h2>Overview</h2>
            <Overview title="Suas Empresas Conectadas" />
          </div>
          <div className="HomeUser_SolicitacoesRecentes">
            <div className="homeUser_UltimosAcessos">
              <CardHomeUser title="Ultimos Acessos" />
            </div>
            <CardHomeUser title="Solicitações Recentes" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
