import { blogPosts } from '../data/blog';
import { faqEntries } from '../data/faq';
import { programInfo } from '../data/program';
import { navigationItems } from '../data/navigation';
import type { BlogPost, FAQEntry, ProgramInfo, NavItem } from '../types';

export function getBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFAQEntries(): FAQEntry[] {
  return faqEntries;
}

export function getFAQCategories(): string[] {
  return [...new Set(faqEntries.map((e) => e.category))];
}

export function getFAQByCategory(category: string): FAQEntry[] {
  return faqEntries.filter((e) => e.category === category);
}

export function getProgramInfo(): ProgramInfo {
  return programInfo;
}

export function getNavigation(): NavItem[] {
  return navigationItems;
}
