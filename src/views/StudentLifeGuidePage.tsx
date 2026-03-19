import SidebarGuidePage from '../components/SidebarGuidePage';
import { studentLifeGuideSections } from '../data/studentLifeGuide';

export default function StudentLifeGuidePage() {
  return (
    <SidebarGuidePage
      guideTitle="Student Life Guide"
      guideSubtitle="Everything you need to know about living in Amsterdam as a student — transport, housing, costs, health, and more."
      breadcrumbLabel="Student Life Guide"
      baseRoute="/guide/student-life"
      sections={studentLifeGuideSections}
      attribution={
        <p className="text-xs text-stone-400 dark:text-stone-500 px-3 leading-relaxed">
          Content from{' '}
          <a
            href="https://github.com/KaiErikNiermann/VU-Amst-Guide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vu-blue dark:text-vu-blue-light hover:underline"
          >
            VU-Amst-Guide
          </a>{' '}
          by KaiErikNiermann & contributors.
        </p>
      }
    />
  );
}
