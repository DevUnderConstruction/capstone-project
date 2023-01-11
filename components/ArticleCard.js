import styled from "styled-components";
export default function ArticleCard({ articles, onArticleAddSubmit }) {
  return (
    <>
      {articles.map((article) => (
        <StyledUl key={article.articleNumber}>
          <li>
            <p>{article.articleNumber}</p>
            <p>{article.articleName}</p>
            <p>{article.price} €</p>
          </li>
        </StyledUl>
      ))}

      <StyledForm onSubmit={onArticleAddSubmit}>
        <label htmlFor="articleNumber">Articlenumber</label>
        <input type="text" id="articleNumber" name="articleNumber" required />
        <label htmlFor="articleName">Articlename</label>
        <input type="text" id="articleName" name="articleName" required />
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" required />
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
  margin: 0;
  li {
    list-style: none;
    display: grid;
    margin: 0;
    grid-template-columns: repeat(3, 1fr);

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
