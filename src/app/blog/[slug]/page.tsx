import { CtfRichText } from "@/components/features/contentful";
import getBlogMetadata from "@/components/getBlogMetadata";
import { getAllArticles, getArticle } from "@/libs/graphqlAPI";
import "./BlogPost.scss";

export async function generateMetadata({ params }: any) {
  const post = await getArticle(params.slug);
  return getBlogMetadata(post);
}
export async function generateStaticParams() {
  const posts = await getAllArticles();
  const slugs = posts.map((post: any) => ({ slug: post.slug }));
  return slugs;
}

export default async function BlogPage({ params }: any) {
  const post = await getArticle(params.slug);

  return (
    <>
      <div className="BlogPost">
        <div
          className="heading"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${post.featuredImage.url})`,
          }}
        >
          <div className="heading-content">
            <h1>{post.title}</h1>
          </div>
        </div>
        <div className="postContent">
          <CtfRichText {...post.content} />
        </div>
      </div>
    </>
  );
}
