import SelectCustomer from "./SelectCustomer";
import { useState } from "react";
import Adresslist from "./AdressList";

export default function BillCard({ customers }) {
  const [disable, setDisable] = useState(true);
  const [billCard, setBillCard] = useState("selectCustomer");
  const [billAdress, setBillAdress] = useState();

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
        </>
      )}
    </>
  );
}
