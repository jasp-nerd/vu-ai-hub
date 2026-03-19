import BlogCard from '../components/BlogCard';
import { getBlogPosts } from '../services/contentService';

export default function BlogListPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Blog & Advice
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          General study advice, student life tips, and insights from fellow AI
          students.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {posts.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </div>
  );
}
