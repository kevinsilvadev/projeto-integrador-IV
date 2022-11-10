import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import CalendarDate from "../calendar";
import { useState } from "react";
import Insights from "../insights";
import RecentOrder from "../recentOrder";

import CompanyBill from "../companyBill";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <div
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <div className="homeUser-header">
        <h1>Dashboard</h1>
      </div>

      <div className="homeUser-row">
        <VerticalNavBar onClick={handleClick} />
        <div className="col-9 col-s-12">
          <CalendarDate />
          <div className="grid-container">
            <Insights
              type={"sales"}
              title={"Total Sales"}
              percentage={"81"}
              value={"2500,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
            <Insights
              type={"expenses"}
              title={"Total Expenses"}
              percentage={"62"}
              value={"1200,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
            <Insights
              type={"income"}
              title={"Total Income"}
              percentage={"44"}
              value={"2250,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
          </div>
          <div className="homeUser-recentOrder">
            <RecentOrder />
          </div>
        </div>

        <div className="col-3 col-s-12">
          <div className="homeUser-aside">
            <CompanyBill img={"https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"} name="CPFL Energia"/>
          </div>
        </div>
      </div>

      <div className="homeUser-footer">
        <p>
          Resize the browser window to see how the content respond to the
          resizing.
        </p>
      </div>
    </div>
  );
}

export default HomeUser;
