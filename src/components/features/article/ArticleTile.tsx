import Link from "next/link";
import { CtfImage } from "../contentful";

export const ArticleTile = ({ article }: any) => {
  const { title, publishedDate } = article;
  return (
    <Link className="flex flex-col" href={`/${article.slug}`}>
      <div>
        {article.featuredImage && (
          <div>
            <CtfImage
              nextImageProps={{
                className: "object-cover aspect-[16/10] w-full",
              }}
              {...article.featuredImage}
            />
          </div>
        )}
        <div className="flex flex-1 flex-col py-3 px-4 md:px-5 md:py-4 lg:px-7 lg:py-5">
          {title && <p className="h3 mb-2 text-gray800 md:mb-3">{title}</p>}
        </div>
      </div>
    </Link>
  );
};
