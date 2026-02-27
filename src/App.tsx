import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy-loaded pages for route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const CourseListPage = lazy(() => import('./pages/CourseListPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const GuideIndexPage = lazy(() => import('./pages/GuideIndexPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ProgramInfoPage = lazy(() => import('./pages/ProgramInfoPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <SpeedInsights />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseListPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/guide" element={<GuideIndexPage />} />
            <Route path="/guide/blog" element={<BlogListPage />} />
            <Route path="/guide/blog/:slug" element={<BlogPostPage />} />
            <Route path="/guide/faq" element={<FAQPage />} />
            <Route path="/guide/program" element={<ProgramInfoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
