import { blogPosts } from '../data/blog';
import { faqEntries } from '../data/faq';
import { programInfo } from '../data/program';
import { navigationItems } from '../data/navigation';
import type { BlogPost, ProgramInfo, NavItem } from '../types';

// Pre-sort blog posts once at module init (static data, no need to re-sort per call)
const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getBlogPosts(): BlogPost[] {
  return sortedBlogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFAQCategories(): string[] {
  return [...new Set(faqEntries.map((e) => e.category))];
}

export function getFAQByCategory(category: string) {
  return faqEntries.filter((e) => e.category === category);
}

export function getProgramInfo(): ProgramInfo {
  return programInfo;
}

export function getNavigation(): NavItem[] {
  return navigationItems;
}
