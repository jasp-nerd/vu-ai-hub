import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../services/contentService';
import { useMountAnimation, useInView } from '../hooks/useAnimations';

export default function BlogListPage() {
  const posts = getBlogPosts();
  const mounted = useMountAnimation(50);

  useEffect(() => {
    document.title = 'Blog & Advice — AI @ VU';
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className={`mb-10 ${mounted ? 'animate-blur-in' : 'pre-animate'}`}>
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

function BlogCard({ post, index }: { post: ReturnType<typeof getBlogPosts>[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={inView ? 'animate-fade-in-up' : 'pre-animate'}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <Link
        to={`/guide/blog/${post.slug}`}
        className="group block rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6 md:p-8 hover-lift hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50"
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
    </div>
  );
}
