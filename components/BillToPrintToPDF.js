import React from "react";
import styled from "styled-components";

export const BillToPrintToPDF = React.forwardRef((props, ref) => {
  console.log(props);
  const invoiceItems = props.selectedArticles;

  return (
    <StyledDiv ref={ref}>
      <StyledInvoiceWraper class="invoice overflow-auto">
        <div>
          <StyledHeader>
            <div class="row">
              <div class="col"></div>
              <StyledCompanyDetailsDiv class="col company-details">
                <h2 class="name">
                  {props.client.firstName} {props.client.lastName}
                </h2>
                <div>{props.client.street}</div>
                <div>
                  {props.client.zip} {props.client.city}
                </div>
                <div>{props.client.email}</div>
              </StyledCompanyDetailsDiv>
            </div>
          </StyledHeader>
          <main>
            <StyledContactsDiv class="row contacts">
              <div class="col invoice-to">
                <div class="text-gray-light">INVOICE TO:</div>
                <h2 class="to">
                  {props.billAdress.firstName} {props.billAdress.lastName}
                </h2>
                <div class="address">{props.billAdress.street}</div>
                <div class="email">
                  {props.billAdress.zip} {props.billAdress.city}
                </div>
              </div>
              <StyledInvoiceDetailsDiv class="col invoice-details">
                <div class="date">Date: {props.currentDate}</div>
                <div class="date">Incoice-Id: {props.invoiceId}</div>
              </StyledInvoiceDetailsDiv>
            </StyledContactsDiv>
            <StyledTable>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((item) => (
                  <tr key={item.articleNumber}>
                    <td>{item.articleNumber}</td>
                    <td>
                      <h3>{item.articleName}</h3>
                    </td>
                    <td>{item.price} €</td>
                    <td>{item.count}</td>
                    <td>{item.count * item.price} €</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2"></td>
                  <td colSpan="2">Grand Total</td>
                  <td>{props.total} €</td>
                </tr>
              </tfoot>
            </StyledTable>
            <div class="thanks">Thank you!</div>
            <div class="notices">
              <div>NOTICE:</div>
              <div class="notice">
                A finance charge of 1.5% will be made on unpaid balances after
                30 days.
              </div>
            </div>
          </main>
          <footer>
            Invoice was created on a computer and is valid without the signature
            and seal.
          </footer>
        </div>

        <div></div>
      </StyledInvoiceWraper>
    </StyledDiv>
  );
});

const StyledDiv = styled.div`
  padding: 30px;
`;
const StyledInvoiceWraper = styled.div`
  position: relative;
  background-color: #fff;
  min-height: 680px;
  padding: 15px;
`;

const StyledHeader = styled.header`
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #4eb5f1;
`;

const StyledCompanyDetailsDiv = styled.div`
  text-align: right;
  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const StyledContactsDiv = styled.div`
  margin-bottom: 20px;
  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const StyledInvoiceDetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #4eb5f1;
`;

const StyledTable = styled.table`
  border: 0;
  border-collapse: collapse;
  border-bottom: 1px solid #4eb5f1;

  width: 100%;

  thead {
    tr {
      border-bottom: 1px solid #4eb5f1;
    }
    th:first-child {
      text-align: left;
    }
    th {
      padding: 10px 0;
      margin-bottom: 20px;
      text-align: right;
    }
  }
  tbody {
     {
      border-bottom: 1px solid #4eb5f1;
    }
    td:first-child {
      text-align: left;
    }
    td {
      padding: 10px 0;
      margin-bottom: 20px;
      text-align: right;
    }
  }
`;
