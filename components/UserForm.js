import styled from "styled-components";

export default function UserForm({ client, handleSubmit, handleInputChange }) {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={client.firstName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="lastName">LastName</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={client.lastName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={client.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="phoneNumber">PhoneNumber</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={client.phoneNumber}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="zip">ZIP</label>
      <input
        type="text"
        id="zip"
        name="zip"
        value={client.zip}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        value={client.street}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={client.city}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        name="country"
        value={client.country}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="iban">IBAN</label>
      <input
        type="text"
        id="iban"
        name="iban"
        value={client.iban}
        onChange={handleInputChange}
        required
      />
      <button type="submit">save</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    display: inline-block;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #ffffff;
    background-color: #4eb5f1;
    text-align: center;
  }
`;
