import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: 'Courses',
    path: '/courses',
  },
  {
    label: 'Guide',
    path: '/guide',
    children: [
      { label: 'Academic & Career Guide', path: '/guide/academic' },
      { label: 'Student Life Guide', path: '/guide/student-life' },
      { label: 'Blog', path: '/guide/blog' },
      { label: 'FAQ', path: '/guide/faq' },
      { label: 'GPA Calculator', path: '/guide/gpa' },
    ],
  },
];
