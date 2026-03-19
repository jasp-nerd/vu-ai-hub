import type { Metadata } from 'next';
import FAQPage from '@/views/FAQPage';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the AI bachelor at VU Amsterdam.',
};

export default function Page() {
  return <FAQPage />;
}
