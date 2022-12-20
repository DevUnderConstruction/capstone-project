import { useState } from "react";
import styled from "styled-components";

export default function CostumerForm({
  costumers,
  handleAddCostumerForm,
  handleAddCostumerFormSubmit,
  deleteCostumer,
  setCostumers,
}) {
  const [editingCostumer, setEditingCostumer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    zip: "",
    city: "",
  });

  const [costumerEditId, setCostumerEditId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...editingCostumer };
    newFormData[fieldName] = fieldValue;
    setEditingCostumer(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCostumer = {
      id: costumerEditId,
      firstName: editingCostumer.firstName,
      lastName: editingCostumer.lastName,
      email: editingCostumer.email,
      phoneNumber: editingCostumer.phoneNumber,
      street: editingCostumer.street,
      zip: editingCostumer.zip,
      city: editingCostumer.city,
    };

    const newCostumers = [...costumers];

    const index = costumers.findIndex(
      (costumer) => costumer.id === costumerEditId
    );
    newCostumers[index] = editedCostumer;

    setCostumers(newCostumers);
  };

  const handleEditClick = (event, costumer) => {
    event.preventDefault();
    setCostumerEditId(costumer.id);

    const formValues = {
      firstName: costumer.firstName,
      lastName: costumer.lastName,
      email: costumer.email,
      phoneNumber: costumer.phoneNumber,
      street: costumer.street,
      zip: costumer.zip,
      city: costumer.city,
    };
    setEditingCostumer(formValues);
  };
  return (
    <>
      <div>
        {costumers.map((costumer) => (
          <StyledUl key={costumer.id}>
            {costumerEditId === costumer.id ? (
              <li>
                <StyledForm onSubmit={handleEditFormSubmit}>
                  <p>{costumer.firstName}</p>
                  <p>{costumer.lastName}</p>
                  <label htmlFor="firstName">Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={editingCostumer.firstName}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="lastName">LastName</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={editingCostumer.lastName}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editingCostumer.email}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="coPhoneNumber">PhoneNumber</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={editingCostumer.phoneNumber}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={editingCostumer.street}
                    onChange={handleEditFormChange}
                    required
                  />
                  <label htmlFor="zip">ZIP</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={editingCostumer.zip}
                    onChange={handleEditFormChange}
                    required
                  />

                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={editingCostumer.city}
                    onChange={handleEditFormChange}
                    required
                  />

                  <button type="submit">save</button>
                </StyledForm>
              </li>
            ) : (
              <li key={costumer.id}>{costumer.firstName}</li>
            )}

            <li>
              <button onClick={(event) => handleEditClick(event, costumer)}>
                Edit
              </button>
              <button onClick={() => deleteCostumer(costumer.id)}>
                Delete
              </button>
            </li>
          </StyledUl>
        ))}
      </div>

      <StyledForm onSubmit={handleAddCostumerFormSubmit}>
        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleAddCostumerForm}
          required
        />

        <label htmlFor="coLastName">LastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleAddCostumerForm}
          required
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleAddCostumerForm}
          required
        />

        <label htmlFor="coPhoneNumber">PhoneNumber</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleAddCostumerForm}
          required
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={handleAddCostumerForm}
          required
        />
        <label htmlFor="zip">ZIP</label>
        <input
          type="text"
          id="zip"
          name="zip"
          onChange={handleAddCostumerForm}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleAddCostumerForm}
          required
        />

        <button type="submit">save</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  bottom: 0px;
  gap: 5px;
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
const StyledUl = styled.ul`
  li {
    list-style: none;
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
  }
`;
