import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useState } from "react";
import ListBill from "../listBill";

function ViewBill() {
  
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <div
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <div className="homeUser-header">
        <h1>Suas Contas</h1>
      </div>
      <div className="homeUser-row">
        <VerticalNavBar onClick={handleClick} />
        <div className="col-12 col-s-12">
          <div className="homeUser-recentOrder">
            <ListBill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBill;
