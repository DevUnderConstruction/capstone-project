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
  border-bottom: 2px solid black;
  border-radius: 0px 0px 15px 15px;
  background-color: #fff;
  margin-top: auto;

  h1 {
    margin-bottom: 0;
  }
  p {
    position: relative;
    right: -90px;
    margin-top: 0;
  }
`;
