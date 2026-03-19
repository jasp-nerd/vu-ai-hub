import type { Metadata } from 'next';
import BlogListPage from '@/views/BlogListPage';

export const metadata: Metadata = {
  title: 'Blog & Advice',
  description: 'Articles and insights for AI students at VU Amsterdam.',
};

export default function Page() {
  return <BlogListPage />;
}
