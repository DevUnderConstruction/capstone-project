import styled from "styled-components";

export default function Footer({ handleNav }) {
  return (
    <StyledFooter>
      <button onClick={handleNav}>User</button>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  button {
    position: relative;
  }
`;
