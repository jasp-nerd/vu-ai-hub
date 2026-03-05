import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostBySlug } from '../services/contentService';
import { useMountAnimation } from '../hooks/useAnimations';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');
  const mounted = useMountAnimation(50);

  useEffect(() => {
    document.title = post
      ? `${post.title} — AI @ VU`
      : 'Post not found — AI @ VU';
  }, [post]);

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-20 text-center animate-fade-in">
        <h1 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">
          Post not found
        </h1>
        <Link
          to="/guide/blog"
          className="text-sm font-medium text-vu-blue dark:text-vu-blue-light hover:underline"
        >
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav
        className={`flex items-center gap-2 text-sm text-stone-400 dark:text-stone-500 mb-8 ${
          mounted ? 'animate-slide-in-left' : 'pre-animate'
        }`}
      >
        <Link
          to="/guide/blog"
          className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          Blog
        </Link>
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="text-stone-600 dark:text-stone-300 truncate">{post.title}</span>
      </nav>

      <article>
        <header className="mb-10">
          <h1
            className={`font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight ${
              mounted ? 'animate-blur-in stagger-1' : 'pre-animate'
            }`}
          >
            {post.title}
          </h1>
          <div
            className={`flex items-center gap-3 mt-4 ${
              mounted ? 'animate-fade-in-up stagger-2' : 'pre-animate'
            }`}
          >
            <span className="text-sm text-stone-400 dark:text-stone-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="text-sm text-stone-300 dark:text-stone-600">·</span>
            <span className="text-sm text-stone-400 dark:text-stone-500">{post.author}</span>
          </div>
        </header>

        <div
          className={`prose-custom ${
            mounted ? 'animate-fade-in-up stagger-3' : 'pre-animate'
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <div
          className={`flex flex-wrap gap-2 mt-10 pt-8 border-t border-stone-200/60 dark:border-stone-700/60 ${
            mounted ? 'animate-fade-in stagger-5' : 'pre-animate'
          }`}
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-stone-400 dark:text-stone-500 bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700/60 px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
