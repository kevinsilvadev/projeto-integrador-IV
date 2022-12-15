import "../../App.css";
import {useLocation} from "react-router-dom";

function ShowBillQrCode() {
  
  const location = useLocation();

  return (
    <div>
      <div className="homeUser-header">
        <h1>Seu Boleto</h1>
      </div>
      <div className="homeUser-row">
        <div className="col-12 col-s-12">
          <div className="homeUser-recentOrder">
          <div>
            <div className="container-show-bill">
              <div className="bill-body">
                <div>
                  <h2 className="h2-boleto">Seu banco</h2>
                </div>
                <p className="text-content-bill">{location.state.bill.documentNumber}</p>
                <table>
                  <tr>
                    <th colSpan="3">
                      <p className="title-bill">Local do pagamento</p>
                      <p className="text-content-bill">Pagável preferencialmente na Rede Banco do Brasil</p>
                    </th>
                    <th colSpan="2">
                      <p className="title-bill">Vencimento</p>
                      <p className="text-content-bill">{location.state.bill.dueDate}</p>
                    </th>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <p className="title-bill">Cedente</p>
                      <p className="text-content-bill">{location.state.bill.company.name}</p>
                    </td>
                    <td colSpan="2">
                      <p className="title-bill">Nosso número</p>
                      <p className="text-content-bill">09/00025813096-4</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1">
                      <p className="title-bill">Data do documento</p>
                      <p className="text-content-bill">{location.state.bill.generatedDate}</p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Nome do documento</p>
                      <p className="text-content-bill">Conteúdo</p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Aceite</p>
                      <p className="text-content-bill">N</p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Valor do documento</p>
                      <p className="text-content-bill">{'R$' + location.state.bill.documentValue}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1">
                      <p className="title-bill">Uso banco</p>
                      <p className="text-content-bill"></p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Valor</p>
                      <p className="text-content-bill"></p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Carteira</p>
                      <p className="text-content-bill">09</p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Descontos</p>
                      <p className="text-content-bill">{location.state.bill.discount+ '%'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <p className="title-bill">Espécie do documento</p>
                      <p className="text-content-bill">DM</p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Juros/multa</p>
                      <p className="text-content-bill">{location.state.bill.penalty+'%'}</p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <p className="title-bill">Instruções</p>
                      <p className="p-intrucoes-boleto">
                        Após vencimento cobrar {location.state.bill.penalty+'%'} por dia de atraso. Após
                        vencimento cobrar multa de R$ 37,06. Pagável em qualquer
                        rede bancária mesmo após o vencimento, não sendo
                        necessário atualização do boleto até o mês seguinte.
                        Depósito em conta corrente não quita o boleto. Senhor
                        caixa, ao efetuar o recebimento com cheque, favor anotar
                        o nosso número do boleto no verso do cheque.
                      </p>
                    </td>
                    <td colSpan="1">
                      <p className="title-bill">Valor Cobrado</p>
                      <p className="text-content-bill">{'R$'+location.state.bill.amountCharged}</p>
                    </td>
                  </tr>
                </table>
                <p className="text-content-bill">
                  |||||||||| |||||| ||||||||||||| |||||||||||||
                  |||||||||||||||||||| |||||||||||
                </p>
                <p className="text-content-bill">1234 5345345 45645645 567567567 56756</p>
                <button>Imprimir</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBillQrCode;
