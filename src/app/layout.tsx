import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/index.css';
import { GoogleAnalytics } from './GoogleAnalytics';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const SITE_URL = 'https://vu-ai-hub.vercel.app';
const SITE_TITLE = 'AI @ VU - Study Hub for the VU Amsterdam AI Bachelor';
const SITE_DESCRIPTION =
  'Free study resources for the VU Amsterdam AI bachelor: course guides, summaries, practice quizzes, exam tips, and curated links. Made by students, for students.';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s - AI @ VU',
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: 'AI @ VU',
  keywords: [
    'VU Amsterdam',
    'Artificial Intelligence bachelor',
    'AI study resources',
    'VU AI course guides',
    'practice quizzes',
    'exam preparation',
    'study tips',
  ],
  authors: [{ name: 'Jasper Meij', url: 'https://www.linkedin.com/in/jasper-meij-ai/' }],
  creator: 'Jasper Meij',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'AI @ VU',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/vu-ai-hub-image.png',
        width: 1200,
        height: 630,
        alt: 'AI @ VU - Study Hub for the VU Amsterdam AI Bachelor',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/vu-ai-hub-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI @ VU',
              alternateName: 'AI @ VU - Student Resource Hub',
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              inLanguage: 'en',
              about: {
                '@type': 'EducationalOccupationalProgram',
                name: 'Artificial Intelligence (BSc)',
                provider: {
                  '@type': 'CollegeOrUniversity',
                  name: 'Vrije Universiteit Amsterdam',
                  url: 'https://vu.nl',
                },
              },
              creator: {
                '@type': 'Person',
                name: 'Jasper Meij',
                url: 'https://www.linkedin.com/in/jasper-meij-ai/',
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-stone-950">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
