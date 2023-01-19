import SelectCustomer from "./SelectCustomer";
import { useState, useRef } from "react";
import Adresslist from "./AdressList";
import SelectArticle from "./SelectArticle";
import ArticleBillList from "./ArticleBillList";
import { BillToPrintToPDF } from "./BillToPrintToPDF";
import ReactToPrint from "react-to-print";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function BillCard({ customers, articles, client }) {
  const [disable, setDisable] = useState(true);
  const [billCard, setBillCard] = useState("selectCustomer");
  const [billAdress, setBillAdress] = useState();
  const [selectedArticles, setSelectedArticles] = useState([]);

  const handleSelectClick = (event) => {
    event.preventDefault();

    const selectedCustomerId = Number(event.target.value);
    const selectedCustomer = customers.find(
      (customer) => customer.id === selectedCustomerId
    );

    setDisable(false);
    setBillAdress(selectedCustomer);
  };

  const handleSelectCustomerButtonClick = () => {
    setBillCard("billCard");
  };

  const onChangeArticle = (event) => {
    event.preventDefault();

    const selectArticle = {
      ...articles.find(
        (article) => article.articleNumber === Number(event.target.value)
      ),
      count: 1,
    };

    setSelectedArticles([...selectedArticles, selectArticle]);
  };

  let total = 0;
  selectedArticles.forEach((article) => {
    total = total + article.price * article.count;
  });

  const handleQuantityIncrease = (index) => {
    const newArticles = [...selectedArticles];
    newArticles[index].count++;
    setSelectedArticles(newArticles);
  };
  const handleQuantityDecrease = (index) => {
    const newArticlesCount = [...selectedArticles];

    if (newArticlesCount[index].count >= 2) {
      newArticlesCount[index].count--;
    } else if (newArticlesCount[index].count === 1) {
      newArticlesCount.splice(newArticlesCount[index], 1);
    }
    setSelectedArticles(newArticlesCount);
  };

  const componentRef = useRef();

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  const invoiceId = nanoid();

  return (
    <>
      {billCard === "selectCustomer" && (
        <SelectCustomer
          customers={customers}
          onChange={handleSelectClick}
          disable={disable}
          onClick={handleSelectCustomerButtonClick}
        />
      )}
      {billCard === "billCard" && (
        <>
          <Adresslist billAdress={billAdress} />
          <ArticleBillList
            selectedArticles={selectedArticles}
            total={total}
            onClickIncrement={handleQuantityIncrease}
            onclickDecrement={handleQuantityDecrease}
          />
          <SelectArticle articles={articles} onChange={onChangeArticle} />
          <div>
            <StyledReactToPrinDiv>
              <ReactToPrint
                trigger={() => <StyledButton>Print this out!</StyledButton>}
                content={() => componentRef.current}
              />
            </StyledReactToPrinDiv>

            <StyledDivHidePrint>
              <BillToPrintToPDF
                selectedArticles={selectedArticles}
                client={client}
                billAdress={billAdress}
                currentDate={currentDate}
                total={total}
                invoiceId={invoiceId}
                ref={componentRef}
              />
            </StyledDivHidePrint>
          </div>
        </>
      )}
    </>
  );
}

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;
  top: 50%;
  left: 50%;
`;

const StyledReactToPrinDiv = styled.div`
  width: 100%;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StyledDivHidePrint = styled.div`
  display: none;
`;
