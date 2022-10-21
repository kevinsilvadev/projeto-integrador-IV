import VerticalNavBar from "../verticalNavBar";
import { isOpen } from "../verticalNavBar";
import "../../App.css";
import CardHomeUser from "../cardHomeUser";
import Overview from "../overview";
import CalendarDate from "../calendar";
import { useState } from "react";

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
        <CalendarDate />
      </div>
    </>
  );
}

export default HomeUser;
