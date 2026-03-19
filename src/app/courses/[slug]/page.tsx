import type { Metadata } from 'next';
import { getCourseBySlug, getCourses } from '@/services/courseService';
import CourseDetailPage from '@/views/CourseDetailPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return { title: 'Course not found' };
  }
  return {
    title: course.name,
    description: course.description,
  };
}

export async function generateStaticParams() {
  return getCourses().map((course) => ({ slug: course.slug }));
}

export default function Page() {
  return <CourseDetailPage />;
}
