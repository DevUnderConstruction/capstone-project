import SelectCustomer from "./SelectCustomer";
export default function BillCard({ customers }) {
  const handleSelectClick = (event) => {
    event.preventDefault();

    const selectedCustomerId = Number(event.target.value);
    const selectedCustomer = customers.find(
      (customer) => customer.id === Number(event.target.value)
    );
    console.log(selectedCustomer);
  };

  return <SelectCustomer customers={customers} onChange={handleSelectClick} />;
}
