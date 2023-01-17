import SelectCustomer from "./SelectCustomer";
import { useState } from "react";
import Adresslist from "./AdressList";
import SelectArticle from "./SelectArticle";
import ArticleBillList from "./ArticleBillList";

export default function BillCard({ customers, articles }) {
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
          />
          <SelectArticle articles={articles} onChange={onChangeArticle} />
        </>
      )}
    </>
  );
}
