export default function SelectCustomer({ customers, onChange }) {
  return (
    <label>
      select a customer:
      <select onChange={onChange}>
        <option>please select</option>
        {customers.map((customer) => (
          <option value={customer.id} key={customer.id}>
            {customer.firstName} {customer.lastName}
          </option>
        ))}
      </select>
    </label>
  );
}
