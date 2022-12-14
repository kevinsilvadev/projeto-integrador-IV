import "./QRCode.css";
import QRCode from "react-qr-code";
import AuthService from "../../services/auth.service";

const QRCODE = () => {
  const customer = AuthService.getCurrentUser();

  console.log(customer.qrcode)

  return (
    <div className="container-qrcode">
      <QRCode value= {`http://localhost:3000/${customer.qrcode}`}/>
    </div>
  );
};

export default QRCODE;
