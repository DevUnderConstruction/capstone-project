import styled from "styled-components";
export default function Usercard({ client, onClick }) {
  return (
    <StyledDiv>
      <StyledH3>select Account</StyledH3>
      <StyledList key={client.id} onClick={onClick}>
        <li>
          {client.firstName} {client.lastName}
        </li>
        <li></li>
        <li>{client.iban}</li>
      </StyledList>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 10vh;
  margin: auto;
`;

const StyledList = styled.ul`
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border: 2px solid black;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;

  li {
    list-style: none;
  }
`;

const StyledH3 = styled.h3`
  text-align: center;
`;
