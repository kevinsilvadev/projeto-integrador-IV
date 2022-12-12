import "../../App.css";
import ListBill from "../listBill";

function ViewBillQRCode() {
  return (
    <div
      className={"HomeUser_content2"}
    >
      <div className="homeUser-header">
        <h1>Suas Contas</h1>
      </div>
      <div className="homeUser-row">
        <div className="col-12 col-s-12">
          <div className="homeUser-recentOrder">
            <ListBill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBillQRCode;
