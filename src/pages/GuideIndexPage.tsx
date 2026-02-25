import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Blog & Advice',
    description:
      'General study tips, student life advice, and insights from fellow AI students.',
    path: '/guide/blog',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'FAQ',
    description:
      'Answers to common questions about exams, registration, tools, and student life.',
    path: '/guide/faq',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Program Info',
    description:
      'Overview of the AI bachelor curriculum, structure, and useful university links.',
    path: '/guide/program',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
];

export default function GuideIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
          Student Guide
        </h1>
        <p className="mt-2 text-stone-500 dark:text-stone-400 max-w-lg">
          Everything beyond specific courses — study advice, FAQs, and program
          information.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="group rounded-2xl border border-stone-200/60 dark:border-stone-700/60 bg-white dark:bg-stone-900 p-6 transition-all hover:border-stone-300 dark:hover:border-stone-600 hover:shadow-lg hover:shadow-stone-100/80 dark:hover:shadow-stone-950/50 hover:-translate-y-0.5"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-50 dark:bg-stone-800 text-stone-400 dark:text-stone-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors mb-4">
              {section.icon}
            </div>
            <h2 className="font-display font-semibold text-stone-900 dark:text-stone-100 group-hover:text-vu-blue dark:group-hover:text-vu-blue-light transition-colors mb-1">
              {section.title}
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
