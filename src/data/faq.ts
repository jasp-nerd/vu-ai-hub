import type { FAQEntry } from '../types';

export const faqEntries: FAQEntry[] = [
  {
    id: 'faq-1',
    question: 'How many hours per week should I expect to spend on studying?',
    answer:
      'The AI bachelor is a full-time program, so officially you should expect around 40 hours per week including lectures, tutorials, and self-study. Realistically though, you\'ll probably spend way less time than this. It really depends on what kind of grades you\'re aiming for and how efficient you are at studying — everyone works at their own pace. Some periods are heavier than others though. Period 1 of year 1 is actually pretty chill and a nice way to ease into university life.',
    category: 'Study Tips',
  },
  {
    id: 'faq-2',
    question: 'Do I need prior programming experience?',
    answer:
      "No prior programming experience is required. Introduction to Python Programming for AI starts from scratch. However, if you've never coded before, expect to spend extra time in the first few weeks getting comfortable with the basics. Consider doing a free Python tutorial (like Codecademy or Python.org's tutorial) before the program starts.",
    category: 'Study Tips',
  },
  {
    id: 'faq-3',
    question: 'How do I register for courses and exams?',
    answer:
      'Course registration happens through vu.nl via the \'intekenmodule\'. You can register for the exam from the start, so that\'s easy. The important thing is to sign up for your courses on time. Don\'t forget this! Ideally, you register for ALL of your courses the very first moment you begin studying.',
    category: 'Registration',
  },
  {
    id: 'faq-4',
    question: 'What happens if I fail an exam?',
    answer:
      "Each course has one resit (herkansing), usually in a later period. You can find resit dates in the exam schedule on VUnet. Since there's only one resit, it's best to pass on the first attempt when possible. Check the course-specific rules in the OER (Onderwijs- en Examenregeling).",
    category: 'Exams',
  },
  {
    id: 'faq-5',
    question: 'What laptop/software do I need?',
    answer:
      'Any modern laptop (made in the last 5 years) works fine. You\'ll primarily use Python, Jupyter notebooks, and a text editor or IDE (VS Code is the most popular choice). macOS, Windows, and Linux all work. Some students prefer macOS or Linux for the terminal experience, but it\'s not required. VU provides free access to Microsoft Office and various other software through the university license.',
    category: 'Tools & Software',
  },
  {
    id: 'faq-6',
    question: 'Are there study spaces on campus?',
    answer:
      'Yes! The VU campus has several study spots: the University Library (open long hours during exam periods), the study landscape in the NU building, and various faculty-specific study rooms. During exam periods these can get crowded, so arrive early or try less popular spots on the higher floors.',
    category: 'Student Life',
  },
  {
    id: 'faq-7',
    question: 'Should I join a study association?',
    answer:
      "Absolutely. Joining a study association is one of the best ways to meet fellow students, attend study sessions, social events, and career events. The membership fee is minimal and the community is great.",
    category: 'Student Life',
  },
  {
    id: 'faq-8',
    question: 'What is the difference between the Intelligent Systems and Socially Aware Computing specialisations?',
    answer:
      'Intelligent Systems focuses on the technical side of AI (machine learning, computer vision, NLP, optimization). Socially Aware Computing focuses on the human and societal side (human-computer interaction, ethical AI, social computing, and designing AI that works *with* people). You choose your specialisation in year 2. Both lead to the same degree; they just emphasize different aspects of AI.',
    category: 'Program',
  },
  {
    id: 'faq-9',
    question: 'Which courses do students find the most challenging?',
    answer:
      'This varies by person, but courses that consistently challenge students include: Data Structures & Algorithms (fast pace, heavy on proofs and pseudocode), Linear Algebra & Calculus (abstract math that requires consistent practice), and Introduction to Python Programming for AI (can be tough if you have no prior coding experience). The key is to start studying early and use active recall rather than passive rereading.',
    category: 'Study Tips',
  },
  {
    id: 'faq-10',
    question: 'I feel behind on math. Where can I catch up?',
    answer:
      'Great free resources: 3Blue1Brown on YouTube for visual intuition (Essence of Linear Algebra and Essence of Calculus series), Khan Academy for practice problems, and probabilitycourse.com for probability & statistics (mirrors the VU course).',
    category: 'Study Tips',
  },
  {
    id: 'faq-11',
    question: 'How do group projects work in the AI bachelor?',
    answer:
      'Several courses have group projects, including Project Conversational Agents (PCA) and Project Intelligent Systems. Group sizes are typically 3-5 students. You\'ll often choose your own groups, so form them early with people you trust. Most group projects have individual accountability (personal reports or peer evaluation) in addition to the group deliverable.',
    category: 'Exams',
  },
  {
    id: 'faq-12',
    question: 'When should I start preparing for exams?',
    answer:
      'A good rule of thumb: start active studying 2-3 weeks before the exam. This means reviewing notes with active recall, doing practice problems, and working through past exams. Don\'t confuse attending lectures with studying. Lectures are input; studying is the active process of testing and strengthening your understanding. For heavy courses like DSA or Linear Algebra, start even earlier.',
    category: 'Exams',
  },
  {
    id: 'faq-13',
    question: 'What programming languages and tools will I use across all courses?',
    answer:
      'Python is the primary language and you\'ll use it in nearly every course after year 1. Other tools include: Jupyter Notebooks (for ML and data analysis), SWI-Prolog (for Multi-Agent Systems and Logic), VS Code (most popular IDE), Git/GitHub (version control for group projects), and LaTeX (for writing reports in some courses). Install Anaconda to get Python + Jupyter + common libraries in one package.',
    category: 'Tools & Software',
  },
  {
    id: 'faq-14',
    question: 'Are past exams available for practice?',
    answer:
      'Yes, but availability varies by course. Some professors post past exams on Canvas, others don\'t. Some courses also have practice exams or sample questions in their course materials. Always practice under timed conditions to simulate the real exam.',
    category: 'Exams',
  },
  {
    id: 'faq-15',
    question: 'Can I still pass a course if I fail one of the components?',
    answer:
      'It depends on the course. Most courses have a minimum grade requirement for each component (e.g., you must score at least a 5.0 on the exam even if your assignment grades are high). Check the course-specific rules in the Study Guide (Studiegids) on vu.nl. Some courses allow you to compensate a lower exam grade with assignments, but many don\'t.',
    category: 'Exams',
  },

  // ========== Crowdsourced from WhatsApp (2025–2026) ==========
  {
    id: 'faq-18',
    question: 'How do I sync my VU timetable to Google Calendar or Outlook?',
    answer:
      'Go to rooster.vu.nl, find your schedule, then click the "recycle/sync" icon button in the top right corner. This gives you a subscription link that you can add to Google Calendar, Outlook, or Apple Calendar. Your schedule will then update automatically whenever changes are made. This is one of the first things you should set up!',
    category: 'Tools & Software',
  },
  {
    id: 'faq-19',
    question: 'Are tutor groups (workgroups) mandatory?',
    answer:
      'It depends on the course. For Introduction to AI, tutor groups are mandatory. You MUST attend them or you will not pass the course. Always check the course-specific rules on Canvas in the first week, as attendance policies vary significantly between courses.',
    category: 'Courses',
  },
  {
    id: 'faq-20',
    question: 'What happens if I miss a practical session?',
    answer:
      'In most courses you can skip one practical session without penalty. This varies though. Some courses mark every practical, and others require attendance for all sessions. Check the course manual on Canvas at the start of each course.',
    category: 'Courses',
  },
  {
    id: 'faq-21',
    question: 'How do I sign up for Canvas groups and tutor groups?',
    answer:
      'Go to Canvas → People → Groups as soon as the course becomes available. Group sign-up deadlines can close on the very first day of teaching, sometimes even the day before the course officially starts. If you miss the deadline, you will be randomly assigned to whatever slot remains, which may not fit your schedule. Pro tip: set a calendar reminder for the day Canvas courses go live and sign up immediately.',
    category: 'Registration',
  },
];

