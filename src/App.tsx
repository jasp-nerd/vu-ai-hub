import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import GuideIndexPage from './pages/GuideIndexPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import ProgramInfoPage from './pages/ProgramInfoPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
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
    </BrowserRouter>
  );
}
