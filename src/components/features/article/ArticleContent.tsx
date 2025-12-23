import { CtfRichText } from "../contentful";

export const ArticleContent = ({ article }: any) => {
  const { content } = article;

  return (
    <div>
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};
