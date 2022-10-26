import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import CalendarDate from "../calendar";
import { useState } from "react";
import Insights from "../insights";
import RecentOrder from "../recentOrder";
import ButtonDarkMode from "../buttonDarkMode";

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
        <ButtonDarkMode/>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates numquam eaque possimus! Ab quas nam sint impedit harum in mollitia. Blanditiis, esse! Reprehenderit veniam eius doloremque? Magnam cumque quidem illum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure at vel facilis amet a voluptate omnis dignissimos possimus assumenda sequi dolore ab eveniet aliquid placeat non molestiae nostrum. Vitae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum rem laboriosam illum ipsa, maiores cum inventore velit nam nostrum possimus commodi sint minus? Soluta tempora recusandae deleniti sequi nostrum labore?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, et nulla ut magnam ratione nemo animi repellendus architecto, magni eos distinctio beatae accusamus ipsa debitis quae saepe libero deserunt voluptatum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod ducimus quidem amet, exercitationem consequatur, fuga cumque corrupti distinctio, quam eum maiores soluta dolorem facere inventore neque odit facilis hic.
            </p>
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
