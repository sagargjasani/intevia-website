import BlogCardGrid from "@/components/pages/blog/BlogCardGrid";
import { getAllArticles } from "@/libs/graphqlAPI";

export default async function Home() {
  const posts = await getAllArticles();
  return <BlogCardGrid posts={posts} />;
}
