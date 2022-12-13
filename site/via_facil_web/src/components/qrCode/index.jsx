import "./QRCode.css";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import CustomerService from "../../services/customer.service";

const QRCODE = () => {
  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();

  console.log(customer.qrcode)

  return (
    <div className="container-qrcode">
      <QRCode value= {`http://192.168.0.123:3000/view-company/qrcode/${customer.qrcode}`}/>
    </div>
  );
};

export default QRCODE;
