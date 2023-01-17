import styled from "styled-components";

export default function Adresslist({ billAdress }) {
  return (
    <StyledSection>
      <p>
        {billAdress.firstName} {billAdress.lastName}
      </p>
      <p>{billAdress.street}</p>
      <p>
        {billAdress.zip} {billAdress.city}
      </p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 0.5em;
  p {
    margin: 0;
  }
  p:first-child {
    font-weight: bold;
  }
`;
