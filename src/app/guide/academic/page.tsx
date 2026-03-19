import { redirect } from 'next/navigation';
import { academicGuideSections } from '@/data/academicGuide';

export default function Page() {
  redirect(`/guide/academic/${academicGuideSections[0].id}`);
}
