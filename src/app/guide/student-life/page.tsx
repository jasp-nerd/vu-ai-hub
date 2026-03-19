import { redirect } from 'next/navigation';
import { studentLifeGuideSections } from '@/data/studentLifeGuide';

export default function Page() {
  redirect(`/guide/student-life/${studentLifeGuideSections[0].id}`);
}
