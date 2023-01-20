import { useState } from "react";
import styled from "styled-components";

export default function CustomerForm({
  customers,
  handleAddCustomerForm,
  handleAddCustomerFormSubmit,
  deleteCustomer,
  setCustomers,
}) {
  const [editingCustomer, setEditingCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    zip: "",
    city: "",
  });

  const [customerEditId, setCustomerEditId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...editingCustomer };
    newFormData[fieldName] = fieldValue;
    setEditingCustomer(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCustomer = {
      id: customerEditId,
      firstName: editingCustomer.firstName,
      lastName: editingCustomer.lastName,
      email: editingCustomer.email,
      phoneNumber: editingCustomer.phoneNumber,
      street: editingCustomer.street,
      zip: editingCustomer.zip,
      city: editingCustomer.city,
    };

    const newCustomers = [...customers];

    const index = customers.findIndex(
      (customer) => customer.id === customerEditId
    );
    newCustomers[index] = editedCustomer;

    setCustomers(newCustomers);
    setCustomerEditId();
  };

  const handleEditClick = (event, customer) => {
    event.preventDefault();
    setCustomerEditId(customer.id);

    const formValues = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
      street: customer.street,
      zip: customer.zip,
      city: customer.city,
    };
    setEditingCustomer(formValues);
  };
  return (
    <>
      <StyledSection>
        {customers.map((customer) => (
          <StyledUl key={customer.id}>
            {customerEditId === customer.id ? (
              <li>
                <StyledEditForm onSubmit={handleEditFormSubmit}>
                  <p>{customer.firstName}</p>
                  <p>{customer.lastName}</p>
                  <label htmlFor="firstName">Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={editingCustomer.firstName}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="lastName">LastName</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={editingCustomer.lastName}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editingCustomer.email}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="coPhoneNumber">PhoneNumber</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={editingCustomer.phoneNumber}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={editingCustomer.street}
                    onChange={handleEditFormChange}
                    required
                  />
                  <label htmlFor="zip">ZIP</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={editingCustomer.zip}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={editingCustomer.city}
                    onChange={handleEditFormChange}
                    required
                  />

                  <button type="submit">save</button>
                </StyledEditForm>
              </li>
            ) : (
              <li key={customer.id}>
                {customer.firstName} {customer.lastName}
              </li>
            )}

            <li>
              <button onClick={(event) => handleEditClick(event, customer)}>
                Edit
              </button>
              <button onClick={() => deleteCustomer(customer.id)}>
                Delete
              </button>
            </li>
          </StyledUl>
        ))}
      </StyledSection>

      <StyledForm onSubmit={handleAddCustomerFormSubmit}>
        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleAddCustomerForm}
          required
        />

        <label htmlFor="coLastName">LastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleAddCustomerForm}
          required
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleAddCustomerForm}
          required
        />

        <label htmlFor="coPhoneNumber">PhoneNumber</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleAddCustomerForm}
          required
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={handleAddCustomerForm}
          required
        />
        <label htmlFor="zip">ZIP</label>
        <input
          type="text"
          id="zip"
          name="zip"
          onChange={handleAddCustomerForm}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleAddCustomerForm}
          required
        />

        <button type="submit">save</button>
      </StyledForm>
      <StyledDiv></StyledDiv>
    </>
  );
}

const StyledSection = styled.section`
  top: 10vh;
`;

const StyledEditForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  input {
    margin-right: 2em;
    border-radius: 0.8em;
  }
  button {
    display: inline-block;
    padding: 0.3em 1.2em;
    border-radius: 2em;
    text-decoration: none;
    font-weight: 300;
    color: #ffffff;
    background-color: #4eb5f1;
    text-align: center;
  }
`;
const StyledUl = styled.ul`
  margin-left: 2em;
  margin-right: 2em;
  padding-left: 2em;
  padding-top: 0.6em;
  border: 2px solid #4eb5f1;
  border-radius: 2em;
  li {
    padding-bottom: 0.6em;
    list-style: none;
    display: flex;
    justify-content: space-between;
    button {
      display: inline-block;
      padding: 0.3em 1.2em;
      margin: 0 2em 0.3em 0;
      border-radius: 2em;
      box-sizing: border-box;
      text-decoration: none;
      font-weight: 300;
      color: #ffffff;
      background-color: #4eb5f1;
      text-align: center;
    }
  }
`;

const StyledForm = styled.form`
  bottom: 20em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin-left: 2em;
  margin-right: 2em;
  padding-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  border: 2px solid #4eb5f1;
  border-radius: 2em;
  input {
    border-radius: 10px;
    margin-right: 0.8em;
  }
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

const StyledDiv = styled.div`
  height: 5em;
`;
