import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import CalendarDate from "../calendar";
import { useState } from "react";
import Insights from "../insights";
import RecentOrder from "../recentOrder";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <>
      <div
        className={
          state.clicked ? "HomeUser_content active" : "HomeUser_content"
        }
      >
        <video src="/videos/video-1.mp4" autoPlay loop muted />

        <div className="HomeUser_VerticalNavBar">
          <VerticalNavBar onClick={handleClick} />
        </div>
        <h1>Dashboard</h1>
        <div className="homeUser-calendar">
          <CalendarDate />
        </div>
        <div class="grid-container">
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
          <RecentOrder/>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
