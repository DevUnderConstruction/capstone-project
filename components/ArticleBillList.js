export default function ArticleBillList({ selectedArticles, total }) {
  return (
    <>
      <ul>
        <li>Article</li>
        <li>Count</li>
        <li>Price</li>
      </ul>
      {selectedArticles.map((article) => (
        <ul key={article.articleNumber}>
          <li>{article.articleName}</li>
          <li>{article.count}</li>
          <li>{article.price} €</li>
        </ul>
      ))}
      <p>Total: {total}€</p>
    </>
  );
}
