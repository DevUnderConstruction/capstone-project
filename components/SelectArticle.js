import styled from "styled-components";

export default function SelectArticle({ articles, onChange }) {
  return (
    <StyledSection>
      <label>
        select a article:
        <select onChange={onChange}>
          <option>please select</option>
          {articles.map((article) => (
            <option value={article.articleNumber} key={article.articleNumber}>
              {article.articleName}
            </option>
          ))}
        </select>
      </label>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding-top: 10%;
  padding-left: 40px;
  margin: auto;
  label {
    font-size: 20px;
    select {
      color: #ffffff;
      background-color: #4eb5f1;
      font-size: 20px;
      border-radius: 10px;
      option {
        margin-left: 20px;
      }
    }
  }
`;
