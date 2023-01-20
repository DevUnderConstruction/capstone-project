import styled from "styled-components";

export default function Footer({
  onClickClient,
  onClickCustomer,
  onClickHome,
  onClickArticle,
}) {
  return (
    <StyledFooter>
      <button onClick={onClickClient}>Account</button>
      <button onClick={onClickHome}>Home</button>
      <button onClick={onClickCustomer}>Customer</button>
      <button onClick={onClickArticle}>Article</button>
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
  left: 0;
  bottom: 0;
  border-top: 2px solid black;
  border-radius: 15px 15px 0px 0px;
  padding-top: 1em;
  padding-bottom: 1em;
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
