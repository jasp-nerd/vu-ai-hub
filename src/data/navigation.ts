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
      { label: 'Blog', path: '/guide/blog' },
      { label: 'FAQ', path: '/guide/faq' },
      { label: 'Program Info', path: '/guide/program' },
    ],
  },
];
