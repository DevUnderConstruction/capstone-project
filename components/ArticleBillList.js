import styled from "styled-components";

export default function ArticleBillList({
  selectedArticles,
  total,
  onClickIncrement,
  onclickDecrement,
}) {
  return (
    <>
      <StyledUl>
        <li>Article</li>
        <li>Count</li>
        <li>Price</li>
      </StyledUl>
      {selectedArticles.map((article, index) => (
        <StyledUlSelectedArticel key={article.articleNumber}>
          <li>{article.articleName}</li>
          <li>
            <button onClick={() => onclickDecrement(index)}>-</button>
            {article.count}
            <button onClick={() => onClickIncrement(index)}>+</button>
          </li>
          <li>{article.price * article.count} €</li>
        </StyledUlSelectedArticel>
      ))}
      <StyledSection>
        <p>Total: {total}€</p>
      </StyledSection>
    </>
  );
}

const StyledUl = styled.ul`
  border-top: 1px solid;
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  li {
    list-style-type: none;
  }
`;
const StyledUlSelectedArticel = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: end;
  padding-right: 40px;
  li {
    list-style-type: none;
  }
  li:nth-child(2n) {
    text-align: center;
  }
  li:last-of-type {
    text-align: end;
  }
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: end;
  border-top: 1px solid;
  p {
    font-weight: bold;
    margin-right: 40px;
    text-align: end;
    border-bottom: 3px double;
  }
`;
