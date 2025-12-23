import { ArticleTile } from "./ArticleTile";

export const ArticleTileGrid = ({ articles, className, ...props }: any) => {
  return articles && articles.length > 0 ? (
    <div {...props}>
      {articles.map((article: any, index: number) => {
        return article ? <ArticleTile key={index} article={article} /> : null;
      })}
    </div>
  ) : null;
};
