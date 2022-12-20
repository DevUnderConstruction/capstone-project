import styled from "styled-components";

export default function Footer({ handleUser, handleCostumer, handleStart }) {
  return (
    <StyledFooter>
      <button onClick={handleUser}>User</button>
      <button onClick={handleStart}>Home</button>
      <button onClick={handleCostumer}>Costumer</button>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  padding-top: 10px;
  background-color: #ffffff;
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
