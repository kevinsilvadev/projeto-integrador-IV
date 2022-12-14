import "../../App.css";
import ListBillQrcode from "../listBillQrcodes";

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
            <ListBillQrcode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBillQRCode;
