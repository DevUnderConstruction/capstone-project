import styled from "styled-components";
import { useState } from "react";

export default function ArticleCard({
  articles,
  onArticleAddSubmit,
  setArticles,
}) {
  const [articleEdit, setArticleEdit] = useState(null);
  const [editingArticle, setEditingArticle] = useState({
    articleName: "",
    price: "",
  });

  const handleArticleEditClick = (event, article) => {
    event.preventDefault();
    setArticleEdit(article.articleNumber);

    const formValues = {
      articleName: article.articleName,
      price: article.price,
    };
    setEditingArticle(formValues);
  };

  const handleEditArticleFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormArticleData = { ...editingArticle };
    newFormArticleData[fieldName] = fieldValue;
    setEditingArticle(newFormArticleData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedArticle = {
      articleNumber: articleEdit,
      articleName: editingArticle.articleName,
      price: +editingArticle.price,
    };

    const newArticles = [...articles];

    const index = articles.findIndex(
      (article) => article.articleNumber === articleEdit
    );
    newArticles[index] = editedArticle;

    setArticles(newArticles);
    setArticleEdit();
  };

  return (
    <>
      {articles.map((article) => (
        <StyledUl key={article.articleNumber}>
          {articleEdit === article.articleNumber ? (
            <>
              <li>
                <p>{article.articleNumber}</p>
                <p>{article.articleName}</p>
                <p>{article.price} €</p>
              </li>
              <li>
                <StyledForm onSubmit={handleEditFormSubmit}>
                  <label htmlFor="articleName">Articlename</label>
                  <input
                    type="text"
                    id="articleName"
                    name="articleName"
                    value={editingArticle.articleName}
                    onChange={handleEditArticleFormChange}
                    required
                  />
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={editingArticle.price}
                    onChange={handleEditArticleFormChange}
                    required
                  />
                  <button type="submit">save</button>
                </StyledForm>
              </li>
            </>
          ) : (
            <li>
              <p>{article.articleNumber}</p>
              <p>{article.articleName}</p>
              <p>{article.price} €</p>
              <button
                onClick={(event) => handleArticleEditClick(event, article)}
              >
                Edit
              </button>
            </li>
          )}
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
    grid-template-columns: repeat(4, 1fr);

    button {
      display: inline-block;
      padding: 0.3em 1.2em;
      margin: 1em 0.3em 1em 0;
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
