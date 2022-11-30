import QRCode from "react-qr-code";
import "./QRCode.css";

const QRCODE = () => {
  return (
    <div className="container-qrcode">
        <QRCode value="www.google.com"/>
    </div>
  );
};

export default QRCODE;
