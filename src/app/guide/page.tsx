import type { Metadata } from 'next';
import GuideIndexPage from '@/views/GuideIndexPage';

export const metadata: Metadata = {
  title: 'Student Guide',
  description: 'Guides on academics, student life, and more for VU AI students.',
};

export default function Page() {
  return <GuideIndexPage />;
}
