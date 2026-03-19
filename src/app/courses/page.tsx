import type { Metadata } from 'next';
import CourseListPage from '@/views/CourseListPage';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Browse all AI bachelor courses at VU Amsterdam.',
};

export default function Page() {
  return <CourseListPage />;
}
