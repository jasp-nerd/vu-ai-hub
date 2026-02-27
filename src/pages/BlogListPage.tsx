import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../services/contentService';

export default function BlogListPage() {
  const posts = getBlogPosts();

  useEffect(() => {
    document.title = 'Blog & Advice — AI @ VU';
  }, []);

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
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/guide/blog/${post.slug}`}
            className="group block rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6 md:p-8 transition-all hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-stone-400 dark:text-stone-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="text-xs text-stone-300 dark:text-stone-600">·</span>
              <span className="text-xs text-stone-400 dark:text-stone-500">{post.author}</span>
            </div>
            <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
