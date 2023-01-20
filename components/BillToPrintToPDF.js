import React from "react";
import styled from "styled-components";

export const BillToPrintToPDF = React.forwardRef((props, ref) => {
  const invoiceItems = props.selectedArticles;

  return (
    <StyledDiv ref={ref}>
      <StyledInvoiceWraper>
        <div>
          <StyledHeader>
            <div>
              <div></div>
              <StyledCompanyDetailsDiv>
                <h2>
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
            <StyledContactsDiv>
              <div>
                <div>INVOICE TO:</div>
                <h2>
                  {props.billAdress.firstName} {props.billAdress.lastName}
                </h2>
                <div>{props.billAdress.street}</div>
                <div>
                  {props.billAdress.zip} {props.billAdress.city}
                </div>
              </div>
              <StyledInvoiceDetailsDiv>
                <div>Date: {props.currentDate}</div>
                <div>Invcoice-Id: {props.invoiceId}</div>
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
            <StyledP>Thank you!</StyledP>
            <StyledNoticeDiv>
              <p>NOTICE:</p>
              <p>
                Please pay to {props.client.iban}. A finance charge of 100% or 1
                BTC will be made on unpaid balances after 30 days.
              </p>
            </StyledNoticeDiv>
          </main>
          <StyledFooter>
            Invoice was created on a computer and is valid without the signature
            and seal.
          </StyledFooter>
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
    border-bottom: 1px solid #4eb5f1;

    td:first-child {
      text-align: left;
    }
    td {
      padding: 10px 0;
      margin-bottom: 20px;
      text-align: right;
    }
  }

  tfoot {
    white-space: nowrap;
    text-align: right;
    padding: 10px 20px;
    font-size: 1.2em;
    margin: 30px;
    border-bottom: 3px double #4eb5f1;
    td {
      padding: 10px 0;
      margin-bottom: 20px;
    }
  }
`;
const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  color: #777;
  border-top: 1px solid #aaa;
  padding: 8px 0;
`;

const StyledNoticeDiv = styled.div`
  border-left: 3px solid #4eb5f1;
  padding-left: 5px;
  margin-bottom: 20px;

  bottom: 0;
`;

const StyledP = styled.p`
  font-size: 2em;
  margin-bottom: 50px;
`;
