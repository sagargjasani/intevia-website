import { CtfImage } from "../contentful";

export const ArticleImage = ({ image }: any) => {
  return image.image ? (
    <figure>
      <div className="flex justify-center">
        <CtfImage {...image.image} />
      </div>
      {image.caption && (
        <figcaption className="mt-4">{image.caption}</figcaption>
      )}
    </figure>
  ) : null;
};
