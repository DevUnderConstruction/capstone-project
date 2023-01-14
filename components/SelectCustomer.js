export default function SelectCustomer({ customers }) {
  return (
    <label>
      select a customer:
      <select>
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
