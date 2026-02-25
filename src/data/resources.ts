import type { Resource } from '../types';

export const resources: Resource[] = [
    // ========== DSA ==========
    {
        id: 'res-dsa-1',
        courseId: 'data-structures-algorithms-ai',
        title: 'Introduction to Algorithms (CLRS) — Official Textbook',
        description:
            'The definitive algorithms textbook used in this course. Covers data structures, sorting, graph algorithms, and complexity analysis in depth.',
        url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',
        type: 'article',
        tags: ['textbook', 'algorithms'],
    },
    {
        id: 'res-dsa-2',
        courseId: 'data-structures-algorithms-ai',
        title: 'VisuAlgo — Algorithm Visualization',
        description:
            'Interactive visualizations of sorting algorithms, graph traversals, heap operations, and more. Incredibly useful for building intuition.',
        url: 'https://visualgo.net/',
        type: 'tool',
        tags: ['visualization', 'algorithms'],
    },
    {
        id: 'res-dsa-3',
        courseId: 'data-structures-algorithms-ai',
        title: 'Big-O Cheat Sheet',
        description:
            'Quick reference for time and space complexity of common data structures and algorithms. Great for exam review.',
        url: 'https://www.bigocheatsheet.com/',
        type: 'article',
        tags: ['complexity', 'reference'],
    },

    // ========== MAS ==========
    {
        id: 'res-mas-1',
        courseId: 'multi-agent-systems',
        title: 'SWI-Prolog Documentation',
        description:
            'Official documentation for the Prolog implementation used in MAS. Includes built-in predicates, library reference, and debugging guides.',
        url: 'https://www.swi-prolog.org/pldoc/doc_for?object=manual',
        type: 'article',
        tags: ['prolog', 'documentation'],
    },
    {
        id: 'res-mas-2',
        courseId: 'multi-agent-systems',
        title: 'Learn Prolog Now! — Free Online Textbook',
        description:
            'An excellent free introduction to Prolog programming. Covers unification, recursion, lists, and search — all topics tested in MAS exams.',
        url: 'https://www.learnprolognow.org/',
        type: 'article',
        tags: ['prolog', 'textbook'],
    },
    {
        id: 'res-mas-3',
        courseId: 'multi-agent-systems',
        title: 'GOAL Agent Programming Language',
        description:
            'Official resources for the GOAL/MARBEL agent programming framework used in the MAS practicals.',
        url: 'https://goalapl.atlassian.net/wiki/spaces/GOAL/overview',
        type: 'tool',
        tags: ['marbel', 'agents'],
    },

    // ========== Linear Algebra & Calculus ==========
    {
        id: 'res-lac-1',
        courseId: 'linear-algebra-calculus',
        title: '3Blue1Brown — Essence of Linear Algebra',
        description:
            'Beautifully animated video series that builds geometric intuition for linear algebra. Covers vectors, matrices, eigenvalues, and more.',
        url: 'https://www.3blue1brown.com/topics/linear-algebra',
        type: 'video',
        tags: ['linear-algebra', 'intuition'],
    },
    {
        id: 'res-lac-2',
        courseId: 'linear-algebra-calculus',
        title: '3Blue1Brown — Essence of Calculus',
        description:
            'Visual introduction to calculus concepts including derivatives, integrals, and limits. Perfect for building conceptual understanding.',
        url: 'https://www.3blue1brown.com/topics/calculus',
        type: 'video',
        tags: ['calculus', 'intuition'],
    },
    {
        id: 'res-lac-3',
        courseId: 'linear-algebra-calculus',
        title: 'Paul\'s Online Math Notes',
        description:
            'Comprehensive calculus notes with worked examples and practice problems. Covers limits, derivatives, and integrals clearly.',
        url: 'https://tutorial.math.lamar.edu/',
        type: 'article',
        tags: ['calculus', 'practice'],
    },

    // ========== Machine Learning ==========
    {
        id: 'res-ml-1',
        courseId: 'machine-learning',
        title: 'MLVU — Machine Learning VU (Official Course Materials)',
        description:
            'All lecture videos, slides, and homework for the Machine Learning course at VU. This is THE primary resource for this course — freely available.',
        url: 'https://mlvu.github.io/',
        type: 'article',
        tags: ['lectures', 'official'],
    },
    {
        id: 'res-ml-2',
        courseId: 'machine-learning',
        title: 'MLVU — Preliminary Mathematics',
        description:
            'Overview of the math prerequisites for Machine Learning: linear algebra, calculus, probability, and statistics. Review this before the course starts.',
        url: 'https://mlvu.github.io/preliminaries/',
        type: 'article',
        tags: ['prerequisites', 'math'],
    },
    {
        id: 'res-ml-3',
        courseId: 'machine-learning',
        title: '3Blue1Brown — Neural Networks',
        description:
            'Visual introduction to neural networks and backpropagation. Helps build intuition before diving into the math-heavy course material.',
        url: 'https://www.3blue1brown.com/topics/neural-networks',
        type: 'video',
        tags: ['deep-learning', 'visualization'],
    },

    // ========== Knowledge & Data ==========
    {
        id: 'res-kd-1',
        courseId: 'knowledge-and-data',
        title: 'A Semantic Web Primer (Recommended Textbook)',
        description:
            'The recommended textbook for the course. Covers RDF, RDFS, OWL, and SPARQL foundations.',
        url: 'https://mitpress.mit.edu/9780262018289/a-semantic-web-primer/',
        type: 'article',
        tags: ['textbook', 'semantic-web'],
    },
    {
        id: 'res-kd-2',
        courseId: 'knowledge-and-data',
        title: 'Wikidata SPARQL Query Service',
        description:
            'Practice writing SPARQL queries against real-world knowledge graphs. Wikidata has millions of triples to explore.',
        url: 'https://query.wikidata.org/',
        type: 'tool',
        tags: ['sparql', 'practice'],
    },

    // ========== Probability & Statistics ==========
    {
        id: 'res-ps-1',
        courseId: 'probability-statistics',
        title: 'Introduction to Probability, Statistics and Random Processes — Free Online Textbook',
        description:
            'The official course textbook by Pishro-Nik, freely available online. Mirrors the course content exactly.',
        url: 'https://www.probabilitycourse.com/',
        type: 'article',
        tags: ['textbook', 'official'],
    },
    {
        id: 'res-ps-2',
        courseId: 'probability-statistics',
        title: 'StatQuest with Josh Starmer',
        description:
            'Clear, visual explanations of statistical concepts. Excellent for understanding probability distributions, hypothesis testing, and Bayesian inference.',
        url: 'https://www.youtube.com/@statquest',
        type: 'video',
        tags: ['statistics', 'visual'],
    },

    // ========== Python Programming ==========
    {
        id: 'res-py-1',
        courseId: 'intro-python-ai',
        title: 'Think Python — Free Online Textbook',
        description:
            'The official course textbook by Allen B. Downey. Covers Python from scratch, thinking like a computer scientist.',
        url: 'https://greenteapress.com/wp/think-python-2e/',
        type: 'article',
        tags: ['textbook', 'python'],
    },
    {
        id: 'res-py-2',
        courseId: 'intro-python-ai',
        title: 'Python Tutor — Code Visualization',
        description:
            'Step through Python code line by line and see the state of all variables. Invaluable for understanding loops, recursion, and debugging.',
        url: 'https://pythontutor.com/',
        type: 'tool',
        tags: ['debugging', 'visualization'],
    },

    // ========== General Tools ==========
    {
        id: 'res-gen-1',
        courseId: 'intelligent-systems',
        title: 'AI: A Modern Approach — Book Companion Site',
        description:
            'Resources for the Russell & Norvig textbook used in Intelligent Systems. Includes code, exercises, and errata.',
        url: 'https://aima.cs.berkeley.edu/',
        type: 'article',
        tags: ['textbook', 'ai'],
    },
    {
        id: 'res-gen-2',
        courseId: 'project-conversational-agents',
        title: 'Conversational UX Design — NCF Book',
        description:
            'The course textbook by Robert J. Moore. Covers the Natural Conversation Framework for designing effective conversational agents.',
        url: 'https://dl.acm.org/doi/book/10.1145/3304087',
        type: 'article',
        tags: ['textbook', 'conversational-ai'],
    },

    // ========== Computational Thinking ==========
    {
        id: 'res-ct-1',
        courseId: 'computational-thinking',
        title: 'Big O Notation — Full Course (freeCodeCamp)',
        description:
            'Comprehensive beginner-friendly course on Big O notation and algorithm complexity analysis. Covers O(1), O(n), O(log n), O(n²) with clear examples.',
        url: 'https://www.youtube.com/watch?v=Mo4vesaut8g',
        type: 'video',
        tags: ['big-o', 'complexity'],
    },
    {
        id: 'res-ct-2',
        courseId: 'computational-thinking',
        title: 'Sorting Algorithms Explained — Bubble Sort, Merge Sort, Quick Sort',
        description:
            'Visual explanations of the key sorting algorithms covered in the syllabus. Shows step-by-step execution and time complexity comparisons.',
        url: 'https://www.youtube.com/watch?v=RfXt_qHDEPw',
        type: 'video',
        tags: ['sorting', 'algorithms'],
    },
    {
        id: 'res-ct-3',
        courseId: 'computational-thinking',
        title: 'Graph Algorithms for Beginners (freeCodeCamp)',
        description:
            'Two-hour beginner course on graph algorithms including graph basics, DFS, BFS, shortest paths, and connected components.',
        url: 'https://www.youtube.com/watch?v=tWVWeAqZ0WU',
        type: 'video',
        tags: ['graphs', 'algorithms'],
    },
    {
        id: 'res-ct-4',
        courseId: 'computational-thinking',
        title: "Kruskal's Algorithm Visually Explained (Minimum Spanning Tree)",
        description:
            "Clear visual walkthrough of Kruskal's greedy algorithm for finding minimum spanning trees, with a real-world analogy and Python implementation.",
        url: 'https://www.youtube.com/watch?v=71UQH7Pr9kU',
        type: 'video',
        tags: ['graphs', 'greedy'],
    },
    {
        id: 'res-ct-5',
        courseId: 'computational-thinking',
        title: "Dijkstra's Shortest Path Algorithm Explained",
        description:
            "Step-by-step example of Dijkstra's algorithm for finding shortest paths in weighted graphs. Covers the logic, table tracking, and common exam traps.",
        url: 'https://www.youtube.com/watch?v=EFg3u_E6eHU',
        type: 'video',
        tags: ['graphs', 'shortest-path'],
    },
    {
        id: 'res-ct-6',
        courseId: 'computational-thinking',
        title: 'CodeSkulptor — Online Python Editor',
        description:
            'The online Python editor recommended by the course. Run Python code directly in your browser — no installation needed.',
        url: 'https://py3.codeskulptor.org/',
        type: 'tool',
        tags: ['python', 'editor'],
    },
    {
        id: 'res-ct-7',
        courseId: 'computational-thinking',
        title: "Aniel's Lectures — Computational Thinking Topics",
        description:
            'YouTube channel with clear, focused explanations of the exact topics covered in the CT syllabus. Great alternative if you prefer self-study over attending lectures.',
        url: 'https://www.youtube.com/@anielslectures/featured',
        type: 'video',
        tags: ['lectures', 'self-study'],
    },

    // ========== English Language Test ==========
    {
        id: 'res-elt-1',
        courseId: 'english-language-test',
        title: 'Learn ALL TENSES Easily in 30 Minutes — Learn English Lab',
        description:
            'Clear 30-minute review of all 12 verb tenses (simple, continuous, perfect, perfect continuous × past/present/future). 12M+ views. The most important grammar refresher for the test — knowing tense NAMES is key.',
        url: 'https://www.youtube.com/watch?v=3lI3R9_Z1HY',
        type: 'video',
        tags: ['grammar', 'tenses', 'refresher'],
    },
    {
        id: 'res-elt-2',
        courseId: 'english-language-test',
        title: 'Basic English Grammar: Parts of Speech — engVid (James)',
        description:
            'Quick overview of nouns, verbs, adjectives, adverbs, pronouns, prepositions, conjunctions, and interjections. 3M+ views. Perfect if you know English well but forgot what each term means.',
        url: 'https://www.youtube.com/watch?v=SceDmiBEESI',
        type: 'video',
        tags: ['grammar', 'parts-of-speech', 'refresher'],
    },
    {
        id: 'res-elt-3',
        courseId: 'english-language-test',
        title: 'Subject Verb Agreement — mmmEnglish',
        description:
            'Common subject–verb agreement mistakes explained clearly with examples. 2M+ views. Covers tricky cases like collective nouns, "neither...nor", and phrases between subject and verb.',
        url: 'https://www.youtube.com/watch?v=LfJPA8GwTdk',
        type: 'video',
        tags: ['grammar', 'subject-verb-agreement'],
    },
    {
        id: 'res-elt-4',
        courseId: 'english-language-test',
        title: 'English Punctuation Rules — All 14 Marks Explained',
        description:
            'Comprehensive guide to punctuation: periods, commas, semicolons, colons, apostrophes, quotation marks, and more. Covers the exact topics tested in the spelling & punctuation section.',
        url: 'https://www.youtube.com/watch?v=bY5ChVDRLus',
        type: 'video',
        tags: ['punctuation', 'spelling', 'refresher'],
    },
    {
        id: 'res-elt-5',
        courseId: 'english-language-test',
        title: 'Basic Rules to Improve Your Spelling — engVid (James)',
        description:
            'Covers key spelling rules: i before e, doubling consonants, dropping the silent e, changing y to i, and common exceptions. 1.6M+ views. Helps avoid silly mistakes on the test.',
        url: 'https://www.youtube.com/watch?v=alg7qHta0Sk',
        type: 'video',
        tags: ['spelling', 'rules', 'refresher'],
    },
    {
        id: 'res-elt-6',
        courseId: 'english-language-test',
        title: 'EnglishClub — Grammar Quizzes and Practice',
        description:
            'Free online grammar quizzes covering all parts of speech, tenses, articles, prepositions, and more. Great for quick self-assessment before the test.',
        url: 'https://www.englishclub.com/grammar/quizzes.php',
        type: 'external-quiz',
        tags: ['grammar', 'practice', 'quiz'],
    },
    {
        id: 'res-elt-7',
        courseId: 'english-language-test',
        title: 'Perfect English Grammar — Tense Exercises',
        description:
            'Free exercises for every English tense with instant answers. Practice identifying and using tenses in context — the exact skill tested in the grammar section.',
        url: 'https://www.perfect-english-grammar.com/grammar-exercises.html',
        type: 'external-quiz',
        tags: ['tenses', 'practice', 'exercises'],
    },

    // ========== General / Programme-Level (from WhatsApp 2025–2026) ==========
    {
        id: 'res-gen-3',
        courseId: 'intro-ai',
        title: 'VU Timetable Sync (rooster.vu.nl)',
        description:
            'Sync your VU schedule to Google Calendar, Outlook, or Apple Calendar. Click the sync icon in the top-right corner of your timetable page. Auto-updates when rooms or times change — essential setup for Week 1.',
        url: 'https://rooster.vu.nl/schedule',
        type: 'tool',
        tags: ['timetable', 'calendar', 'first-week'],
    },
];

