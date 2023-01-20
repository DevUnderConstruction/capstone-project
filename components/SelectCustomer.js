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
          <option>select...</option>
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
  margin-top: 4em;
  width: 60%;
  padding-top: 2em;
  padding-left: 2em;
  padding-bottom: 2em;
  border: 2px solid #4eb5f1;
  border-radius: 2em;
  label {
    line-height: 2em;
    font-size: 20px;
    select {
      color: #ffffff;
      background-color: #4eb5f1;
      font-size: 20px;
      border-radius: 10px;
    }
    button:disabled {
      display: inline-block;
      padding: 0.3em 1em;
      border-radius: 2em;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      background-color: red;
      text-align: center;
      opacity: 0.5;
    }
    button:enabled {
      display: inline-block;
      padding: 0.3em 1em;
      border-radius: 2em;
      box-sizing: border-box;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      background-color: #4eb5f1;
      text-align: center;
    }
  }
`;
