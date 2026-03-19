import type { Metadata } from 'next';
import { academicGuideSections } from '@/data/academicGuide';
import AcademicGuidePage from '@/views/AcademicGuidePage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sectionId: string }>;
}): Promise<Metadata> {
  const { sectionId } = await params;
  const section = academicGuideSections.find((s) => s.id === sectionId);
  return {
    title: section ? `${section.title} — Academic Guide` : 'Academic Guide',
  };
}

export async function generateStaticParams() {
  return academicGuideSections.map((s) => ({ sectionId: s.id }));
}

export default function Page() {
  return <AcademicGuidePage />;
}
