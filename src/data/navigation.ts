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
      { label: 'Amsterdam Guide', path: '/guide/amsterdam' },
      { label: 'Blog', path: '/guide/blog' },
      { label: 'FAQ', path: '/guide/faq' },
      { label: 'Program Info', path: '/guide/program' },
      { label: 'GPA Calculator', path: '/guide/gpa' },
    ],
  },
];
