import BlogCard from "./BlogCard";
import "./BlogCardGrid.scss";
interface PageProps {
  posts: any[] | undefined;
}

const BlogCardGrid = ({ posts }: PageProps) => {
  return (
    <div className="BlogCardGrid">
      <h1>Must Reads</h1>
      <div className="postList">
        {posts &&
          posts.map((post) => (
            <BlogCard post={post} key={new Date().getTime()} />
          ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;
