import styled from "styled-components";
export default function Usercard({ client, onClick }) {
  return (
    <>
      <StyledH2>select Account</StyledH2>
      <StyledList key={client.id} onClick={onClick}>
        <li>{client.firstName}</li>
        <li>{client.lastName}</li>
        <li>{client.phoneNumber}</li>
        <li>{client.email}</li>
        <li>{client.street}</li>
        <li>{client.zip}</li>
        <li>{client.city}</li>
        <li>{client.country}</li>
        <li>{client.iban}</li>
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
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
  position: absolute;
  top: 20%;
  left: 17%;
  li {
    list-style: none;
  }
`;

const StyledH2 = styled.h2`
  display: inline-block;
  position: absolute;
  left: 17%;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
`;
