import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMountAnimation } from '../hooks/useAnimations';

const sections = [
  {
    title: 'Academic & Career Guide',
    description:
      'Program structure, specialisations, career paths, master\'s programs, internships, and academic resources.',
    path: '/guide/academic',
    image: '/assets/images/guide-program.png',
  },
  {
    title: 'Student Life Guide',
    description:
      'Living in Amsterdam: transport, biking, housing, apps, health, costs, and more.',
    path: '/guide/student-life',
    image: '/assets/images/guide-amsterdam.png',
  },
  {
    title: 'Blog & Advice',
    description:
      'General study tips, student life advice, and insights from fellow AI students.',
    path: '/guide/blog',
    image: '/assets/images/guide-blog.png',
  },
  {
    title: 'FAQ',
    description:
      'Answers to common questions about exams, registration, tools, and student life.',
    path: '/guide/faq',
    image: '/assets/images/guide-faq.png',
  },
];

export default function GuideIndexPage() {
  const mounted = useMountAnimation(50);

  useEffect(() => {
    document.title = 'Student Guide — AI @ VU';
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className={`mb-10 ${mounted ? 'animate-blur-in' : 'pre-animate'}`}>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Student Guide
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Everything beyond specific courses — study advice, FAQs, and program
          information.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
        {sections.map((section, i) => (
          <Link
            key={section.path}
            to={section.path}
            className={`group rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 overflow-hidden hover-lift hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50 ${
              mounted ? 'animate-scale-in' : 'pre-animate'
            }`}
            style={{ animationDelay: `${i * 80 + 150}ms` }}
          >
            <div className="aspect-[16/10] bg-stone-50 dark:bg-stone-800/50 overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display font-semibold text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors mb-1">
                {section.title}
              </h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
