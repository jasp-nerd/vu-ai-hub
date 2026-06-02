import type { Metadata } from 'next';
import { studentLifeGuideSections } from '@/data/studentLifeGuide';
import StudentLifeGuidePage from '@/views/StudentLifeGuidePage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}): Promise<Metadata> {
  const { sectionId } = await params;
  const section = studentLifeGuideSections.find((s) => s.id === sectionId);
  return {
    title: section ? `${section.title} - Student Life Guide` : 'Student Life Guide',
  };
}

export async function generateStaticParams() {
  return studentLifeGuideSections.map((s) => ({ sectionId: s.id }));
}

export default function Page() {
  return <StudentLifeGuidePage />;
}
