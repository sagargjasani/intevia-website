import Link from "next/link";
import "./BlogCard.scss";

const BlogCard = ({ post }: any) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="BlogCard">
        <img src={post.featuredImage.url} alt={post.slug} />
        <h3>{post.title}</h3>
        <p>{post.shortDescription}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
