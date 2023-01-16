import styled from "styled-components";
export default function SelectCustomer({
  customers,
  onChange,
  disable,
  onClick,
}) {
  return (
    <StyledSection>
      <label>
        select a customer...
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
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin: auto;
  width: 50%;
  padding-top: 10%;
  label {
    line-height: 2.5rem;
    font-size: 20px;
    select {
      font-size: 20px;
    }
    button:disabled {
      display: inline-block;
      padding: 0.3em 1.2em;
      border-radius: 2em;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      background-color: red;
      text-align: center;
      opacity: 0.5;
    }
    button:enabled {
      display: inline-block;
      padding: 0.3em 1.2em;
      border-radius: 2em;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      background-color: #4eb5f1;
      text-align: center;
    }
  }
`;
