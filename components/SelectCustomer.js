export default function SelectCustomer({
  customers,
  onChange,
  disable,
  onClick,
}) {
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
      <button disabled={disable} onClick={onClick}>
        select
      </button>
    </label>
  );
}
