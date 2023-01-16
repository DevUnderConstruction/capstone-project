export default function SelectArticle({ articles, onChange }) {
  return (
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
  );
}
