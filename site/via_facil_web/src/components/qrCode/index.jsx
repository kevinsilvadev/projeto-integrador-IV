import "./QRCode.css";
import QRCode from "react-qr-code";

const QRCODE = () => {
  return (
    <div className="container-qrcode">
      <QRCode value="www.google.com/hasgfddsjklhgjkl" />
    </div>
  );
};

export default QRCODE;
