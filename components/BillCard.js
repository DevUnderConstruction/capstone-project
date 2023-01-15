import SelectCustomer from "./SelectCustomer";
import { useState } from "react";
export default function BillCard({ customers }) {
  const [disable, setDisable] = useState(true);

  const handleSelectClick = (event) => {
    event.preventDefault();

    const selectedCustomerId = Number(event.target.value);
    const selectedCustomer = customers.find(
      (customer) => customer.id === selectedCustomerId
    );

    setDisable(false);
  };

  return (
    <SelectCustomer
      customers={customers}
      onChange={handleSelectClick}
      disable={disable}
    />
  );
}
