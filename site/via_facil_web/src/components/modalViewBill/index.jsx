import "./ModalViewBill.css";

const ModalViewBill = ({ open, onClose }) => {
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 7000);
  }

  function showPage() {
    document.getElementById("loader-bill").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

  if (!open) return null;
  return (
    <div onClick={onClose} onLoad={myFunction()} className="overlay">
      <div
        className="ModalViewBill-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalRight">
          <div className="ModalViewBill-header">
            <span onClick={onClose} class="close">
              &times;
            </span>
            <h2>Seu Boleto</h2>
          </div>
          <div className="ModalViewBill-body">
            <div id="loader-bill"></div>

            <div id="myDiv" className="animate-bottom">
              <div class="bill-body">
                <div class="bill-header">
                  <h2>Seu banco</h2>
                </div>
                <table>
                  <tr>
                    <th colspan="3">
                      Local do pagamento 
                      <p>Conteúdo</p>
                    </th>
                    <th colspan="2">
                      Vencimento 
                      <p>Conteúdo</p>
                    </th>
                  </tr>
                  <tr>
                    <td colspan="3">
                      Cedente
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="2">
                      Nosso número
                      <p>Conteúdo</p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      Data do documento
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Nome do documento
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Aceite
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Valor do documento
                      <p>Conteúdo</p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="1">
                      Uso banco
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Valor
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Carteira
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Descontos/Abatimentos
                      <p>Conteúdo</p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      Espécie do documento
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Juros/multa
                      <p>Conteúdo</p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      Instruções
                      <p>Conteúdo</p>
                    </td>
                    <td colspan="1">
                      Valor Cobrado
                      <p>Conteúdo</p>
                    </td>
                  </tr>
                </table>
                <p>|||||||||| |||||| ||||||||||||| ||||||||||||| |||||||||||||||||||| |||||||||||</p>
                <p>1234 5345345  45645645 567567567 56756</p>
                <button>Imprimir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewBill;
