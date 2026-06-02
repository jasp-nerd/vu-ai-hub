import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AI @ VU - Study Hub for the VU Amsterdam AI Bachelor',
    short_name: 'AI @ VU',
    description:
      'Free study resources for the VU Amsterdam AI bachelor: course guides, summaries, practice quizzes, exam tips, and curated links.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020408',
    theme_color: '#00609A',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
