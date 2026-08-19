import SidebarGuidePage from '../components/SidebarGuidePage';
import { academicGuideSections } from '../data/academicGuide';

export default function AcademicGuidePage() {
  return (
    <SidebarGuidePage
      guideTitle="Academic & Career Guide"
      guideSubtitle="Program structure, course choices, rules and deadlines, career paths, and academic resources for AI students at VU Amsterdam."
      breadcrumbLabel="Academic & Career Guide"
      baseRoute="/guide/academic"
      sections={academicGuideSections}
    />
  );
}
