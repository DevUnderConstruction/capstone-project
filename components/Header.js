import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>BillyBob.io</h1>
      <p>by Jonas</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  h1 {
    margin-bottom: 0;
  }
  p {
    position: relative;
    right: -90px;

    margin-top: 0;
  }
`;
