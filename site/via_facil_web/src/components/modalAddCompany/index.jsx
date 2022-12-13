import paymentBill from "./payment-bill.jpg";
import "./Modal.css";

const ModalAddCompany = ({ open, onClose }) => {
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  if (!open) return null;
  return (
    <div onClick={onClose} onLoad={myFunction()} className="overlay">
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img className="modal-img" src={paymentBill} alt="imagem bill" />
        <div className="modalRight">
          <div className="modal-header">
            <span onClick={onClose} class="close">
              &times;
            </span>
            <h2>Vinculando empresa...</h2>
          </div>
          <div className="modal-body">
            <div id="loader"></div>

            <div id="myDiv" className="animate-bottom">
              <h1>Pronto!</h1>
              <p>
                A empresa foi vinculada com sucesso, agora você já pode realizar
                a emissão de segundas vias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddCompany;
