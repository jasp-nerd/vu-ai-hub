'use client';

import type { ReactNode } from 'react';
import { track } from '../lib/analytics';

interface GitHubLinkProps {
  location: string;
  className?: string;
  children: ReactNode;
  href?: string;
}

// External link to the GitHub repo that records which spot on the site
// people click from, so we can see which placements actually get used.
export default function GitHubLink({
  location,
  className,
  children,
  href = 'https://github.com/jasp-nerd/vu-ai-hub',
}: GitHubLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('github_star_clicked', { location })}
    >
      {children}
    </a>
  );
}
